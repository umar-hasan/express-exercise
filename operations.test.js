const { mean, median, mode } = require('./helpers')

test('finds the mean', () => {
    expect(mean([1,2,3,4])).toEqual(2.5)
})

test('finds median', () => {
    expect(median([1,2,2,3,4])).toEqual(2)
})

test('finds mode', () => {
    expect(mode([1,2,2,3,4])).toEqual(2)
})