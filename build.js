/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { build } = require("esbuild");
const packageJson = require("./package.json");

const getBanner = (moduleName) =>
	"/*\n" +
	` * International Number Input v${packageJson.version}\n` +
	` * ${packageJson.repository.url}\n` +
	" * Licensed under the MIT license\n" +
	" */\n\n" +
	// we can remove this UMD hack once it is supported by esbuild: https://github.com/evanw/esbuild/issues/507
	"// UMD\n" +
	"(function(factory) {\n" +
	"  if (typeof module === 'object' && module.exports) {\n" +
	"    module.exports = factory();\n" +
	"  } else {\n" +
	`    window.${moduleName} = factory();\n` +
	"  }\n" +
	"}(() => {\n";

const footer =
	"\n// UMD\n" +
	"  return factoryOutput.default;\n" +
	"}));";

const shared = {
	bundle: true,
	logLevel: "info",
	format: "iife",
	globalName: "factoryOutput",
	footer: {
		js: footer,
	},
	define: {
		"process.env.VERSION": `"${packageJson.version}"`,
	},
};

//* build/js/internationalNumberInput.js
build({
	...shared,
	banner: {
		js: getBanner("internationalNumberInput"),
	},
	entryPoints: ["src/js/input/InternationalNumberInput.class.ts"],
	minify: false,
	outfile: "build/js/input/InternationalNumberInput.class.ts",
});

//* build/js/internationalNumberInput.min.js
build({
	...shared,
	banner: {
		js: getBanner("internationalNumberInput"),
	},
	entryPoints: ["src/js/input/InternationalNumberInput.class.ts"],
	minify: true,
	outfile: "tmp/input/built.min.js",
});

//* build/js/data.js
build({
	...shared,
	banner: {
		js: getBanner("allCountries"),
	},
	entryPoints: ["src/js/input/international-number-input/data.ts"],
	minify: false,
	outfile: "build/js/input/data.js",
});

//* build/js/data.min.js
build({
	...shared,
	banner: {
		js: getBanner("allCountries"),
	},
	entryPoints: ["src/js/input/international-number-input/data.ts"],
	minify: true,
	outfile: "build/js/input/data.min.js",
});

//* build/js/input/internationalNumberInputWithUtils.js
// build({
// 	...shared,
// 	banner: {
// 		js: getBanner("internationalNumberInput"),
// 	},
// 	entryPoints: ["src/js/input/international-number-input/internationalNumberInputWithUtils.ts"],
// 	minify: false,
// 	outfile: "build/js/input/internationalNumberInputWithUtils.js",
// });

// //* build/js/internationalNumberInputWithUtils.min.js
// build({
// 	...shared,
// 	banner: {
// 		js: getBanner("internationalNumberInput"),
// 	},
// 	entryPoints: ["src/js/input/international-number-input/internationalNumberInputWithUtils.ts"],
// 	minify: true,
// 	outfile: "build/js/input/internationalNumberInputWithUtils.min.js",
// });