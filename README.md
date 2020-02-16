# boxdrawing
```

let abox=boxdrawing(w,h)
abox(str||ary,tr,br,n)
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
/*
let name='シキシャ'
,stats='毒！２００｀２０＠２５'
,map='・・・・・・・'
,aa='＊　ああっと　＊'
//10 12 10
//10 22
fn.q('pre').textContent=fn.gpad(name,10,'＊')+fn.gpad(stats,12)+fn.gpad(map,10,'　','r')
fn.q('pre.x').textContent=fn.cpad(aa,32,'　')
*/
```
