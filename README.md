# boxdrawing
fonttest https://codepen.io/gnjo/pen/PoqWwzR

# v2.0 必要な場合は上位でfn.s2bする事。
# フォントはdqfc2xxxxxx.txtを変更
```
 ─　│　┌　┐　┘　└　├　┬　┤　┴　┼
 ━　┃　┏　┓　┛　┗　┣　┳　┫　┻　╋
 ┠　┯　┨　┷　┿　┝　┰　┥　┸　╂
```
```
@font-face {
 font-family: boxdrawing;
 src: url("https://gnjo.github.io/boxdrawing/notoj.ttf") format("truetype");
 font-weight: normal;
 font-style: monospace;
 /*need line-height:1.0*/
}
@font-face {
 font-family: boxdrawing;
 src: url("https://gnjo.github.io/boxdrawing/dqfc2.ttf?v=2") format("truetype");
 font-weight: normal;
 font-style: monospace;
 /*unicode-range: U+2019-FFE5;over write latin*/
}
```
```
let boxdrawing(text,w,h,lcr,strtr,strbr)

```
