export type Integer = number;
/**
 * @param {string} base64
 * @returns {ArrayBuffer}
 */
export function decode(base64: string): ArrayBuffer;
/**
 * @param {ArrayBuffer} arraybuffer
 * @param {Integer} [byteOffset]
 * @param {Integer} [lngth]
 * @returns {string}
 */
export function encode(arraybuffer: ArrayBuffer, byteOffset?: number | undefined, lngth?: number | undefined): string;
//# sourceMappingURL=base64-arraybuffer-es.d.ts.map