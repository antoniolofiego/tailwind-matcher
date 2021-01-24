const colors = require('tailwindcss/colors'); // Most up to date colors from Tailwind CSS
const flatten = require('flat'); // Used to flatten the Tailwind colors object

// Flattens the color object and adds a "-" delimiter for exact TailwindCSS match
const tailwindReference = flatten(colors, (options = { delimiter: '-' }));

// Initialized the color matcher on the flattened Tailwind colors object
const nearestColor = require('nearest-color').from(tailwindReference);

// Checks if the hex color is correctly formatted and returns the closest match, otherwise throws an error.
function tailwindMatcher(color) {
    // Checks if the provided color is a correct hex format (either #XXX or #XXXXXX)
    if (/^#([0-9A-F]{3}){1,2}$/i.test(color)) {
        return nearestColor(color).name;
    } else {
        throw new Error('Wrong Hex syntax. Please use #xxx or #xxxxxx.');
    }
}

module.exports = { tailwindMatcher };
