import { Page, expect } from '@playwright/test';

export class LoginPage {
  private usernameInput = '#username';
  private passwordInput = '#password';
  private loginButton = 'button[type="submit"]';
  private errorMessage = '.error-message'; // adjust selector if needed

  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('/login');
  }

  async login(username: string, password: string) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  async verifyLoginSuccess() {
    await expect(this.page).toHaveURL(/dashboard/);
  }

  async verifyInvalidLoginError() {
    await expect(this.page.locator(this.errorMessage))
      .toBeVisible();
  }
}
