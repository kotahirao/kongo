import { test, expect } from '@playwright/test';

test.describe('ユーザー一覧', () => {
	test('ユーザー登録', async ({ page }) => {
		await page.goto('http://127.0.0.1:5173/users');

		await expect(page).toHaveTitle('ユーザー一覧');

		const createUserName = 'testuser';

		await page.getByRole('button', { name: '新規登録' }).click();
		await page.getByPlaceholder(' ').click();
		await page.getByPlaceholder(' ').fill(createUserName);
		await page.getByRole('button', { name: '登録', exact: true }).click();
		await expect(page.getByRole('cell', { name: createUserName, exact: true })).toBeVisible();
	});

	test('ユーザー登録2', async ({ page }) => {
		await page.goto('http://127.0.0.1:5173/users');

		await expect(page).toHaveTitle('ユーザー一覧');

		const createUserName = 'testuser';

		await page.getByRole('button', { name: '新規登録' }).click();
		await page.getByPlaceholder(' ').click();
		await page.getByPlaceholder(' ').fill(createUserName);
		await page.getByRole('button', { name: '登録', exact: true }).click();
		await expect(page.getByRole('cell', { name: createUserName, exact: true })).toBeVisible();
	});
});
