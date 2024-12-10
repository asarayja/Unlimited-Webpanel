import { createHash, randomFill } from 'node:crypto'

export const genid = () => {
  return new Promise(function (resolve, reject) {
    // random part size
    const size = 32

    // output hashing
    const hash = createHash('sha384')

    // new output buffer
    const buffer = Buffer.alloc(size + 8)

    // get n random bytes
    randomFill(buffer, 8, size, err => {
      // error occurend ?
      if (err) {
        return reject(err)
      }

      // add current timestamp (6 bytes)
      buffer.writeUIntBE(Date.now(), 0, 6)

      // hash
      hash.on('readable', () => {
        const data = hash.read()
        if (data) {
          resolve(data.toString('base64'))
        } else {
          reject(new Error())
        }
      })

      hash.write(buffer)
      hash.end()
    })
  })
}
