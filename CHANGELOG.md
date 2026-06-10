# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.1] - 2026-06-11

### Security

- Removed `grunt-responsive-images`, `grunt-spritesmith`, and `grunt-contrib-imagemin` from dev dependencies, eliminating transitive vulnerabilities in `request` (SSRF), `tough-cookie` (prototype pollution), `qs` (DoS), and `uuid` (buffer bounds check). The image pipeline now uses direct ImageMagick shell calls.

## [0.1.0] - 2026-05-11

### Added

- Initial release.
- Searchable country-flag dropdown attached to any `<input>` element.
- Formatting, placeholder generation, and validation for international standard numbers (NIN, TIN, SSN).
- CSS custom-property–driven stylesheet with fully configurable class names.
- TypeScript declarations.
