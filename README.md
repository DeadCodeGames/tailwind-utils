# Tailwind Utils ××
###### Version 1.0.0

Welcome to the **Tailwind Utils** repository! This project provides a custom set of Tailwind CSS utilities that... may or may not be useful to you, but again, it's up to you if you use it or not :3 

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Available Utilities](#available-utilities)
- [Contributing and Issues](#contributing-and-issues)
- [License](#license)

## Installation

To install the package, you can use npm:

```bash
npm install --save-dev @dead404code/tailwind-utilities
```

## Usage

To use the utilities provided by this package, you need to include it in your Tailwind CSS configuration. Here’s how you can do it:

1. Open your **`tailwind.config.js`** file.
2. Add the plugin to your configuration:

```JS
const tailwindUtils = require('@dead404code/tailwind-utilities');

module.exports = {
  // other configurations...
  plugins: [
    tailwindUtils,
    // other plugins...
  ],
};
```
3. Now you can use the custom utilities in your HTML or JSX files!

### Available Utilities:

| Utility Class | Description |
|------------------------|---------------------------------|
| .app-region-drag | Enables dragging the window using the element. |
| .app-region-no-drag | Disables dragging the window using the element. |

## Contributing and Issues
Contributions are welcome! If you have suggestions for improvements or new utilities, feel free to [open an issue](https://github.com/DeadCodeGames/tailwind-utils/issues) or [submit a pull request](https://github.com/DeadCodeGames/tailwind-utils/pulls).

If you encounter any bugs or have feature requests, please report them in the [issues section](https://github.com/DeadCodeGames/tailwind-utils/issues).

## License

This project is licensed under the [WTFPL](https://en.wikipedia.org/wiki/WTFPL) (Do What The Fuck You Want To Public License). You are free to copy, modify, and distribute this package as you wish.