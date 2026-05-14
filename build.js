/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { build } = require("esbuild");
const packageJson = require("./package.json");

const licenseHeader =
	"/*\n" +
	` * International Number Input v${packageJson.version}\n` +
	` * ${packageJson.repository.url}\n` +
	" * Licensed under the MIT license\n" +
	" */\n";

const sharedBase = {
	bundle: true,
	logLevel: "info",
	define: {
		"process.env.VERSION": `"${packageJson.version}"`,
	},
};

// esbuild IIFE sets the global to the full exports namespace {default: fn, ...}.
// This footer unwraps it so window.X is the function directly, matching the old UMD behaviour.
const iifeUnwrapFooter = (globalName) => ({
	js: `${globalName} = ${globalName}.default;`,
});

// ── Main plugin ───────────────────────────────────────────────────────────────
const mainEntry = ["src/js/input/InternationalNumberInput.ts"];

//* build/esm/input/InternationalNumberInput.mjs
build({
	...sharedBase,
	format: "esm",
	banner: { js: licenseHeader },
	entryPoints: mainEntry,
	outfile: "build/esm/input/InternationalNumberInput.mjs",
});

//* build/cjs/input/InternationalNumberInput.cjs
build({
	...sharedBase,
	format: "cjs",
	banner: { js: licenseHeader },
	entryPoints: mainEntry,
	outfile: "build/cjs/input/InternationalNumberInput.cjs",
});

//* build/iife/input/InternationalNumberInput.js
build({
	...sharedBase,
	format: "iife",
	globalName: "internationalNumberInput",
	banner: { js: licenseHeader },
	footer: iifeUnwrapFooter("internationalNumberInput"),
	entryPoints: mainEntry,
	minify: false,
	outfile: "build/iife/input/InternationalNumberInput.js",
});

//* build/iife/input/InternationalNumberInput.min.js
build({
	...sharedBase,
	format: "iife",
	globalName: "internationalNumberInput",
	banner: { js: licenseHeader },
	footer: iifeUnwrapFooter("internationalNumberInput"),
	entryPoints: mainEntry,
	minify: true,
	outfile: "build/iife/input/InternationalNumberInput.min.js",
});

// ── Country data ──────────────────────────────────────────────────────────────
const dataEntry = ["src/js/input/international-number-input/data.ts"];

//* build/esm/input/data.mjs
build({
	...sharedBase,
	format: "esm",
	banner: { js: licenseHeader },
	entryPoints: dataEntry,
	outfile: "build/esm/input/data.mjs",
});

//* build/cjs/input/data.cjs
build({
	...sharedBase,
	format: "cjs",
	banner: { js: licenseHeader },
	entryPoints: dataEntry,
	outfile: "build/cjs/input/data.cjs",
});

//* build/iife/input/data.js
build({
	...sharedBase,
	format: "iife",
	globalName: "allCountries",
	banner: { js: licenseHeader },
	footer: iifeUnwrapFooter("allCountries"),
	entryPoints: dataEntry,
	minify: false,
	outfile: "build/iife/input/data.js",
});

//* build/iife/input/data.min.js
build({
	...sharedBase,
	format: "iife",
	globalName: "allCountries",
	banner: { js: licenseHeader },
	footer: iifeUnwrapFooter("allCountries"),
	entryPoints: dataEntry,
	minify: true,
	outfile: "build/iife/input/data.min.js",
});

// ── Plugin + utils bundle ─────────────────────────────────────────────────────
const withUtilsEntry = ["src/js/input/internationalNumberInputWithUtils.ts"];

//* build/esm/input/internationalNumberInputWithUtils.mjs
build({
	...sharedBase,
	format: "esm",
	banner: { js: licenseHeader },
	entryPoints: withUtilsEntry,
	outfile: "build/esm/input/internationalNumberInputWithUtils.mjs",
});

//* build/cjs/input/internationalNumberInputWithUtils.cjs
build({
	...sharedBase,
	format: "cjs",
	banner: { js: licenseHeader },
	entryPoints: withUtilsEntry,
	outfile: "build/cjs/input/internationalNumberInputWithUtils.cjs",
});

//* build/iife/input/internationalNumberInputWithUtils.js
build({
	...sharedBase,
	format: "iife",
	globalName: "internationalNumberInput",
	banner: { js: licenseHeader },
	footer: iifeUnwrapFooter("internationalNumberInput"),
	entryPoints: withUtilsEntry,
	minify: false,
	outfile: "build/iife/input/internationalNumberInputWithUtils.js",
});
