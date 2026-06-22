class LoginPage {
  constructor(page) {
    this.page = page;

    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.errorMessage = page.locator('[data-test="error"]');
    this.pageTitle = page.locator('[data-test="title"]');
  }

  async open() {
    await this.page.goto('/');
  }

  async fillUsername(username) {
    await this.usernameInput.fill(username);
  }

  async fillPassword(password) {
    await this.passwordInput.fill(password);
  }

  async submit() {
    await this.loginButton.click();
  }

  async login(username, password) {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.submit();
  }
}

module.exports = { LoginPage };