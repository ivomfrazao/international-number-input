const sass = require('sass');

module.exports = function(grunt) {
  return {
    main: {
      options: {
        implementation: sass,
        sourcemap: "none",
        style: "compressed"
      },
      files: {
        'build/css/InternationalNumberInput.css': 'src/css/InternationalNumberInput.scss'
      }
    }
  };
};
