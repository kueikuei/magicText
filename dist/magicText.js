var magicText=function(){var e="";return{replaceSpace:function(n,r){return e=r.replace(/\s+/g,n)},upperCase:function(n){return e=n.toUpperCase()},render:function(e,n){document.getElementById(e).innerHTML=n},value:function(){return e}}}();