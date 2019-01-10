[keyboard-char](https://github.com/yelloxing/keyboard-char.js) - Turn the mouse button into readable text.
==================================================

[![chat](https://github.com/yelloxing/clay-core/blob/master/data/chat.svg)](https://github.com/yelloxing/keyboard-char.js/issues)

我们的目标是：把鼠标按下键转变成可读的文字。

****
### 作者:心叶
### 邮箱:yelloxing@gmail.com
****

如何引入？
--------------------------------------
如果你开发的是一个web项目，直接在页面引入打包后的文件后即可：

```html
<script src="./build/polyfill.js" type="text/javascript"></script>
```

如果你想通过npm方式管理：

```bash
npm install --save polyfill-es
```

如何使用？
--------------------------------------
```js
// 调用处理方法
keyboard_char(event, function (char) {
    // todo
});
```

### 免责声明

*   项目中部分数据（如图片等）来自互联网，如果侵犯到对应权益者请联系我们，方便我们及时删除！
*   本项目保留贡献者全部权利，发生的任何纠纷，本项目作者和维护人概不负责，如有侵权，请及时和我们取得联系。
