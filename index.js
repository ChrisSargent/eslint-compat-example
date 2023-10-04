// This is a feature not supported in Safari < 15.3 but will not be polyfilled due to the @babel/preset-env config being wrong
if (Object.hasOwn({}, 'property')) {
  console.log('Property exists.');
}

// structuredClone is also not supported and correctly show an error
structuredClone(options)
