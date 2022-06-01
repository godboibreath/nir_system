module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'airbnb', 'plugin:prettier/recommended'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
        'no-unused-vars': ['warn'],
        'react/function-component-definition': [
            'warn',
            {
                namedComponents: 'arrow-function',
                unnamedComponents: ['arrow-function'],
            },
        ],
        'no-debugger': 'warn',
        'react/prop-types': ['warn', { ignore: ['children'] }],
        'react/state-in-constructor': 'off',
    },
};
