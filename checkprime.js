let a=2;
let count=0;
for(let i=1; i<a; i++){
    if(a%i==0){
	  count++
    }
	}
	if(count==1){
	 console.log("Prime")
	}
  else if(count>1){
	 console.log("Not Prime")
}