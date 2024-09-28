import ashNazg from 'eslint-config-ash-nazg';

export default [
    {
        ignores: [
            'dist',
            'test/test-polyglot.js'
        ]
    },
    ...ashNazg(['sauron']),
    ...ashNazg(['sauron', 'node']).map((cfg) => {
        return {
            files: ['test/test.js'],
            ...cfg
        };
    }),
    {
        rules: {
            '@stylistic/indent': ['error', 4],
            'no-bitwise': 0
        }
    }
];
