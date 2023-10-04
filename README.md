# ESLint Compat Example

This repository demonstrates an issue with `eslint-plugin-compat` related to detecting browser compatibility for certain JavaScript features, specifically `Object.hasOwn`.

## Steps to Reproduce

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Run ESLint with `npx eslint index.js`.

Expected behavior: An error should be flagged for the use of `Object.hasOwn` due to its lack of support in Safari < 15.3 based on the provided browserslist configuration.

Actual behavior: No error is flagged, potentially because the plugin assumes polyfills are present due to the Babel configuration.

See: https://github.com/amilajack/eslint-plugin-compat/issues/602