var feet=document.getElementById('feet');
var inch=document.getElementById('inch');
feet.addEventListener('input',function(){
	let f=this.value;
	if(f<0){
		window.alert("enter valid input");
		
	}
	else{
       let i=f*12;
	   inch.value=i;
	}
	
});
inch.addEventListener('input',function(){
	let i=this.value;
	if(i<0){
		alert("enter valid input");
	}
	else{
         let f=i/12;
	if(!Number.isInteger(f)){
		f=f.toFixed(2);
	}
	feet.value=f;
	}
	
});
