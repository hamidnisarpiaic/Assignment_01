// Exercise 33
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
    var num = nums_1[_i];
    if (num == 1) {
        console.log('1st');
    }
    else if (num == 2) {
        console.log('2nd');
    }
    else if (num == 3) {
        console.log('3rd');
    }
    else {
        console.log("".concat(num, "th"));
    }
}
