module.exports = {
  plugins: [
    "stylelint-scss/dist"
  ],
  extends: [
    "stylelint-config-recommended"
  ],
  rules: {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "scss/dollar-variable-pattern": "^foo",
    "scss/selector-no-redundant-nesting-selector": true,
    "max-empty-lines": 2,
    "indentation": 2,
    "color-hex-case": "lower",
    "no-empty-source": null,
    "selector-pseudo-element-no-unknown": null,
    "selector-type-no-unknown": null,
    "declaration-colon-space-after": "always",
  },
  ignoreFiles: ["node_modules/*.scss"]
}
