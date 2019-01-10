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
        48: [0, ')'], 49: [1, '!'], 50: [2, '@'], 51: [3, '#'], 52: [4, '$'], 53: [5, '%'], 54: [6, '^'], 55: [7, '&'], 56: [8, '*'], 57: [9, '('],

        // 字母
        65: ["a", "A"], 66: ["b", "B"], 67: ["c", "C"], 68: ["d", "D"], 69: ["e", "E"], 70: ["f", "F"], 71: ["g", "G"],
        72: ["h", "H"], 73: ["i", "I"], 74: ["j", "J"], 75: ["k", "K"], 76: ["l", "L"], 77: ["m", "M"], 78: ["n", "N"],
        79: ["o", "O"], 80: ["p", "P"], 81: ["q", "Q"], 82: ["r", "R"], 83: ["s", "S"], 84: ["t", "T"],
        85: ["u", "U"], 86: ["v", "V"], 87: ["w", "W"], 88: ["x", "X"], 89: ["y", "Y"], 90: ["z", "Z"],

        // 方向
        37: "left", 38: "up", 39: "right", 40: "down",
        33: "pre", 34: "next", 35: "bottom", 36: "top",

        // 控制键
        16: "shift", 17: "ctrl", 18: "alt", 91: "ctrl", 93: "ctrl", 9: "tab", 20: "lock", 32: "spacebar", 8: "enter", 27: "esc",

        // 功能键
        112: "f1", 113: "f2", 114: "f3", 115: "f4", 116: "f5", 117: "f6", 118: "f7", 119: "f8", 120: "f9", 121: "f10", 122: "f11", 123: "f12",

        // 余下键
        189: ["-", "_"], 187: ["=", "+"], 219: ["[", "{"], 221: ["]", "}"], 220: ["\\", "|"], 186: [";", ":"], 222: ["'", '"'], 188: [",", "<"], 190: [".", ">"], 191: ["/", "?"], 192: ["`", "~"]

    };

    // 非独立键字典
    var help_key = ["shift", "ctrl", "alt", "lock"];

    return function (event, doback) {
        var keycode = event.keycode || event.which || event.charCode;
        var key = dictionary[keycode]||keycode;
        if (key.constructor !== Array) key = [key, key];
        if (help_key.indexOf(key[0]) > -1) {
            return;
        }
        var shift = event.shiftKey ? "shift + " : "",
            alt = event.altKey ? "alt + " : "",
            ctrl = event.ctrlKey ? "ctrl + " : "";

        if (!alt && !ctrl) {
            if (shift) {
                doback(key[1]);
            }
            else {
                doback(key[0]);
            }
        } else {
            doback(ctrl + shift + alt + key[0], true);
        }
    };

});
