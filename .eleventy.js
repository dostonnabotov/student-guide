// import filters
const date = require("./src/_11ty/filters/date.js");
const sortByOrder = require("./src/_11ty/filters/sortByOrder.js");

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");

  // paththrough copy
  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/assets");

  // filters
  eleventyConfig.addFilter("sortByOrder", sortByOrder);
  eleventyConfig.addFilter("dateMedium", date.getMedium);
  eleventyConfig.addFilter("dateISO", date.getISO);

  // base config
  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      data: "_data",
    },
  };
};
