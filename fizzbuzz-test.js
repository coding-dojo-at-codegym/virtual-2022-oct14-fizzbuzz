QUnit.module('fizzbuzz', function () {
    QUnit.test('normal number', function (assert) {
        const number = 1
        const expected = "1"
        const actual = fizzbuzz(number)
        assert.equal(expected, actual)
    })
})

QUnit.module('fizzbuzz', function () {
    QUnit.test('text input 3 return fizz', function (assert) {
        const number = 3
        const expected = "fizz"
        const actual = fizzbuzz(number)
        assert.equal(expected, actual)
    })
})
