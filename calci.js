let inp=document.getElementById('inp');
let button =document.querySelectorAll('button');
//inp.value='kkk';
// console.log(inp.value);
let res='';
for(item of button){
  item.addEventListener('click',(e)=>{
      key=e.target.innerText;
      if(key== '='){
        inp.value=  eval(res);
        res='';
      }
      else if(key=='C'){
          inp.value='';
          res='';
      }else{
          res +=key;
          inp.value=res;
      }
  })
}