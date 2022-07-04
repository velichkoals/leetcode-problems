var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var arr = [1, 2, 3, 1, 4];
var concatenationOfArr = function (arr) {
    return __spreadArray(__spreadArray([], arr, true), arr, true);
};
console.log(concatenationOfArr(arr));
