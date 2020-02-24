# boxdrawing
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
let boxdrawing=(text,w,h,lcr,strtr,strbr)=>{
 //return ary
 let bar='━',vtx='┃',tl='┏',tr='┓',bl='┗',br='┛',sp='　'
 ,bars=fn.fstr(bar,w)
 ,f=(lcr==='r')?fn.lpad:(lcr==='c')?fn.cpad:fn.rpad
 ,body=text.split('\n').slice(0,h).map((d,i,o)=>{
  //
  if(i===0&&strtr)return vtx+fn.ostr(f(d,w,sp),strtr)+vtx
  if((i===o.length-1)&&strbr)return vtx+fn.ostr(f(d,w,sp),strbr)+vtx
  return vtx+f(d,w,sp)+vtx
  //
 })
 ;
 return [].concat(tl+bars+tr,body,bl+bars+br)
}

```
```
box32(lines,type)
//type m|f|h|l|s|p|v > mes fitmes hint list party shop viewmap

let mes=box32(3,'m')  //mes(str,char) //char is bottom right
let fitmes=box32(1,'f') //fitmes(str,min) //keep min length
let hint=box32(4,'h') //hint(str) //if over show page　０１／０１
let list=box32(7,'l') //list(title,str|ary,char,n) //if over show page, title keep
let party=box32(7,'p') //party(str|ary,char,n) //n=0 is party
let viewmap=box(32,'v') //viewmap(title,str|ary,nowchar,nx,ny,selchar,sx,sy)
```

```
//fn.js
let fn={}
//
fn.rtrim=s=>s.replace(/\s+$/,"")
fn.fstr=(sp,len)=>Array.from({length:len||0}).map(d=>sp).join('')
fn.rpad=(str,len,sp)=>(str+fn.fstr(sp,len)).slice(0,len||0)
fn.lpad=(str,len,sp)=>(fn.fstr(sp,len)+str).slice(-1*len||0)
fn.cpad=(str,len,sp)=>{
 str=str.slice(0,len)
 if(str.length===len)return str
 let em=fn.fstr(sp,~~((len-str.length)/2)) 
 return (em+str+em+fn.fstr(sp,len)).slice(0,len)
}
fn.gpad=(str,len,head,lcr)=>{
 head=head||'　',str=head+str
 if(lcr==='c') return fn.cpad(str,len,'　')
 if(lcr==='r') return fn.lpad(str,len,'　')
 return fn.rpad(str,len,'　') //lcr==='l'
}
fn.ostr=(base,tail)=>{ //overwite str
 return base.slice(0,-1*tail.length) + tail
}
/*
let name='シキシャ'
,stats='毒！２００｀２０＠２５'
,map='・・・・・・・'
,aa='＊　ああっと　＊'
//10 12 8
//10 20
fn.q('pre').textContent=fn.gpad(name,10,'＊')+fn.gpad(stats,12)+fn.gpad(map,8,'　','r')
fn.q('pre.x').textContent=fn.cpad(aa,30,'　')
*/
fn.s2b
```
