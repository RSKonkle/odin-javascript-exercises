const fibonacci = function(x) {
    x = parseInt(x)

    if (x == 0)
        return 0;
    else if (x < 0)
        return "OOPS";

    else {
        let seq = [1,1]
        for (let i = 2; i <= x; i++)
            seq[i] = seq[i-2] + seq[i-1];
        return seq[x-1]
     };
};

// Do not edit below this line
module.exports = fibonacci;
