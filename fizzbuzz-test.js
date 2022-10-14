QUnit.module('fizzbuzz', function () {
  QUnit.test('normal number', function (assert) {
    const number = 1
    const expected = "1"
    const actual = fizzbuzz(number)
    assert.equal(expected, actual)
  })
})