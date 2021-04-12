function clearResult(){
    var cntl = document.getElementsByClassName('result')[0];
   console.log(document.getElementsByClassName('result').innerText)
    cntl.innerText = "";
}

function DelResult(){
    var cntl = document.getElementsByClassName('resultHistory')[0];
   
   cntl.innerText =  cntl.innerText.substring(0,cntl.innerText.length - 1);
}

$(document).on('click','.td',function(e){
    console.log(this.id);
     var cntl = document.getElementsByClassName('resultHistory')[0];
    if( this.id !== 'C' && this.id !== 'CE' && this.id !== '='){
     cntl.innerText += this.id;
       }
    if(this.id === '='){
           var res = document.getElementsByClassName('resultHistory')[0].innerText;
       document.getElementsByClassName('result')[0].innerText = eval(res);
    }
    if(this.id === 'C'){
         clearResult();
    }
    if(this.id === 'CE'){
         DelResult();
    }
})