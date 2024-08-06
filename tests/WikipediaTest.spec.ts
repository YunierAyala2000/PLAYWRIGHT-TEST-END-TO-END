import { test, expect} from '@playwright/test';
// import { test, expect, type Page } from '@playwright/test';


// test('log in to Wikipedia', async ({ page }) => {

//   await page.goto('https://es.wikipedia.org/wiki/Wikipedia:Portada');

//   await page.getByRole('link', { name: 'Acceder' }).click();

//   await page.getByPlaceholder('Escribe tu nombre de usuario').click();
//   await page.getByPlaceholder('Escribe tu nombre de usuario').fill('Test-End-To-End');

//   await page.getByPlaceholder('Escribe tu contraseña').click();
//   await page.getByPlaceholder('Escribe tu contraseña').fill('H*%J3/mwvi4.UiM');

//   await page.getByRole('button', { name: 'Acceder' }).click();

// });

// test.beforeEach(async ({ page }) => {
//   await page.goto('https://es.wikipedia.org/wiki/Wikipedia:Portada');
// });

test.describe('wikipedia test', () => {

  test('login in to Wikipedia', async ({ page }) => {
    
    await page.goto('https://es.wikipedia.org/wiki/Wikipedia:Portada');

    await page.getByRole('link', { name: 'Acceder' }).click();
  
    await page.getByPlaceholder('Escribe tu nombre de usuario').click();
    await page.getByPlaceholder('Escribe tu nombre de usuario').fill('Test-End-To-End');
  
    await page.getByPlaceholder('Escribe tu contraseña').click();
    await page.getByPlaceholder('Escribe tu contraseña').fill('H*%J3/mwvi4.UiM');
  
    await page.getByRole('button', { name: 'Acceder' }).click();

    await page.goto('https://es.wikipedia.org/w/index.php?title=Especial:P%C3%A1gina_inicial&source=personaltoolslink&namespace=4');

  });

  // test('change theme', async ({ page }) => {
    
  //   await page.getByRole('button', { name: 'Herramientas personales' })
  //   await page.getByRole('link', { name: 'Preferencias' })
  //   await page.locator('#skin-client-prefs-skin-theme').getByText('Claro', { exact: true })

  //   await page.locator('#skin-client-prefs-skin-theme').getByText('Oscuro', { exact: true })

  // });

  // test('publications', async ({ page }) => {
    
  //   await page.getByRole('button', { name: 'Herramientas personales' })
   

  // });


});