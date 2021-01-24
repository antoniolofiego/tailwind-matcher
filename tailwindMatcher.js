const colors = require('tailwindcss/colors'); // Most up to date colors from Tailwind CSS
const flatten = require('flat'); //

const tailwindReference = flatten(colors, (options = { delimiter: '-' }));
const nearestColor = require('nearest-color').from(tailwindReference);

function tailwindMatcher(color) {
    return nearestColor(color).name;
}

module.exports = { tailwindMatcher };
