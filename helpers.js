function mean(a) { 
    let sum = 0
    for (n of a) {
        if (!parseInt(n)) {
            throw new Error(n)
        }
        sum = sum + parseInt(n)
    }
    return sum/a.length
}

function median(a) {
    let x = a.sort((a, b) => {
        if (!parseInt(a)) {
            throw new Error(a)
        }
        if (!parseInt(b)) {
            throw new Error(b)
        }
        return a - b
    })
    if (a.length % 2 === 1) {
        return x[(a.length - 1)/2]
    }
    return (parseInt(x[(a.length/2)-1]) + parseInt(x[a.length/2]))/2
}

function mode(a) {
    let m = new Map()
    for (n of a) {
        if (!parseInt(n)) {
            throw new Error(n)
        }
        if (!m.has(n)) {
            m.set(n, 1)
        }
        else {
            count = m.get(n)
            m.set(n, count+1)
        }
    }
    console.log(m)
    return Math.max(...m.values())
}

module.exports = {
    mean,
    median,
    mode
}