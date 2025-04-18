const {test, expect} = require('@playwright/test')

test('Verifying the homepage title',async ({page})=>{

   // navigating to the page and verifying the title
   await page.goto('https://demoblaze.com/');
   const pageTitle = await page.title()

   console.log('Page title is: ', pageTitle)

   await expect(page).toHaveURL('https://demoblaze.com/')
   await expect(page).toHaveTitle('STORE')

   await page.close()


})