import { test, expect} from '@playwright/test';
import { STORAGE_STATE } from '../playwright.config';


test.describe('wikipedia test', () => {

  test('login in to Wikipedia', async ({ page }) => {
    
    console.info(process.env.PASSWORD) 

    await page.goto('/');
    await page.getByRole('link', { name: 'Acceder' }).click();
    await page.getByPlaceholder('Escribe tu nombre de usuario').fill('Test-End-To-End');
    await page.getByPlaceholder('Escribe tu contraseña').fill(process.env.PASSWORD!);

    await page.getByRole('button', { name: 'Acceder' }).click();

    // await expect(page.getByRole('button', { name: 'Herramientas personales' }) ).toHaveText('');


    await page.context().storageState( { path: STORAGE_STATE });
    // await page.close();

  });

});