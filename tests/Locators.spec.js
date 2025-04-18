const {test, expect} = require('@playwright/test')

test('Verifying Logout button',async ({page})=>{

    await page.goto('https://demoblaze.com/');

    //await page.locator('id="login2"').click()
    await page.click('id=login2')
    
    //provide the username 
    //await page.locator('#loginusername').fill('imdaad')
    await page.fill('#loginusername', 'pavanol')
    // await page.type('#loginusername', 'imdaad')

    await page.fill("input[id='loginpassword']", 'test@123')

    //Click on Login, Xpath used
    await page.click("//button[normalize-space()='Log in']")

    //verify logout button presences 
    // xpath is used
    const logoutlink = await page.locator("(//a[normalize-space()='Log out'])[1]")

    await expect(logoutlink).toBeVisible()

    await page.close()

})
