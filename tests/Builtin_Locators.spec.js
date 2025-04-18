const {test, expect} = require('@playwright/test')

test('Verifying Built-inLocators',async ({page})=>{

   //page.getByAltText() to locate an element, usually image, by its text alternative.
   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   const Logo = await page.getByAltText('company-branding')

   await expect(Logo).toBeVisible();

   //page.getByPlaceholder() to locate an input by placeholder.
   await page.getByPlaceholder('Username').fill("Admin")
   await page.getByPlaceholder('Password').fill("admin123")

   //page.getByRole() to locate by explicit and implicit accessibility attributes.
   await page.getByRole('button', {type: 'submit'}).click()

   const expectedName = 'Alessandra user'
   const actualName = await page.locator('//p[@class="oxd-userdropdown-name"]').textContent()
   await expect(await page.getByText(actualName)).toBeVisible()
   expect(actualName).toMatch(expectedName)
   
})