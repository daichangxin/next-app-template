module.exports = {
    extends: ['@shm-open/eslint-config-bundle/react', 'plugin:@next/next/recommended'],
    rules: {
        'no-bitwise': 'off',
        // TODO: remove this rule after new bundle version released
        'react/jsx-fragments': ['error', 'syntax'],
        'import/no-unused-modules': 'off',
        'import/no-default-export': 'off',
    },
};
