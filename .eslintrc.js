'use strict';

module.exports = {
    extends: 'ash-nazg/sauron-node',
    parserOptions: {
        sourceType: 'module'
    },
    overrides: [
        {
            files: 'test/**.js',
            env: {
                mocha: true
            },
            globals: {
                assert: 'readonly'
            }
        },
        {
            files: ['*.md', '*.html'],
            rules: {
                'import/unambiguous': 0
            }
        },
        {
            files: '.eslintrc.js',
            extends: [
                'plugin:node/recommended-script'
            ],
            rules: {
                'import/no-commonjs': 0
            }
        }
    ],
    settings: {
        polyfills: [
            'ArrayBuffer',
            'Uint8Array'
        ]
    },
    rules: {
        indent: ['error', 4],
        'no-bitwise': 0
    }
};
