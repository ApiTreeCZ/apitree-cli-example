module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier'],
    parserOptions: {
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            project: './tsconfig.json',
        },
    },
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'prettier/prettier': 'error',
        '@typescript-eslint/no-empty-interface': 0,
        'no-empty-pattern': 0,
        '@typescript-eslint/explicit-member-accessibility': 0,
        '@typescript-eslint/no-var-requires': 0,
        'no-console': 1,
    },
    extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'prettier/@typescript-eslint'],
};
