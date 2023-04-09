const SearchTitlePage = require("../pageobjects/search.title.page");
const SecurePage = require("../pageobjects/secure.page");
const { remote } = require("webdriverio");

import { expect as chaiExpect, assert, expect } from "chai";
const ContentType = {
  FEATURE_FILM: "Feature Film",
  TV_MOVIE: "TV Movie",
  TV_SERIES: "TV Series",
  TV_EPISODE: "TV Episode",
  TV_SPECIAL: "TV Special",
  TV_MINI_SERIES: "TV Mini-Series",
  DOCUMENTARY: "Documentary",
  VIDEO_GAME: "Video Game",
  SHORT_FILM: "Short Film",
  VIDEO: "Video",
  TV_SHORT: "TV Short",
  PODCAST_SERIES: "Podcast Series",
  PODCAST_EPISODE: "Podcast Episode",
  MUSIC_VIDEO: "Music Video",
};
// describe("IMDB Search Title", () => {
//   // implementing ITEM a in our test plan
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
// describe("IMDB Search Type", () => {
//   //1
//   it("search for movies by type Feature-Film and see if results match", async () => {
//     await SearchTitlePage.open();
//     // await SearchTitlePage.setInputTitleName("Mark");
//     const inputType = await $("#title_type-1");
//     await inputType.click();
//     await SearchTitlePage.clickOnSearch();

//     const header = await $("#main > div > h1");
//     const headerText = await header.getText();
//     console.log(headerText);
//     chaiExpect(headerText).to.include(ContentType.FEATURE_FILM);

//     const movieTimes = await $$(".runtime");

//     // loop through the movie title elements and get their text
//     const movieTimesAfter = [];
//     for (let i = 0; i < movieTimes.length; i++) {
//       const time = await movieTimes[i].getText();
//       console.log(time);
//       if (time) movieTimesAfter.push(parseInt(time));
//     }
//     movieTimesAfter.map(
//       (time) => chaiExpect(time).to.be.greaterThan(60 * 0.85) // with accordance of the definiton
//     );
//     console.log(movieTimesAfter);
//   });
//   //2
//   it("should get a list of year and TV-movie string for each movie", async () => {
//     await SearchTitlePage.open();
//     const inputType = await $("#title_type-2");
//     await inputType.click();

//     await SearchTitlePage.clickOnSearch();
//     const newItems = [];
//     const movieTVList = await $$(".lister-item-year");

//     const header = await $("#main > div > h1");
//     const headerText = await header.getText();
//     console.log(headerText);
//     chaiExpect(headerText).to.include(ContentType.TV_MOVIE);

//     for (let i = 0; i < movieTVList.length; i++) {
//       const isTVMovie = await movieTVList[i].getText();
//       if (isTVMovie.includes("TV")) newItems.push(isTVMovie);
//     }
//     console.log(newItems);

//     const titlesCountInPage = await $(
//       "#main > div > div.desc > span:nth-child(1)"
//     ).getText();

//     const titleCountStr = titlesCountInPage.split("-")[1];
//     const regex = /^\d+/; // Matches the first number in the string
//     const titleCount = titleCountStr.match(regex);
//     const moviesOnPage = parseInt(titleCount[0]);

//     // console.log(movieTVList.length, moviesOnPage, movieTVList);
//     const finalMatchesMoviesCount = newItems.length;
//     chaiExpect(finalMatchesMoviesCount).to.be.greaterThan(0.9 * moviesOnPage);
//   });
//   //3
//   it("search for movies by type TV Series and see if results match", async () => {
//     await SearchTitlePage.open();
//     const inputType = await $("#title_type-3");
//     await inputType.click();
//     await SearchTitlePage.clickOnSearch();

//     const header = await $("#main > div > h1");
//     const headerText = await header.getText();
//     chaiExpect(headerText).to.include(ContentType.TV_SERIES);
//     const newItems = [];
//     const movieTVSeries = await $$(".lister-item-year");

