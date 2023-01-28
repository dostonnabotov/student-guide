/**
 * Sort array of objects by their order
 * @param {Array} values - An array of objects
 * @returns {Array} Sorted array
 */
function sortByOrder(values) {
  let vals = [...values];
  return vals.sort((a, b) => Math.sign(a.data.order - b.data.order));
}

module.exports = sortByOrder;
