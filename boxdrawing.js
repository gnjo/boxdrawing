/*history
v2.0 必要な場合は上位でfn.s2bする事。
*/
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
 tail=tail+'';//bugfix
 if(tail.length===0)return base;//bugfix
 return base.slice(0,-1*tail.length) + tail
}

fn.blinkflg=(c,range)=>{
 return range?(c%range*2 <range):false
}
fn.headmark=(s,n,mark,emp)=>{
 return s.split('\n').map((d,i)=>(i===n)?mark+d:emp+d).join('\n')
}
fn.maxlen=(ary)=>{
 return ary.map(d=>d.length).sort((a,b)=>a-b).pop()
}

const s2bmap=(()=>{
 var aftnum = new Array("０","１","２","３","４","５","６","７","８","９");
 var aftalph = new Array("Ａ","Ｂ","Ｃ","Ｄ","Ｅ","Ｆ","Ｇ","Ｈ","Ｉ","Ｊ",
                         "Ｋ","Ｌ","Ｍ","Ｎ","Ｏ","Ｐ","Ｑ","Ｒ","Ｓ","Ｔ",
                         "Ｕ","Ｖ","Ｗ","Ｘ","Ｙ","Ｚ",
                         "ａ","ｂ","ｃ","ｄ","ｅ","ｆ","ｇ","ｈ","ｉ","ｊ",
                         "ｋ","ｌ","ｍ","ｎ","ｏ","ｐ","ｑ","ｒ","ｓ","ｔ",
                         "ｕ","ｖ","ｗ","ｘ","ｙ","ｚ");
 var aftkigo = new Array('　','！','”','＃','＄','％','＆','’','（','）','＝','～','＾','｜',
                         '‘','＠','｛','［','「','＋','；','＊','：','｝','］','」','＜','，','、','＞','．','。','？','・','／','＿');
 var befnum = new Array("0","1","2","3","4","5","6","7","8","9");
 var befalph = new Array("A","B","C","D","E","F","G","H","I","J",
                         "K","L","M","N","O","P","Q","R","S","T",
                         "U","V","W","X","Y","Z",
                         "a","b","c","d","e","f","g","h","i","j",
                         "k","l","m","n","o","p","q","r","s","t",
                         "u","v","w","x","y","z");
 var befkigo = new Array(' ','!','\"','#','\\$','%','&','\'','\\(','\\)','=','~','\\^','\\|',
                         '`','@','\\{','\\[','｢','\\+',';','\\*',':','\\}','\\]','｣','<',',','､','>','\\.','｡','\\?','･','\\/','_');
 var aft = aftnum.concat(aftalph , aftkigo); 
 var bef = befnum.concat(befalph , befkigo);
 return {bef:bef,aft:aft}
 // s=s.replace(/\\/g,"￥"); is special
})();
fn.s2b=(s)=>{
 if(s===void 0)return '';
 var str=''+s,reg,i=0
 for(i=0; i<s2bmap.aft.length; i++){
  reg = new RegExp(s2bmap.bef[i],"g");
  str=str.replace(reg, s2bmap.aft[i]);
 }
 str=str.replace(/\\/g,"￥");//special
 return str;
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

let boxdrawing=(text,w,h,lcr,strtr,strbr,type2flg)=>{
 //return ary
 let bar='━',vtx='┃',tl='┏',tr='┓',bl='┗',br='┛',sp='　'
 if(type2flg) bar = '─',vtx = '│',tl = '┌',tr = '┐',bl = '└',br = '┘'
 ;
 //text=fn.s2b(text),strtr=fn.s2b(strtr),strbr=fn.s2b(strbr)//small to big
 ;
 let spbar=fn.fstr(sp,w)
 let t=text+'\n'+Array.from({length:h}).map(d=>spbar).join('\n')
 let bars=fn.fstr(bar,w)
 ,f=(lcr==='r')?fn.lpad:(lcr==='c')?fn.cpad:fn.rpad
 ,body=t.split('\n').slice(0,h).map((d,i,o)=>{
  //
  if(i===0&&strtr)return vtx+fn.ostr(f(d,w,sp),strtr)+vtx
  if((i===o.length-1)&&strbr)return vtx+fn.ostr(f(d,w,sp),strbr)+vtx
  return vtx+f(d,w,sp)+vtx
  //
 })
 ;
 return [].concat(tl+bars+tr,body,bl+bars+br)
}
let boxdrawing2=(text,w,h,lcr,strtl,strtr,strbl,strbr,type2flg)=>{
 //return ary
 let bar='━',vtx='┃',tl='┏',tr='┓',bl='┗',br='┛',sp='　'
 if(type2flg) bar = '─',vtx = '│',tl = '┌',tr = '┐',bl = '└',br = '┘'
 ;
 //text=fn.s2b(text),strtr=fn.s2b(strtr),strbr=fn.s2b(strbr)//small to big
 //strtl=fn.s2b(strtl),strbl=fn.s2b(strbl)
 ;
 let spbar=fn.fstr(sp,w)
 let t=text+'\n'+Array.from({length:h}).map(d=>spbar).join('\n')
 let bars=fn.fstr(bar,w)
 ,f=(lcr==='r')?fn.lpad:(lcr==='c')?fn.cpad:fn.rpad
 ,body=t.split('\n').slice(0,h).map((d,i,o)=>{
  return vtx+f(d,w,sp)+vtx
 })
 f=fn.rpad
 //console.log(strtl,strbl,f(strtl,w,bar))
 let head=tl+fn.ostr(f(strtl,w,bar),strtr)+tr//+
 let bottom=bl+fn.ostr(f(strbl,w,bar),strbr)+br
 return [].concat(head,body,bottom)
}

let boxdrawing3=(title,w,h,margin,type2flg)=>{
 //return ary
 let bar='━',vtx='┃',tl='┏',tr='┓',bl='┗',br='┛',sp='　'
 if(type2flg) bar = '─',vtx = '│',tl = '┌',tr = '┐',bl = '└',br = '┘'
 ;
 //title=fn.s2b(title)
 ;
 let m=''
 if(margin) w=w-margin*2,m=fn.fstr(sp,margin)
 let spbar=fn.fstr(sp,w)
 let body=Array.from({length:h}).map(d=>m+vtx+spbar+vtx+m)
 let bars=fn.fstr(bar,w)
 let head=m+tl+fn.cpad(title,w,bar)+tr+m//+
 let bottom=m+bl+bars+br+m
 return [].concat(head,body,bottom)
}

 ///
 root.fn=fn
 root.boxdrawing=boxdrawing
 root.boxdrawing2=boxdrawing2
 root.boxdrawing3=boxdrawing3
 root.talkbox=boxdrawing
 root.shopbox=boxdrawing2
 root.framebox=boxdrawing3
 ///
})(this);
