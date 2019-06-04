import babel from 'rollup-plugin-babel';

export default [{
    input: 'src/base64-arraybuffer.js',
    output: {
        file: 'dist/base64-arraybuffer.js',
        format: 'umd',
        name: 'Base64ArrayBuffer'
    },
    plugins: [
        babel()
    ]
}, {
    input: 'src/base64-arraybuffer.js',
    output: {
        file: 'dist/base64-arraybuffer-es.js',
        format: 'es',
        name: 'Base64ArrayBuffer'
    },
    plugins: [
        babel()
    ]
}];
