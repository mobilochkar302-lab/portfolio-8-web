import { type Page, type Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly heroHeading: Locator;
  readonly servicesSection: Locator;
  readonly projectsSection: Locator;
  readonly aboutSection: Locator;
  readonly projectCards: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heroHeading = page.locator('#hero h1').first();
    this.servicesSection = page.locator('#services');
    this.projectsSection = page.locator('#projects');
    this.aboutSection = page.locator('#about');
    this.projectCards = page.locator('.project-items');
  }

  async goto() {
    // Для HashRouter головна сторінка – '/#/'
    await this.page.goto('/#/');
    await this.page.waitForSelector('#hero', { timeout: 10000 });
  }

  async getProjectCardByTitle(title: string): Promise<Locator> {
    return this.projectCards.filter({ hasText: title }).first();
  }
}