//     // Matches the first number in the string

//     for (let i = 0; i < movieTVSeries.length; i++) {
//       const isTVSeries = await movieTVSeries[i].getText();
//       newItems.push(isTVSeries);
//     }
//     for (let i = 0; i < newItems.length; i++) {
//       const el = newItems[i];
//       const isMatched2 = el.match(/\(d{4}–d{4}\)/);

//       console.log(isMatched2);
//       if (isMatched2) newItems.push(el);
//     }
//     console.log(newItems);
//     const titlesCountInPage = await $(
//       "#main > div > div.desc > span:nth-child(1)"
//     ).getText();

//     const titleCountStr = titlesCountInPage.split("-")[1];
//     const regex = /^\d+/; // Matches the first number in the string
//     const titleCount = titleCountStr.match(regex);
//     const moviesOnPage = parseInt(titleCount[0]);

//     const finalMatchesMoviesCount = movieTVSeries.length;

//     chaiExpect(finalMatchesMoviesCount).to.be.greaterThan(0.9 * moviesOnPage);
//   });
//   //4
//   // it("search for movies by type TV Episode and see if results match", async () => {
//   //   await SearchTitlePage.open();
//   //   // await SearchTitlePage.setInputTitleName("Mark");
//   //   const inputType = await $("#title_type-4");
//   //   await inputType.click();
//   //   await SearchTitlePage.clickOnSearch();

//   //   const movieTimes = await $$(".runtime");

//   //   // loop through the movie title elements and get their text
//   //   const movieTimesAfter = [];
//   //   for (let i = 0; i < movieTimes.length; i++) {
//   //     const time = await movieTimes[i].getText();
//   //     console.log(time);
//   //     if (time) movieTimesAfter.push(parseInt(time));
//   //   }
//   //   movieTimesAfter.map((time) =>
//   //     chaiExpect(time).to.be.greaterThan(60 * 0.85)
//   //   );
//   //   console.log(movieTimesAfter);
//   // });
//   //5
//   // it("search for movies by type TV Special and see if results match", async () => {
//   //   await SearchTitlePage.open();
//   //   // await SearchTitlePage.setInputTitleName("Mark");
//   //   const inputType = await $("#title_type-5");
//   //   await inputType.click();
//   //   await SearchTitlePage.clickOnSearch();

//   //   const movieTimes = await $$(".runtime");

//   //   // loop through the movie title elements and get their text
//   //   const movieTimesAfter = [];
//   //   for (let i = 0; i < movieTimes.length; i++) {
//   //     const time = await movieTimes[i].getText();
//   //     console.log(time);
//   //     if (time) movieTimesAfter.push(parseInt(time));
//   //   }
//   //   movieTimesAfter.map((time) =>
//   //     chaiExpect(time).to.be.greaterThan(60 * 0.85)
//   //   );
//   //   console.log(movieTimesAfter);
//   // });
//   //6
//   // it("search for movies by type TV Mini-Series and see if results match", async () => {
//   //   await SearchTitlePage.open();
//   //   // await SearchTitlePage.setInputTitleName("Mark");
//   //   const inputType = await $("#title_type-6");
//   //   await inputType.click();
//   //   await SearchTitlePage.clickOnSearch();

//   //   const movieTimes = await $$(".runtime");

//   //   // loop through the movie title elements and get their text
//   //   const movieTimesAfter = [];
//   //   for (let i = 0; i < movieTimes.length; i++) {
//   //     const time = await movieTimes[i].getText();
//   //     console.log(time);
//   //     if (time) movieTimesAfter.push(parseInt(time));
//   //   }
//   //   movieTimesAfter.map((time) =>
//   //     chaiExpect(time).to.be.greaterThan(60 * 0.85)
//   //   );
//   //   console.log(movieTimesAfter);
//   // });
//   //7
//   // it("search for movies by type Documentary and see if results match", async () => {
//   //   await SearchTitlePage.open();
//   //   // await SearchTitlePage.setInputTitleName("Mark");
//   //   const inputType = await $("#title_type-7");
//   //   await inputType.click();
//   //   await SearchTitlePage.clickOnSearch();

