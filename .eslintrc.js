module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "airbnb-base"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    plugins: ['import'],
    rules: {
        'import/extensions': ['error', 'always', {
            ignorePackages: true,
            js: 'never',
        }]
    }
};