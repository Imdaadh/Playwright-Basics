const {test, expect} = require('@playwright/test')


test('Locating Multiple Elements',async ({page})=>{

    await page.goto('https://demoblaze.com/');

    const links = await page.$$('a')

    const linksLength = links.length;
    console.log('Total number of links: ', linksLength)

    for (const link of links){
        const linktext = await link.textContent();
        console.log(linktext)
    }

    //older for loop method
   /*  for (let i = 0; i < links.length; i++) {
        const linktext = await links[i].textContent();
        console.log(linktext);
    }
 */

})


//     test('Getting all the product',async ({page})=>{


//         page.waitForSelector("//div[@id='tbodyid']//div//h4/a")
//         await page.goto('https://demoblaze.com/');
    
//         const products = await page.$$("//div[@id='tbodyid']//div//h4/a")
       
    
//         const productsLength = products.length;
//         console.log('Total number of links: ', productsLength)

// /*         const ActualProducts = 9;

//         await expect(productsLength).toBe(ActualProducts) */
    
//         for (const product of products){
//             const prodtext = await product.textContent();
//             console.log(prodtext)
//         }
    
    
//     })

 
test('Getting all the products', async ({ page }) => {
  // Navigate to the page first
  await page.goto('https://demoblaze.com/');

  // Use Playwright's locator with XPath
  const products = page.locator('//div[@id="tbodyid"]//h4/a');

  // Wait for at least one to appear
  await expect(products.first()).toBeVisible();

  // Get count
  const productsCount = await products.count();
  console.log('Total number of links:', productsCount);

  // Assert there are exactly 9 products
  expect(productsCount).toBe(9);

  // Print each product name
  for (let i = 0; i < productsCount; i++) {
    const text = await products.nth(i).textContent();
    console.log(text?.trim());
  }
});
