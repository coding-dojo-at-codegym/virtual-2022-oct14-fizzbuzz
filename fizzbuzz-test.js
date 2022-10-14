QUnit.module('fizzbuzz', function () {
    QUnit.test('normal number', function (assert) {
        const number = 1
        const expected = "1"
        const actual = fizzbuzz(number)
        assert.equal(expected, actual)
    })
})

QUnit.module('fizzbuzz', function () {
    QUnit.test('test param plain 3 return fizz', function (assert) {
        const number = 3
        const expected = "fizz"
        const actual = fizzbuzz(number)
        assert.equal(expected, actual)
    })
})

QUnit.module('fizzbuzz', function () {
    QUnit.test('test param plain 5 return buzz', function (assert) {
        const number = 5
        const expected = "buzz"
        const actual = fizzbuzz(number)
        assert.equal(expected, actual)
    })
})

QUnit.module('fizzbuzz', function () {
    QUnit.test('test param plain 6 return fizz', function (assert) {
        const number = 6
        const expected = "fizz"
        const actual = fizzbuzz(number)
        assert.equal(expected, actual)
    })
})

QUnit.module('fizzbuzz', function () {
    QUnit.test('test param plain 10 return buzz', function (assert) {
        const number = 10
        const expected = "buzz"
        const actual = fizzbuzz(number)
        assert.equal(expected, actual)
    })
})

QUnit.module('fizzbuzz', function () {
    QUnit.test('test param plain 15 return fizzbuzz', function (assert) {
        const number = 15
        const expected = "fizzbuzz"
        const actual = fizzbuzz(number)
        assert.equal(expected, actual)
    })
})
