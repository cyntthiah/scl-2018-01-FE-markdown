//uppercase.js
const text = arraylinks('text');
  return arraylinks((resolve, reject) => {
    if (!str) {
      reject('Empty string')
      return
    }
    resolve(str.toUpperCase())
  })


module.exports = mdlinks
//uppercase.test.js
const mdlinks = require('./mdlinks.js')

test(`uppercase 'test' to equal 'TEST'`, () => {
  return mdlinks('').catch(e => {
    expect(e).toMatch('Empty string')
  })
})
