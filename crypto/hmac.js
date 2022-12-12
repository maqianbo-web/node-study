const crypto = require('crypto')

const hmac = crypto.createHmac('md5','maqianbo')

hmac.update('hello world')
console.log(hmac.digest('hex'))