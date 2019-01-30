var OFF = 0, WARN = 1, ERROR = 2;
module.exports = {
    root: true,
    env: {
      browser: true,
      node: true,
      jest: true
    },
    parserOptions: {
      ecmaVersion: 10,
      parser: 'babel-eslint'
    },
    extends: [      
      "plugin:vue/recommended",
      "eslint:recommended",
      "airbnb-base"
    ],
    // required to lint *.vue files
    plugins: [
      'node',
      'script-tags',
      'html'
    ],
    // add your custom rules here
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? ERROR : OFF,
      'no-debugger': process.env.NODE_ENV === 'production' ? ERROR : OFF,
      'eqeqeq': [ERROR, 'smart'],
      'no-extra-parens': ERROR,
      'semi': [WARN, 'always'],
      'linebreak-style': OFF,
      'comma-dangle': [ERROR, 'never'],
      'indent': [ERROR, 4],
      'quotes': [ERROR, 'single'],
      'no-shadow': [ERROR, { 'allow': ['state'] }],
      "space-before-function-paren": [OFF, "always"],
      'no-unused-expressions': OFF,
      'no-sequences': OFF,
      'no-param-reassign': [
        ERROR,
        {
          'props': true,
          'ignorePropertyModificationsFor': [
            'state',
            'acc',
            'e',
            'ctx',
            'req',
            'request',
            'res',
            'response',
            '$scope'
          ]
        }
      ],
      "vue/max-attributes-per-line": [ERROR,
        {
            "singleline": 1,
            "multiline": {
                "max": 1,
                "allowFirstLine": false
            }
        }
    ],
    }
  }
  