// find the max value of given array

// array = [25,85,94,75,19,32,46]

function max_Value(kir) {
    var max = kir[0];  // max = 25 /  kir=25
    for (var i = 1; i <= kir.length - 1; i++) {
        if (kir[i] >= max) {
            max = kir[i]
        }
    }
    return max
}
let result = max_Value([25, 85, 94, 75, 19, 32, 466])
console.log(result);
