const SearchTitlePage = require("../pageobjects/search.title.page");
const SecurePage = require("../pageobjects/secure.page");
const { remote } = require("webdriverio");

import { expect as chaiExpect, assert } from "chai";

describe("IMDB Search Title", () => {
  //implementing ITEM a in our test plan
  it("test type", async () => {
    await SearchTitlePage.open();
    await SearchTitlePage.setInputTitleName("Mark");

    const titleInputField = await SearchTitlePage.inputTitleName;
    const titleValue = await titleInputField.getValue();

    chaiExpect(titleValue).to.be.a("string");
  });

  it("search for movies by title", async () => {
    await SearchTitlePage.open();
    await SearchTitlePage.setInputTitleName("Mark");

    await SearchTitlePage.clickOnSearch();

    const movieTitlesCSS = await $$(".lister-item-header > a");

    // loop through the movie title elements and get their text
    const movieTitles = [];
    for (let i = 0; i < movieTitlesCSS.length; i++) {
      const title = await movieTitlesCSS[i].getText();
      if (title.includes("Mark")) movieTitles.push(title);
    }

    const titlesCountInPage = await $(
      "#main > div > div.desc > span:nth-child(1)"
    ).getText();

    const titleCountStr = titlesCountInPage.split("-")[1];
    const regex = /^\d+/; // Matches the first number in the string
    const titleCount = titleCountStr.match(regex);
    const moviesOnPage = parseInt(titleCount[0]);

    console.log(movieTitles.length, moviesOnPage, movieTitles);
    const finalMatchesMoviesCount = movieTitles.length;
    chaiExpect(finalMatchesMoviesCount).to.be.greaterThan(0.4 * moviesOnPage);
  });

  it("search for movies by type", async () => {
    await SearchTitlePage.open();
    // await SearchTitlePage.setInputTitleName("Mark");
    const inputType = await $("#title_type-1");
    await inputType.click();
    await SearchTitlePage.clickOnSearch();

    const movieTimes = await $$(".runtime");

    // loop through the movie title elements and get their text
    const movieTimesAfter = [];
    for (let i = 0; i < movieTimes.length; i++) {
      const time = await movieTimes[i].getText();
      console.log(time);
      if (time) movieTimesAfter.push(parseInt(time));
    }

    movieTimesAfter.map((time) =>
      chaiExpect(time).to.be.greaterThan(60 * 0.85)
    );
    console.log(movieTimesAfter);
  });
});
