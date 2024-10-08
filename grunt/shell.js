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
		webp: {
			command: 'cwebp build/img/flags.png -lossless -o build/img/flags.webp && cwebp build/img/flags@2x.png -lossless -o build/img/flags@2x.webp'
		},
		test: {
			command: 'npm run test'
		}
	};
};
