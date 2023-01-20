module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");

  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/assets");

  // correct formating of dates
  const { DateTime } = require("luxon");

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  // https://github.com/11ty/eleventy/issues/898
  function sortByOrder(values) {
    let vals = [...values];
    return vals.sort((a, b) => Math.sign(a.data.order - b.data.order));
  }

  eleventyConfig.addFilter("sortByOrder", sortByOrder);

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
