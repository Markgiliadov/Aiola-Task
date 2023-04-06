const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchTitlePage extends Page {
  /**
   * define selectors using getter methods
   */

  get inputTitleName() {
    return $('input[name="title"]');
  }

  get inputUsername() {
    return $("#username");
  }

  get inputPassword() {
    return $("#password");
  }

  get btnSubmit() {
    return $("#main > p:nth-child(28) > button");
  }

  get movieList() {
    return $("#main > div > div.lister.list.detail.sub-list");
  }
  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async setInputTitleName(title) {
    await this.inputTitleName.setValue(title);
    // await this.btnSubmit.click();
  }

  async searchByTitleName() {
    await this.btnSubmit.click();
  }
  async login(username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

  /**document.querySelector("#main > p:nth-child(28) > button")
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open("/search/title/");
  }
}

module.exports = new SearchTitlePage();
