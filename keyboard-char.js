(function (global, factory) {

    'use strict';

    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = factory();
    } else {
        global.keyboard_char = factory();
    }

})(typeof window !== "undefined" ? window : this, function () {

    'use strict';

    // 字典表
    var dictionary = {

        // 数字
        48: 0, 49: 1, 50: 2, 51: 3, 52: 4, 53: 5, 54: 6, 55: 7, 56: 8, 57: 9,

        // 字母
        65: "a", 66: "b", 67: "c", 68: "d", 69: "e", 70: "f", 71: "g",
        72: "h", 73: "i", 74: "j", 75: "k", 76: "l", 77: "M", 78: "n",
        79: "o", 80: "p", 81: "q", 82: "r", 83: "s", 84: "t",
        85: "u", 86: "v", 87: "w", 88: "x", 89: "y", 90: "z",

        // 方向
        37: "left", 38: "up", 39: "right", 40: "down",

        // 控制键
        16: "shift", 17: "ctrl", 18: "alt", 91: "ctrl", 93: "ctrl", 9: "tab", 20: "lock", 32: "spacebar", 8: "enter", 27: "esc",

        // 功能键
        112: "f1", 113: "f2", 114: "f3", 115: "f4", 116: "f5", 117: "f6", 118: "f7", 119: "f8", 120: "f9", 121: "f10", 122: "f11", 123: "f12",

        // 余下键
        189: "-", 187: "=", 219: "[", 221: "]", 220: "\\", 186: ";", 222: "'", 188: ",", 190: ".", 191: "/", 192: "`"

    };

    return function (keycode, doback) {
        doback(dictionary[keycode]);
    };

});
