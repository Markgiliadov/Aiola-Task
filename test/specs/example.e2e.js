const SearchTitlePage = require("../pageobjects/search_title.page");
const SecurePage = require("../pageobjects/secure.page");
const { remote } = require("webdriverio");
const expect = require("chai").expect;

describe("IMDB Search Title", () => {
  //implementing ITEM a in our test plan
  it("test type", async () => {
    await SearchTitlePage.open();
    await SearchTitlePage.setInputTitleName("Mark");

    const titleInputField = await SearchTitlePage.inputTitleName;
    const titleValue = await titleInputField.getValue();

    await expect(typeof titleValue).to.equal("string");
  });

  it("search for title", async () => {
    await SearchTitlePage.open();
    await SearchTitlePage.setInputTitleName("Mark");

    const titleInputField = await SearchTitlePage.inputTitleName;
    const titleValue = await titleInputField.getValue();

    console.log("title 2!!!", titleValue);
    await SearchTitlePage.searchByTitleName();
    expect(titleValue).toHaveTextContaining("Mark");

    let movieTitles = $$("#main > div > div.lister.list.detail.sub-list > div");
    movieTitles.forEach((element) =>
      expect(element.getText()).toHaveTextContaining(titleValue)
    );
  });

  it("test type", async () => {
    await SearchTitlePage.open();
    await SearchTitlePage.setInputTitleName("Mark");

    const titleInputField = await SearchTitlePage.inputTitleName;
    const titleValue = await titleInputField.getValue();

    await expect(typeof titleValue).to.equal("string");
  });

  it("search for title", async () => {
    await SearchTitlePage.open();
    await SearchTitlePage.setInputTitleName("Mark");

    const titleInputField = await SearchTitlePage.inputTitleName;
    const titleValue = await titleInputField.getValue();

    console.log("title 2!!!", titleValue);
    await SearchTitlePage.searchByTitleName();
    expect(titleValue).toHaveTextContaining("Mark");

    let movieTitles = $$("#main > div > div.lister.list.detail.sub-list > div");
    movieTitles.forEach((element) =>
      expect(element.getText()).toHaveTextContaining(titleValue)
    );
  });
});
