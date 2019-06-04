import {encode, decode} from '../src/base64-arraybuffer.js';

function stringArrayBuffer (str) {
    const buffer = new ArrayBuffer(str.length);
    const bytes = new Uint8Array(buffer);

    [...str].forEach((str, i) => {
        bytes[i] = str.charCodeAt(0);
    });

    return buffer;
}

function testArrayBuffers (buffer1, buffer2) {
    const len1 = buffer1.byteLength;
    const len2 = buffer2.byteLength;
    const view1 = new Uint8Array(buffer1);
    const view2 = new Uint8Array(buffer2);

    if (len1 !== len2) {
        return false;
    }

    for (let i = 0; i < len1; i++) {
        if (!view1[i] || view1[i] !== view2[i]) {
            return false;
        }
    }
    return true;
}

describe('base64-arraybuffer tests', function () {
    it('encode', () => {
        assert.strictEqual(
            encode(stringArrayBuffer('Hello world')),
            'SGVsbG8gd29ybGQ=',
            "encode 'Hello world'"
        );
        assert.strictEqual(
            encode(stringArrayBuffer('Man')),
            'TWFu',
            "encode 'Man'"
        );
        assert.strictEqual(
            encode(stringArrayBuffer('Ma')),
            'TWE=',
            "encode 'Ma'"
        );
        assert.strictEqual(
            encode(stringArrayBuffer('Hello worlds!')),
            'SGVsbG8gd29ybGRzIQ==',
            "encode 'Hello worlds!'"
        );
    });
    it('decode', () => {
        assert(
            testArrayBuffers(
                decode('TWFu'),
                stringArrayBuffer('Man')
            ),
            "decode 'Man'"
        );
        assert(
            testArrayBuffers(
                decode('SGVsbG8gd29ybGQ='),
                stringArrayBuffer('Hello world')
            ),
            "decode 'Hello world'"
        );
        assert(
            testArrayBuffers(
                decode('SGVsbG8gd29ybGRzIQ=='),
                stringArrayBuffer('Hello worlds!')
            ),
            "decode 'Hello worlds!'"
        );
    });
});
