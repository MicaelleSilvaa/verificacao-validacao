export default async function fillAndClickOutside(page, element, content?) {
	await element.click();
	await element.fill(content);
	await page.locator('body').click();
}
