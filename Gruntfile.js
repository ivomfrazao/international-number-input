module.exports = function (grunt) {

	// load all tasks from package.json
	require('load-grunt-config')(grunt);
	require('time-grunt')(grunt);

	/**
	 * TASKS
	 */
	// build everything ready for a commit
	grunt.registerTask('build', ['css', 'js', 'translations']);
	// build utils
	grunt.registerTask('build:utils', ['closure-compiler:utils']);
	// just CSS
	grunt.registerTask('css', ['sass', 'cssmin']);
	// just images
	grunt.registerTask('img', ['responsive_images:retina', 'exec:evenizer', 'responsive_images:regular', 'sprite', 'imagemin', 'generate-scss-metadata', 'shell:webp']);
	// just javascript
	grunt.registerTask('js', ['shell:eslint', 'shell:genTsDeclaration', 'shell:buildJs', 'replace', 'replace:removeImport']);

	// Travis CI
	grunt.registerTask('travis', ['jasmine']);
	// bump version number in 3 files, rebuild js to update headers, then commit, tag and push
	grunt.registerTask('version', ['shell:test', 'bump-only', 'js', 'bump-commit']);
	grunt.registerTask('version:minor', ['shell:test', 'bump-only:minor', 'js', 'bump-commit']);
	grunt.registerTask('version:major', ['shell:test', 'bump-only:major', 'js', 'bump-commit']);

};