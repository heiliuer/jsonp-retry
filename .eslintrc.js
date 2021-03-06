module.exports = {
  extends: ['standard'],
  parserOptions: {
    ecmaFeatures: {
      classes: true
    }
  },
  env: {
    node: true,
    es6: true
  },
  globals: {
    describe: true,
    it: true,
    expect: true,
    before: true,
    after: true
  },
  rules: {
    'no-unused-expressions': 0,
    'prefer-const': ['error']
  }
}
