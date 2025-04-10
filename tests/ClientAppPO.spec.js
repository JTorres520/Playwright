const {test, expect} = require('@playwright/test');
const {POManager} = require('../pageobjects/POManager');
//const { DashboardPage } = require('../pageobjects/DashboardPage');
const dataset =  JSON.parse(JSON.stringify(require("../utils/TestDataLoginPage.json")));



test('@Regression Client App login for', async ({page})=>
{
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(dataset.username,dataset.password); 
// Select TimeSheet from Dashboard page
    const dashboardPage = poManager.gatDashboardPage();
    await dashboardPage.selectTimeSheet();
// Enter time for the week
    const timesheetPage = poManager.getTimesheetPage();
    await timesheetPage.waitForTimesheetPage();
    await timesheetPage.enterTimeForDays(dataset.hours);
    await timesheetPage.enterAdditionalInfo();
    await timesheetPage.saveTime(); 


    

});




