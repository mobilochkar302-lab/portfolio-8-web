import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';
import { ContactsPage } from './pages/ContactsPage';

test.describe('Портфоліо – E2E тести', () => {
  
  test('Головна сторінка має правильний заголовок та секції', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();

    await expect(page).toHaveTitle(/Портфолио|Маргарита/);
    await expect(homePage.heroHeading).toBeVisible();
    await expect(homePage.servicesSection).toBeVisible();
    await expect(homePage.projectsSection).toBeVisible();
    await expect(homePage.aboutSection).toBeVisible();
    await expect(homePage.projectCards).toHaveCount(4);
  });

  test('Сторінка контактів містить правильну контактну інформацію', async ({ page }) => {
    const contactsPage = new ContactsPage(page);
    await contactsPage.goto();

    await expect(contactsPage.heading).toContainText('Контакти');
    await expect(contactsPage.phoneValue).toBeVisible();
    await expect(contactsPage.emailValue).toBeVisible();
    await expect(contactsPage.addressValue).toBeVisible();
    
    const phoneText = await contactsPage.getPhoneText();
    expect(phoneText).toMatch(/\+380\d{9}/);
    
    const emailText = await contactsPage.getEmailText();
    expect(emailText).toContain('@gmail.com');
    
    await expect(contactsPage.socialIcons).toHaveCount(3);
  });

  test('Навігація між сторінками працює через клік по посиланню в меню', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    
    const contactsLink = page.locator('.nav-list a:has-text("Контакти"), .nav-list a:has-text("Contacts")').first();
    await contactsLink.click();
    
    await expect(page).toHaveURL(/.*\/#\/contacts/);
    
    const contactsPage = new ContactsPage(page);
    await expect(contactsPage.heading).toBeVisible();
    
    const logo = page.locator('.brand h1').first();
    await logo.click();
    await expect(page).toHaveURL(/.*\/#\/$/);
    await expect(homePage.heroHeading).toBeVisible();
  });
});