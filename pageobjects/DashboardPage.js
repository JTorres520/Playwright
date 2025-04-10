class DashboardPage {

    constructor (page)
    {
        this.page = page;
        this.navBar= page.getByRole('button', { name: 'NavBar' });
        const navBarframe = page.locator('iframe[name="psNavBarIFrame"]');
        this.menu = navBarframe.contentFrame().getByRole('button', { name: 'Menu' });
        this.selfService = navBarframe.contentFrame().getByRole('menuitem', { name: 'Self Service' });
        this.reportTime = navBarframe.contentFrame().getByRole('menuitem', { name: 'Time Reporting' })
        this.timeReporting = navBarframe.contentFrame().getByRole('menuitem', { name: 'Report Time' });
        this.timeSheet = navBarframe.contentFrame().getByRole('menuitem', { name: 'Timesheet' });
   
    }

    async selectTimeSheet ()
    {
       await this.navBar.click(); 
       await this.menu.click();
       await this.selfService.click();
       await this.reportTime.click();
       await this.timeReporting.click();
       await this.timeSheet.click();
       await this.page.waitForTimeout(5000);
       
    }



}

module.exports = {DashboardPage};