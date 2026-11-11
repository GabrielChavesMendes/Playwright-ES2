const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('Caminho Principal: cadastra um novo visitante com sucesso', async ({ page }) => {
  await page.getByLabel('Nome do Cliente *').fill('Gato de Botas');
  await page.getByRole('button', { name: 'Cadastrar' }).click();
  
  await expect(page.getByText('Gato de Botas', { exact: true })).toBeVisible();
  await expect(page.getByText('1 cadastros')).toBeVisible();
});

test('Regra de Erro: impede cadastro com campo vazio e exibe alerta', async ({ page }) => {
  await page.getByLabel('Nome do Cliente *').fill('   ');
  await page.getByRole('button', { name: 'Cadastrar' }).click();
  
  await expect(page.getByRole('alert')).toHaveText('O nome do cliente é obrigatório.');
  await expect(page.getByText('0 cadastros')).toBeVisible();
});

test('Regra de Estado: visitante cadastrado sobrevive ao recarregar a página', async ({ page }) => {
  await page.getByLabel('Nome do Cliente *').fill('Burro Falante');
  await page.getByRole('button', { name: 'Cadastrar' }).click();
  
  await page.reload();
  
  await expect(page.getByText('Burro Falante', { exact: true })).toBeVisible();
  await expect(page.getByText('1 cadastros')).toBeVisible();
});