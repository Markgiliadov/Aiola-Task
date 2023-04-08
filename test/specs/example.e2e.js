const SearchTitlePage = require("../pageobjects/search.title.page");
const SecurePage = require("../pageobjects/secure.page");
const { remote } = require("webdriverio");

import { expect as chaiExpect, assert } from "chai";

// describe("IMDB Search Title", () => {
//   //implementing ITEM a in our test plan
//   it("test type", async () => {
//     await SearchTitlePage.open();
//     await SearchTitlePage.setInputTitleName("Mark");

//     const titleInputField = await SearchTitlePage.inputTitleName;
//     const titleValue = await titleInputField.getValue();

//     chaiExpect(titleValue).to.be.a("string");
//   });

//   it("search for movies by title", async () => {
//     await SearchTitlePage.open();
//     await SearchTitlePage.setInputTitleName("Mark");

//     await SearchTitlePage.clickOnSearch();

//     const movieTitlesCSS = await $$(".lister-item-header > a");

//     // loop through the movie title elements and get their text
//     const movieTitles = [];
//     for (let i = 0; i < movieTitlesCSS.length; i++) {
//       const title = await movieTitlesCSS[i].getText();
//       if (title.includes("Mark")) movieTitles.push(title);
//     }

//     const titlesCountInPage = await $(
//       "#main > div > div.desc > span:nth-child(1)"
//     ).getText();

//     const titleCountStr = titlesCountInPage.split("-")[1];
//     const regex = /^\d+/; // Matches the first number in the string
//     const titleCount = titleCountStr.match(regex);
//     const moviesOnPage = parseInt(titleCount[0]);

