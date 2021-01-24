# Tailwind Matcher

A simple package that matches any HEX color to its closest Tailwind CSS 2.0 color using a Nearest Neighbor algorithm by [Daniel Tao](https://github.com/dtao/nearest-color).

## Installation

```bash
$ npm install tailwind-matcher
```

## Usage

```javascript
import { tailwindMatcher } from 'tailwind-matcher';

tailwindMatcher('#313232') //returns 'gray-800'
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
