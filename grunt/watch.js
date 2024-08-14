module.exports = function (grunt) {
  return {
    js: {
      files: "src/js/**/*",
      tasks: "shell:buildJs"
    },
    translations: {
      files: "src/i18n/**/*",
      tasks: "build:translations",
    },
    pluginCss: {
      files: ["src/css/flags.scss", "src/css/intlTelInput.scss"],
      tasks: "sass:main"
    },
    demoCss: {
      files: "src/css/demo.scss",
      tasks: "sass:demo"
    }
  };
};