//     console.log(movieTitles.length, moviesOnPage, movieTitles);
//     const finalMatchesMoviesCount = movieTitles.length;
//     chaiExpect(finalMatchesMoviesCount).to.be.greaterThan(0.4 * moviesOnPage);
//   });
// });
describe("IMDB Search Type", () => {
  // it("search for movies by type Feature-Film and see if results match", async () => {
  //   await SearchTitlePage.open();
  //   // await SearchTitlePage.setInputTitleName("Mark");
  //   const inputType = await $("#title_type-1");
  //   await inputType.click();
  //   await SearchTitlePage.clickOnSearch();

  //   const movieTimes = await $$(".runtime");

  //   // loop through the movie title elements and get their text
  //   const movieTimesAfter = [];
  //   for (let i = 0; i < movieTimes.length; i++) {
  //     const time = await movieTimes[i].getText();
  //     console.log(time);
  //     if (time) movieTimesAfter.push(parseInt(time));
  //   }
  //   movieTimesAfter.map(
  //     (time) => chaiExpect(time).to.be.greaterThan(60 * 0.85) // with accordance of the definiton
  //   );
  //   console.log(movieTimesAfter);
  // });
  it("search for movies by type TV-Movie and see if results match", async () => {
    await SearchTitlePage.open();
    // await SearchTitlePage.setInputTitleName("Mark");
    const inputType = await $("#title_type-2");
    await inputType.click();
    await SearchTitlePage.clickOnSearch();

    const movieTimes = await $$(".lister-item-year text-muted unbold");

    // loop through the movie title elements and get their text
    const movieTimesAfter = [];
    for (let i = 0; i < movieTimes.length; i++) {
      const year = await movieTimes[i].getText();
      console.log(year);
      if (year) movieTimesAfter.push(parseInt(year));
    }
    movieTimesAfter.map((year) => chaiExpect(year).to.include("TV"));
    console.log(movieTimesAfter);
  });
  //3
  // it("search for movies by type TV Series and see if results match", async () => {
  //   await SearchTitlePage.open();
  //   // await SearchTitlePage.setInputTitleName("Mark");
  //   const inputType = await $("#title_type-3");
  //   await inputType.click();
  //   await SearchTitlePage.clickOnSearch();

  //   const movieTimes = await $$(".runtime");

  //   // loop through the movie title elements and get their text
  //   const movieTimesAfter = [];
  //   for (let i = 0; i < movieTimes.length; i++) {
  //     const time = await movieTimes[i].getText();
  //     console.log(time);
  //     if (time) movieTimesAfter.push(parseInt(time));
  //   }
  //   movieTimesAfter.map((time) =>
  //     chaiExpect(time).to.be.greaterThan(60 * 0.85)
  //   );
  //   console.log(movieTimesAfter);
  // });
  // //4
  // it("search for movies by type TV Episode and see if results match", async () => {
  //   await SearchTitlePage.open();
  //   // await SearchTitlePage.setInputTitleName("Mark");
  //   const inputType = await $("#title_type-4");
  //   await inputType.click();
  //   await SearchTitlePage.clickOnSearch();

  //   const movieTimes = await $$(".runtime");

  //   // loop through the movie title elements and get their text
  //   const movieTimesAfter = [];
  //   for (let i = 0; i < movieTimes.length; i++) {
  //     const time = await movieTimes[i].getText();
  //     console.log(time);
  //     if (time) movieTimesAfter.push(parseInt(time));
  //   }
  //   movieTimesAfter.map((time) =>
  //     chaiExpect(time).to.be.greaterThan(60 * 0.85)
  //   );
  //   console.log(movieTimesAfter);
  // });
  // //5
  // it("search for movies by type TV Special and see if results match", async () => {
  //   await SearchTitlePage.open();
  //   // await SearchTitlePage.setInputTitleName("Mark");
  //   const inputType = await $("#title_type-5");
  //   await inputType.click();
  //   await SearchTitlePage.clickOnSearch();

  //   const movieTimes = await $$(".runtime");

  //   // loop through the movie title elements and get their text
  //   const movieTimesAfter = [];
  //   for (let i = 0; i < movieTimes.length; i++) {
  //     const time = await movieTimes[i].getText();
  //     console.log(time);
  //     if (time) movieTimesAfter.push(parseInt(time));
  //   }
  //   movieTimesAfter.map((time) =>
  //     chaiExpect(time).to.be.greaterThan(60 * 0.85)
  //   );
  //   console.log(movieTimesAfter);
  // });
  // //6
  // it("search for movies by type TV Mini-Series and see if results match", async () => {
  //   await SearchTitlePage.open();
  //   // await SearchTitlePage.setInputTitleName("Mark");
  //   const inputType = await $("#title_type-6");
  //   await inputType.click();
  //   await SearchTitlePage.clickOnSearch();

  //   const movieTimes = await $$(".runtime");

  //   // loop through the movie title elements and get their text
  //   const movieTimesAfter = [];
  //   for (let i = 0; i < movieTimes.length; i++) {
  //     const time = await movieTimes[i].getText();
  //     console.log(time);
  //     if (time) movieTimesAfter.push(parseInt(time));
  //   }
  //   movieTimesAfter.map((time) =>
  //     chaiExpect(time).to.be.greaterThan(60 * 0.85)
  //   );
  //   console.log(movieTimesAfter);
  // });
  // //7
  // it("search for movies by type Documentary and see if results match", async () => {
  //   await SearchTitlePage.open();
  //   // await SearchTitlePage.setInputTitleName("Mark");
  //   const inputType = await $("#title_type-7");
  //   await inputType.click();
  //   await SearchTitlePage.clickOnSearch();

  //   const movieTimes = await $$(".runtime");

  //   // loop through the movie title elements and get their text
  //   const movieTimesAfter = [];
  //   for (let i = 0; i < movieTimes.length; i++) {
  //     const time = await movieTimes[i].getText();
  //     console.log(time);
  //     if (time) movieTimesAfter.push(parseInt(time));
  //   }
  //   movieTimesAfter.map((time) =>
  //     chaiExpect(time).to.be.greaterThan(60 * 0.85)
  //   );
  //   console.log(movieTimesAfter);
  // });
  // //8
  // it("search for movies by type Video Game and see if results match", async () => {
  //   await SearchTitlePage.open();
  //   // await SearchTitlePage.setInputTitleName("Mark");
  //   const inputType = await $("#title_type-8");
  //   await inputType.click();
  //   await SearchTitlePage.clickOnSearch();

  //   const movieTimes = await $$(".runtime");

  //   // loop through the movie title elements and get their text
  //   const movieTimesAfter = [];
  //   for (let i = 0; i < movieTimes.length; i++) {
  //     const time = await movieTimes[i].getText();
  //     console.log(time);
  //     if (time) movieTimesAfter.push(parseInt(time));
  //   }
  //   movieTimesAfter.map((time) =>
  //     chaiExpect(time).to.be.greaterThan(60 * 0.85)
  //   );
  //   console.log(movieTimesAfter);
  // });
  // //9
  // it("search for movies by type Short Film and see if results match", async () => {
  //   await SearchTitlePage.open();
  //   // await SearchTitlePage.setInputTitleName("Mark");
  //   const inputType = await $("#title_type-9");
  //   await inputType.click();
  //   await SearchTitlePage.clickOnSearch();

  //   const movieTimes = await $$(".runtime");

  //   // loop through the movie title elements and get their text
  //   const movieTimesAfter = [];
  //   for (let i = 0; i < movieTimes.length; i++) {
  //     const time = await movieTimes[i].getText();
  //     console.log(time);
  //     if (time) movieTimesAfter.push(parseInt(time));
  //   }
  //   movieTimesAfter.map((time) =>
  //     chaiExpect(time).to.be.greaterThan(60 * 0.85)
  //   );
  //   console.log(movieTimesAfter);
  // });
  // //10
  // it("search for movies by type Video and see if results match", async () => {
  //   await SearchTitlePage.open();
  //   // await SearchTitlePage.setInputTitleName("Mark");
  //   const inputType = await $("#title_type-10");
  //   await inputType.click();
  //   await SearchTitlePage.clickOnSearch();

  //   const movieTimes = await $$(".runtime");

  //   // loop through the movie title elements and get their text
  //   const movieTimesAfter = [];
  //   for (let i = 0; i < movieTimes.length; i++) {
  //     const time = await movieTimes[i].getText();
  //     console.log(time);
  //     if (time) movieTimesAfter.push(parseInt(time));
  //   }
  //   movieTimesAfter.map((time) =>
  //     chaiExpect(time).to.be.greaterThan(60 * 0.85)
  //   );
  //   console.log(movieTimesAfter);
  // });
  // //11
  // it("search for movies by type TV Short and see if results match", async () => {
  //   await SearchTitlePage.open();
  //   // await SearchTitlePage.setInputTitleName("Mark");
  //   const inputType = await $("#title_type-11");
  //   await inputType.click();
  //   await SearchTitlePage.clickOnSearch();

  //   const movieTimes = await $$(".runtime");

  //   // loop through the movie title elements and get their text
  //   const movieTimesAfter = [];
  //   for (let i = 0; i < movieTimes.length; i++) {
  //     const time = await movieTimes[i].getText();
  //     console.log(time);
  //     if (time) movieTimesAfter.push(parseInt(time));
  //   }
  //   movieTimesAfter.map((time) =>
  //     chaiExpect(time).to.be.greaterThan(60 * 0.85)
  //   );
  //   console.log(movieTimesAfter);
  // });
  // //12
  // it("search for movies by type Podcast Series and see if results match", async () => {
  //   await SearchTitlePage.open();
  //   // await SearchTitlePage.setInputTitleName("Mark");
  //   const inputType = await $("#title_type-12");
  //   await inputType.click();
  //   await SearchTitlePage.clickOnSearch();

  //   const movieTimes = await $$(".runtime");

  //   // loop through the movie title elements and get their text
  //   const movieTimesAfter = [];
  //   for (let i = 0; i < movieTimes.length; i++) {
  //     const time = await movieTimes[i].getText();
  //     console.log(time);
  //     if (time) movieTimesAfter.push(parseInt(time));
  //   }
  //   movieTimesAfter.map((time) =>
  //     chaiExpect(time).to.be.greaterThan(60 * 0.85)
  //   );
  //   console.log(movieTimesAfter);
  // });
  //Podcast Episode + Music Video are missing
});
