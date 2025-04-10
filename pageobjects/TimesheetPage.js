class TimesheetPage {
    constructor(page) {
        this.page = page;
        const timesheetFrame = page.locator('iframe[name="TargetContent"]');
        const projectidFrame = page.locator('iframe[name="ptModFrame_0"]');
        const activityidFrame = page.locator('iframe[name="ptModFrame_1"]');
        const confirmationAlert = page.locator('#alertbutton');
        this.day2 = timesheetFrame.contentFrame().locator('input[name="QTY_DAY2\\$0"]');
        this.day3 = timesheetFrame.contentFrame().locator('input[name="QTY_DAY3\\$0"]');
        this.day4 = timesheetFrame.contentFrame().locator('input[name="QTY_DAY4\\$0"]');
        this.day5 = timesheetFrame.contentFrame().locator('input[name="QTY_DAY5\\$0"]');
        this.day6 = timesheetFrame.contentFrame().locator('input[name="QTY_DAY6\\$0"]'); 
        this.timeReportingCode =    timesheetFrame.contentFrame().locator('select[name="TRC\\$0"]'); 
        this.projectId = timesheetFrame.contentFrame().locator('[id="AX_PROJECT_ID\\$prompt\\$0"]');
        this.projectIdValue = projectidFrame.contentFrame().getByRole('link', { name: '01875' });
        this.activityId = timesheetFrame.contentFrame().locator('[id="ACTIVITY_ID\\$prompt\\$0"]');  
        this.activityIdValue = activityidFrame.contentFrame().getByRole('link', { name: 'NB_HRS' });
        this.saveButton = timesheetFrame.contentFrame().locator('a').filter({ hasText: 'Save for Later' });
        this.noButton = confirmationAlert.locator('a').filter({ hasText: 'No' });

        
    }

    async waitForTimesheetPage() {

        await this.page.waitForTimeout(2000);
        //await this.timesheetFrame.waitFor({ state: 'visible' });
    }

    async enterTimeForDays(hours ) {
        for (let i = 2; i <= 6; i++) {
            await this[`day${i}`].fill(hours);
        }
        await this.page.waitForTimeout(1000);
    }

    async enterAdditionalInfo() {
        await this.timeReportingCode.selectOption('MHRSI');
        await this.projectId.click();
        await this.projectIdValue.click();
        await this.activityId.click();
        await this.activityIdValue.click();
        await this.page.waitForTimeout(1000);
    }

    async saveTime() {
        await this.saveButton.click();
        await this.page.waitForTimeout(2000);
        await this.noButton.click();
        await this.page.waitForTimeout(5000);
    }


}

module.exports = {TimesheetPage};