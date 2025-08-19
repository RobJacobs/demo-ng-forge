export async function isElementClickable(page, locator) {
  const element = await locator.elementHandle();
  return await page.evaluate((el) => {
    const rect = el.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const elementAtPoint = document.elementFromPoint(x, y);
    return el === elementAtPoint;
  }, element);
}
