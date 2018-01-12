module.exports = {
  "env": {
    "mocha": true
  },
  "globals": {
    "expect": true
  },
  "plugins": [
    "chai-friendly"
  ],
  "rules": {
    "no-unused-expressions": 0,
    "chai-friendly/no-unused-expressions": 2,
    "no-unused-vars": [
      "error",
      {
        "varsIgnorePattern": "should|expect"
      }
    ]
  }
}
