```

//select value ary[n] //cn is cursor number
function boxselect(ary,n,cn,len,c,_c){
//c cursor //_c emtpy cursor
 c=cursor||'*',_c=emtpycursor||' '
 n=n||0,cn=cn||0
 //
 let isstring = function(obj){return toString.call(obj) === '[object String]'}
 let a=fn.clone(ary); a=isstring(a)?a.split('\n'):a
 len=len||a.length
 ;
 let now=Math.max(n-cn,0)
 return a.slice(now,now+len).map((d,i)=>(cn===i)?c+d||_c+d)
}

```
