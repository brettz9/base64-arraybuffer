'use strict';

module.exports = {
    extends: 'ash-nazg/sauron-node-overrides',
    overrides: [
        {
            files: ['*.md/*.js', '*.html'],
            rules: {
                'import/unambiguous': 0
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