//   //   const movieTimes = await $$(".runtime");

//   //   // loop through the movie title elements and get their text
//   //   const movieTimesAfter = [];
//   //   for (let i = 0; i < movieTimes.length; i++) {
//   //     const time = await movieTimes[i].getText();
//   //     console.log(time);
//   //     if (time) movieTimesAfter.push(parseInt(time));
//   //   }
//   //   movieTimesAfter.map((time) =>
//   //     chaiExpect(time).to.be.greaterThan(60 * 0.85)
//   //   );
//   //   console.log(movieTimesAfter);
//   // });
//   //8
//   // it("search for movies by type Video Game and see if results match", async () => {
//   //   await SearchTitlePage.open();
//   //   // await SearchTitlePage.setInputTitleName("Mark");
//   //   const inputType = await $("#title_type-8");
//   //   await inputType.click();
//   //   await SearchTitlePage.clickOnSearch();

//   //   const movieTimes = await $$(".runtime");

//   //   // loop through the movie title elements and get their text
//   //   const movieTimesAfter = [];
//   //   for (let i = 0; i < movieTimes.length; i++) {
//   //     const time = await movieTimes[i].getText();
//   //     console.log(time);
//   //     if (time) movieTimesAfter.push(parseInt(time));
//   //   }
//   //   movieTimesAfter.map((time) =>
//   //     chaiExpect(time).to.be.greaterThan(60 * 0.85)
//   //   );
//   //   console.log(movieTimesAfter);
//   // });
//   //9
//   // it("search for movies by type Short Film and see if results match", async () => {
//   //   await SearchTitlePage.open();
//   //   // await SearchTitlePage.setInputTitleName("Mark");
//   //   const inputType = await $("#title_type-9");
//   //   await inputType.click();
//   //   await SearchTitlePage.clickOnSearch();

//   //   const movieTimes = await $$(".runtime");

//   //   // loop through the movie title elements and get their text
//   //   const movieTimesAfter = [];
//   //   for (let i = 0; i < movieTimes.length; i++) {
//   //     const time = await movieTimes[i].getText();
//   //     console.log(time);
//   //     if (time) movieTimesAfter.push(parseInt(time));
//   //   }
//   //   movieTimesAfter.map((time) =>
//   //     chaiExpect(time).to.be.greaterThan(60 * 0.85)
//   //   );
//   //   console.log(movieTimesAfter);
//   // });
//   //10
//   // it("search for movies by type Video and see if results match", async () => {
//   //   await SearchTitlePage.open();
//   //   // await SearchTitlePage.setInputTitleName("Mark");
//   //   const inputType = await $("#title_type-10");
//   //   await inputType.click();
//   //   await SearchTitlePage.clickOnSearch();

//   //   const movieTimes = await $$(".runtime");

//   //   // loop through the movie title elements and get their text
//   //   const movieTimesAfter = [];
//   //   for (let i = 0; i < movieTimes.length; i++) {
//   //     const time = await movieTimes[i].getText();
//   //     console.log(time);
//   //     if (time) movieTimesAfter.push(parseInt(time));
//   //   }
//   //   movieTimesAfter.map((time) =>
//   //     chaiExpect(time).to.be.greaterThan(60 * 0.85)
//   //   );
//   //   console.log(movieTimesAfter);
//   // });
//   //11
//   // it("search for movies by type TV Short and see if results match", async () => {
//   //   await SearchTitlePage.open();
//   //   // await SearchTitlePage.setInputTitleName("Mark");
//   //   const inputType = await $("#title_type-11");
//   //   await inputType.click();
//   //   await SearchTitlePage.clickOnSearch();

