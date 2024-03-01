function divideAndConquerSum(a) {
    var total = 0;
    total = divide(a, 0, a.length - 1);
    return total;
}

function divide(a, lo, hi){
    if (lo == hi){
        return a[lo];
    } else if (lo > hi){
        return 0;
    }
    var total = 0;
    var size = hi - lo + 1;               // Used chat gpt for help with the interval calculation
    var interval = Math.floor(size / 3);  // Used this website: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor to review Math.floor
    var m1 = lo + interval;
    var m2 = lo + interval * 2;
    total += divide(a, lo, m1);
    if (m1 != m2){
        total += divide(a, m1 + 1, m2);
    }
    total += divide(a, m2 + 1, hi);
    return total;
}
