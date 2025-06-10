import envs from "helpers/envs"
import pako from "pako"
import CryptoJS from "crypto-js"

export default {
  Compress(str) {
    try {
      const compressedBuffer = pako.gzip(str, { to: "string" } as any)
      const compressedString = Buffer.from(compressedBuffer).toString("base64")
      return compressedString
    } catch {
      return null
    }
  },
  Decompress(str) {
    try {
      const compressedBuffer = Buffer.from(str, "base64")
      const decompressedBuffer = pako.inflate(compressedBuffer as any, {
        to: "string",
      })
      const decompressedString = decompressedBuffer.toString()
      return decompressedString
    } catch {
      return null
    }
  },
  CompressObj(obj) {
    const compressed = this.Compress(JSON.stringify(obj))
    return compressed
  },
  DecompressObj(obj) {
    const compressed = JSON.parse(this.Decompress(obj))
    return compressed
  },
  encrypt(data) {
    return this.Compress(
      CryptoJS.AES.encrypt(JSON.stringify(data), envs.key).toString(),
    )
  },
  decrypt<T>(data: T) {
    return JSON.parse(
      CryptoJS.AES.decrypt(this.Decompress(data), envs.key)?.toString(
        CryptoJS.enc.Utf8,
      ),
    ) as T
  },
}
