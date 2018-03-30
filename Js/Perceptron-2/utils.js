function map(n, start1, stop1, start2, stop2, withinBounds) {

    var newval = (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
    if (!withinBounds) {
        return newval;
    }
    if (start2 < stop2) {
        return this.constrain(newval, start2, stop2);
    } else {
        return this.constrain(newval, stop2, start2);
    }
};


function f(x){
    // y = mx + b;

    return 0.2 * x + 0.2;
}

function random(min, max) {
    var rand;

    if (false) {
        rand = lcg.rand();
    } else {
        rand = Math.random();
    }
    if (typeof min === 'undefined') {
        return rand;
    } else if (typeof max === 'undefined') {
        if (min instanceof Array) {
            return min[Math.floor(rand * min.length)];
        } else {
            return rand * min;
        }
    } else {
        if (min > max) {
            var tmp = min;
            min = max;
            max = tmp;
        }

        return rand * (max - min) + min;
    }
};