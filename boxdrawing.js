//
;(function(root){
//fn.js
let fn=root.fn||{}
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
 root.fn=fn
 root.boxdrawing=boxdrawing
})(this);
