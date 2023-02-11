module.exports = function reverse (n) {
    const regex = /[^0-9]/g
    let result = n.toString().split('').reverse().toString().replaceAll(regex, '')
    return Number(result)
}
