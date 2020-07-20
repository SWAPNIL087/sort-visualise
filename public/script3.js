$(document).ready(function(){
	
	
	
	function hidemsg(){
		$('#message').hide();
	}
	var close = document.getElementById('close');
	close.addEventListener('click',function(){
		hidemsg();
	})
	
	
})

var thevalue = 0
		var godfather = []
		var pareshani = document.getElementById('pareshani');
		pareshani.disabled = false;
function updateTextInput(val){
			pareshani.disabled = true;
			pareshani.style.background = "red";
			setTimeout(function() {
				thevalue = val;
			//document.getElementById('textInput').value=val;	
			var reset = document.getElementById('reset');
	reset.addEventListener('click',function(){
		location.reload();
	}) 		
		let arr = [];
		let dup = [];
		n= 10;
		for (var i=0;i<thevalue;i++){
			arr.push(n);
			dup.push(n);

			if(thevalue>=3 && thevalue<13){
			n+=30;}
			else if(thevalue>=13 && thevalue<23){
				n+=20;
			}
			else if(thevalue>=23 && thevalue<33){
				n+=16;
			}
			else if(thevalue>=33 && thevalue<43){
				n+=12;
			}
			else if(thevalue>=43 && thevalue<53){
				n+=9;
			}
			else if(thevalue>=53 && thevalue<=63){
				n+=7.6;
			}
		}
		//console.log(dup)

//--------------------------------------------------------------------------------------
		draw(arr)
		function draw(arr,color,color2){
		var ctx = canvas.getContext('2d');
		//var sol = 63;
		if(thevalue>53){
		width=10;
		var check = 63
		xcordinate = 10+Math.abs((thevalue-check)*7);
	}

		else if(thevalue<=53 && thevalue>43){
		width=12.5;
		var check = 53;
		xcordinate = 10;
		xcordinate = 10+Math.abs((thevalue-check)*7);
	}
	else if(thevalue<=43 && thevalue>33){
		width=16.5;
		var check = 43;
		xcordinate = 10;
		xcordinate = 10+Math.abs((thevalue-check)*8);
	}
	else if(thevalue<=33 && thevalue>23){
		width=23;
		var check = 33;
		xcordinate = 10;
		xcordinate = 10+Math.abs((thevalue-check)*12);
	}
	else if(thevalue<=23 && thevalue>13){
		width=34;
		var check = 23;
		xcordinate = 10;
		xcordinate = 10+Math.abs((thevalue-check)*17);
	}
	else if(thevalue<=13 && thevalue>2){
		width=62;
		var check = 13;
		xcordinate = 10;
		xcordinate = 10+Math.abs((thevalue-check)*32);
	}
		ctx.clearRect(0,0,canvas.width,canvas.height);
		finalar=[]

		for(var i=0;i<arr.length;i++){
			var h= arr[i];
			if(i==color){
			ctx.fillStyle = 'red';}
			else if(i==color2){
				ctx.fillStyle = 'red';
			}
			else {
				ctx.fillStyle = '#ca93ee'//light purple (replaced from black)
			}
			for (var j =0;j<godfather.length;j++){
				if(i==godfather[j]){
					ctx.fillStyle = '#90ee90';//green
				}
			}
			ctx.fillRect(xcordinate,canvas.height-h,width,h);
			xcordinate+=width+4;//***********chnage***************
		}	
	}
	function draw2(arr,color,color2){
		var ctx = canvas.getContext('2d');
		if(thevalue>53){
		width=10;
		var check = 63
		xcordinate = 10+Math.abs((thevalue-check)*7);
	}
		else if(thevalue<=53 && thevalue>43){
		width=12.5;
		var check = 53;
		xcordinate = 10;
		xcordinate = 10+Math.abs((thevalue-check)*7);
	}
	else if(thevalue<=43 && thevalue>33){
		width=16.5;
		var check = 43;
		xcordinate = 10;
		xcordinate = 10+Math.abs((thevalue-check)*8);
	}
	else if(thevalue<=33 && thevalue>23){
		width=23;
		var check = 33;
		xcordinate = 10;
		xcordinate = 10+Math.abs((thevalue-check)*12);
	}
	else if(thevalue<=23 && thevalue>13){
		width=34;
		var check = 23;
		xcordinate = 10;
		xcordinate = 10+Math.abs((thevalue-check)*17);
	}
	else if(thevalue<=13 && thevalue>=2){
		width=62;
		var check = 13;
		xcordinate = 10;
		xcordinate = 10+Math.abs((thevalue-check)*32);
	}
		ctx.clearRect(0,0,canvas.width,canvas.height);
		for(var i=0;i<arr.length;i++){
			var h= arr[i];

			if(i==color){
			ctx.fillStyle = '#90ee90';}
			else if (i==color2){
				ctx.fillStyle = 'red';//it was purple
			}
			else {
				ctx.fillStyle = '#ca93ee';//light purple(replaced from black)
			}
			for (var j =0;j<godfather.length;j++){
				if(i==godfather[j]){
					ctx.fillStyle = '#90ee90';//green
				}
			}
			ctx.fillRect(xcordinate,canvas.height-h,width,h);
			xcordinate+=width+4;//**will have to change the width***********
		}	
	}
	

function drawpp(arr,pi,pv){
	var ctx = canvas.getContext('2d');
		if(thevalue>53){
		width=10;
		var check = 63
		xcordinate = 10+Math.abs((thevalue-check)*7);
	}
		else if(thevalue<=53 && thevalue>43){
		width=12.5;
		var check = 53;
		xcordinate = 10;
		xcordinate = 10+Math.abs((thevalue-check)*7);
	}
	else if(thevalue<=43 && thevalue>33){
		width=16.5;
		var check = 43;
		xcordinate = 10;
		xcordinate = 10+Math.abs((thevalue-check)*8);
	}
	else if(thevalue<=33 && thevalue>23){
		width=23;
		var check = 33;
		xcordinate = 10;
		xcordinate = 10+Math.abs((thevalue-check)*12);
	}
	else if(thevalue<=23 && thevalue>13){
		width=34;
		var check = 23;
		xcordinate = 10;
		xcordinate = 10+Math.abs((thevalue-check)*17);
	}
	else if(thevalue<=13 && thevalue>=2){
		width=62;
		var check = 13;
		xcordinate = 10;
		xcordinate = 10+Math.abs((thevalue-check)*32);
	}
		ctx.clearRect(0,0,canvas.width,canvas.height);
		for(var i=0;i<arr.length;i++){
			var h= arr[i];

			if(i==pi){
			ctx.fillStyle = 'yellow';}
			else if (i==pv){
				ctx.fillStyle = 'orange';//it was purple
			}
			else {
				ctx.fillStyle = '#ca93ee';//light purple(replaced from black)
			}
			for (var j =0;j<godfather.length;j++){
				if(i==godfather[j]){
					ctx.fillStyle = '#90ee90';//green
				}
			}
			ctx.fillRect(xcordinate,canvas.height-h,width,h);
			xcordinate+=width+4;//**will have to change the width***********
		}	

}

function* merge(arr,l,m,r){
	n1=m-l+1;
	n2=r-m;
	L = [];
	for (var i1=0;i1<n1;i1++){
		L.push(0);
	}
	R=[];
	for(var i2=0;i2<n2;i2++){
		R.push(0);
	}
	for (var i =0;i<n1;i++){
		L[i]=arr[l+i];
	}
	for (var j=0;j<n2;j++){
		R[j] = arr[m+1+j];
	}
	i=0;
	j=0;
	k=l;
	var f1;
	var f2;
	while(i<n1 && j < n2){
		if(L[i] <= R[j]){
			arr[k] = L[i];
			if(arr[k]==dup[k]){
				godfather.push(k)
			}
			drawpp(arr,k)
			yield f1
			i+=1;
		}
		else{
			arr[k] = R[j];
			if(arr[k]==dup[k]){
				godfather.push(k)
			}
			drawpp(arr,k);
			yield f2;
			j+=1;
		}
		k+=1;
	}
	while (i<n1){
		arr[k] = L[i];
		if(arr[k]==dup[k]){
				godfather.push(k)
			}
		i+=1;
		k+=1
	}
	while(j<n2){
		arr[k] = R[j];
		if(arr[k]==dup[k]){
				godfather.push(k)
			}
		j+=1;
		k+=1;
	}
}
 function* mergeSort(arr,left,right){
  if(left>=right){
  	return;
  }
  size=right-left;
  var three;
  for(var i=0;i<size;i++){
  	draw2(arr,i);
  	yield three;
  }
  var one;
  var two;
  var four;
  var middle = Math.floor(((right-1)+left)/2);
  yield* mergeSort(arr,left,middle);
  draw(arr,left,middle);
  yield four;
  yield* mergeSort(arr,middle+1,right);
  draw(arr,middle+1,right);
  yield one;
  yield* merge(arr,left,middle,right);
  drawpp(arr);
  yield two;
}	
//-------------------------------------------------------------------------------------
var shuff = document.getElementById('shuffle');
shuff.disabled = false;
		shuff.addEventListener('click',function(){		 
			shuffle(arr);
			draw(arr)
		})
		function shuffle(array){
			 var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
		}
//-------------------------------------------------------------------------------------------
var count = 0;
var sort = document.getElementById('sort');
sort.disabled = false;
sort.addEventListener('click',function(){
	sort.disabled = true;
	sort.style.color = "red";
			shuff.disabled = true;
			shuff.style.color = "red";
		var fps = 0;
		if (thevalue>53 && thevalue<=63){
			var fps  = 20;
		}
		else if (thevalue>43 && thevalue<=53){
			var fps  = 20;
		}
		else if (thevalue>33 && thevalue<=43){
			var fps  = 40;
		}
		else if (thevalue>23 && thevalue<=33){
			var fps  = 100;
		}
		else if (thevalue>13 && thevalue<=23){
			var fps  = 300;
		}
		else if (thevalue<=13){
			var fps  = 600;
		}
	/*var variablemade = bubble_sort(arr);*/
	/*quickSort(arr,0,arr.length);
	draw(arr)*/
	var variablemade = mergeSort(arr,0,arr.length-1);
								 draw2(arr);
							
	function anim(arr){

		setTimeout(function() {
			requestAnimationFrame(anim);
						
    	variablemade.next();

    }, 
    fps);

    }

  	anim(arr);
  	
	window.onload = function(){
				canvas = document.getElementById('myCanvas');
				draw(arr, 0,0);
			}
})
},100);}
//--------------------------------------------------------------------------------------------
