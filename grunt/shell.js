module.exports = function (grunt) {
	return {
		buildJs: {
			command: 'node build.js'
		},
		genTsDeclaration: {
			command: 'tsc --p tsconfig.json'
		},
		eslint: {
			command: 'eslint src/js/input/InternationalNumberInput.ts'
		},
		resizeRetina: {
			command: 'for f in node_modules/region-flags/png/??.png; do convert "$f" -resize 40x30! "src/img/flags/@2x/$(basename $f)"; done'
		},
		resizeRegular: {
			command: 'for f in src/img/flags/@2x/*.png; do convert "$f" -resize 50% "src/img/flags/@1x/$(basename $f)"; done'
		},
		spriteMain: {
			command: 'mkdir -p build/img && convert src/img/flags/@1x/??.png +smush 2 build/img/flags.png'
		},
		spriteRetina: {
			command: 'mkdir -p build/img && convert src/img/flags/@2x/??.png +smush 4 build/img/flags@2x.png'
		},
		optimizeSprites: {
			command: 'convert build/img/flags.png -define png:compression-level=9 -strip build/img/flags.png && ' +
			         'convert build/img/flags@2x.png -define png:compression-level=9 -strip build/img/flags@2x.png'
		},
		webp: {
			command: 'cwebp build/img/flags.png -lossless -o build/img/flags.webp && cwebp build/img/flags@2x.png -lossless -o build/img/flags@2x.webp'
		},
		test: {
			command: 'npm run test'
		}
	};
};
