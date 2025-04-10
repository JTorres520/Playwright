const {LoginPage} = require('./LoginPage');
const {DashboardPage} = require('./DashboardPage');
const {TimesheetPage} = require('./TimeSheetPage');

class POManager
{
constructor(page)
{
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.dashboardPage = new DashboardPage(this.page);
    this.timesheetPage = new TimesheetPage(this.page);
}

getLoginPage()
{
    return this.loginPage;
}

gatDashboardPage()
{
    return this.dashboardPage;

}

getTimesheetPage()
{
    return this.timesheetPage;


}

}
module.exports = {POManager};