//   //   const movieTimes = await $$(".runtime");

//   //   // loop through the movie title elements and get their text
//   //   const movieTimesAfter = [];
//   //   for (let i = 0; i < movieTimes.length; i++) {
//   //     const time = await movieTimes[i].getText();
//   //     console.log(time);
//   //     if (time) movieTimesAfter.push(parseInt(time));
//   //   }
//   //   movieTimesAfter.map((time) =>
//   //     chaiExpect(time).to.be.greaterThan(60 * 0.85)
//   //   );
//   //   console.log(movieTimesAfter);
//   // });
//   //12
//   // it("search for movies by type Podcast Series and see if results match", async () => {
//   //   await SearchTitlePage.open();
//   //   // await SearchTitlePage.setInputTitleName("Mark");
//   //   const inputType = await $("#title_type-12");
//   //   await inputType.click();
//   //   await SearchTitlePage.clickOnSearch();

//   //   const movieTimes = await $$(".runtime");

//   //   // loop through the movie title elements and get their text
//   //   const movieTimesAfter = [];
//   //   for (let i = 0; i < movieTimes.length; i++) {
//   //     const time = await movieTimes[i].getText();
//   //     console.log(time);
//   //     if (time) movieTimesAfter.push(parseInt(time));
//   //   }
//   //   movieTimesAfter.map((time) =>
//   //     chaiExpect(time).to.be.greaterThan(60 * 0.85)
//   //   );
//   //   console.log(movieTimesAfter);
//   // });
//   //Podcast Episode + Music Video are missing
// });
describe("IMDB Search Date", () => {
  it("search movies by date and verify results", async () => {
    //sss//
    const date1 = "1888-01-01";
    const date2 = "2018-01-01";
    await SearchTitlePage.open();
    // const inputType = await $(".release_date-min");
    const releaseDateInputFrom = await $('input[name="release_date-min"]');
    const releaseDateInputTo = await $('input[name="release_date-max"]');

    await releaseDateInputFrom.setValue(date1);
    await releaseDateInputTo.setValue(date2);
    await SearchTitlePage.clickOnSearch();

    const header = await $("#main > div > h1");
    const headerText = await header.getText();

    console.log(headerText, `Released between ${date1} and ${date2}`);
    chaiExpect(headerText).to.include(`Released between ${date1} and ${date2}`);
    const newItems = [];
    const movieTVSeries = await $$(".lister-item-year");

    // Matches the first number in the string

    for (let i = 0; i < movieTVSeries.length; i++) {
      const isTVSeries = await movieTVSeries[i].getText();
      newItems.push(isTVSeries.replace(/[()]/g, ""));
    }
    console.log(newItems);
    for (let i = 0; i < newItems.length; i++) {
      const date = newItems[i].toString();
      const dates = date.split("–");
      if (dates.length > 1) {
        console.log(dates, dates.length);
        const fromYear = dates[0];

        const toYear = dates[0];
        const toYearOriginal = parseInt(date2.split("–")[0]);
        const fromYearOriginal = parseInt(date1.split("–")[0]);
        chaiExpect(parseInt(toYear)).to.lessThanOrEqual(toYearOriginal);

        chaiExpect(parseInt(fromYear)).to.greaterThanOrEqual(fromYearOriginal);
      }
    }
    // console.log(newItems);
    const titlesCountInPage = await $(
      "#main > div > div.desc > span:nth-child(1)"
    ).getText();

    const titleCountStr = titlesCountInPage.split("-")[1];
    const regex = /^\d+/; // Matches the first number in the string
    const titleCount = titleCountStr.match(regex);
    const moviesOnPage = parseInt(titleCount[0]);

    const finalMatchesMoviesCount = movieTVSeries.length;

    chaiExpect(finalMatchesMoviesCount).to.be.greaterThan(0.9 * moviesOnPage);
  });
});
