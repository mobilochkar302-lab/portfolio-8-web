import { type Page, type Locator } from '@playwright/test';

export class ContactsPage {
  readonly page: Page;
  readonly heading: Locator;
  readonly phoneValue: Locator;
  readonly emailValue: Locator;
  readonly addressValue: Locator;
  readonly socialIcons: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('#contacts-page h1');
    this.phoneValue = page.locator('.contacts-container h2:has-text("Номер телефону") + hr + h2');
    this.emailValue = page.locator('.contacts-container h2:has-text("Електронна адреса") + hr + h2');
    this.addressValue = page.locator('.contacts-container h2:has-text("Місце проживання") + hr + h2');
    // Ось головна зміна – обмежуємо контейнером контактів
    this.socialIcons = page.locator('.contacts-container .social-icon .social-item');
  }

  async goto() {
    await this.page.goto('/#/contacts');
    await this.page.waitForSelector('#contacts-page', { timeout: 10000 });
  }

  async getPhoneText(): Promise<string> {
    return (await this.phoneValue.textContent()) || '';
  }

  async getEmailText(): Promise<string> {
    return (await this.emailValue.textContent()) || '';
  }
}