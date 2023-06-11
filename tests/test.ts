import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
	await page.goto('http://127.0.0.1:5173/users');
	await page.getByRole('button', { name: '新規登録' }).click();
	await page.getByPlaceholder(' ').fill('testuser2');
	await page.getByRole('button', { name: '新規登録' }).nth(1).click();
	await page.getByRole('cell', { name: 'testuser2' }).click();
});
