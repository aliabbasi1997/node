const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const currentItem = _.flattenDeep(items);

console.log(currentItem);
