# boxdrawing
```


```
```
//fn.js
let fn={}
//
fn.rtrim=s=>s.replace(/\s+$/,"")
fn.fillstr=(sp,len)=>Array.from({length:len||0}).map(d=>sp).join('')
fn.rpad=(str,len,sp)=>(str+fn.fillstr(sp,len)).slice(len||0)
fn.lpad=(str,len,sp)=>(fn.fillstr(sp,len)+str).slice(-1*len||0)

```
