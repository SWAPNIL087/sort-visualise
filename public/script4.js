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
			else if (i==color2){
			ctx.fillStyle = 'blue';
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
			ctx.fillStyle = 'orange';}
			else if (i==color2){
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
var store=[]
function heapify(arr,n,i){
	
 		var largest = i;
 		var l = 2*i +1;
 		var r= 2*i + 2;
 		if(l<n && arr[i]<arr[l]){
 			largest = l;
 		}
 		if(r<n && arr[largest] < arr[r]){
 			largest= r;
 		}
 		if(largest!=i){
 			/*draw(arr,i)*/
 			//draw(arr,largest)
 			
 			//console.log(store)
 			var temp = arr[i];

 			arr[i] = arr[largest];
 			arr[largest] = temp;
 			store.push(largest);
 			store.push(i);
 			draw2(arr,largest)
 			//arr[i],arr[largest] = arr[largest],arr[i];
 			
 			 heapify(arr,n,largest);
 		}
 		drawpp(arr,i)
 	}

 function* heapSort(arr){
 	
 	var one,two,three;
 	var above1,above2,above3;
 	
 	n=arr.length;
 	var theone =Math.floor(n/2)-1
 	for (var i=thevalue;i>-1;i--){
 		draw(arr,i);
 		yield two;
 		yield heapify(arr,n,i);
 		draw2(arr,store[store.length-1],store[store.length-2]);
 		yield above3;
 		}
 	for(var i = n-1;i>0;i--){
 		var temp=arr[i];
 		arr[i]=arr[0];
 		arr[0] = temp;
 		draw(arr,i);
 		yield one;
 		yield heapify(arr,i,0);
 		
 		//console.log(store)
 		draw2(arr,store[store.length-1],store[store.length-2]);
 		yield above1;
 		
 	}
 	//console.log(arr);
 	//draw(arr);
 	//yield three;

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
			var fps  = 30;
		}
		else if (thevalue>43 && thevalue<=53){
			var fps  = 40;
		}
		else if (thevalue>33 && thevalue<=43){
			var fps  = 70;
		}
		else if (thevalue>23 && thevalue<=33){
			var fps  = 100;
		}
		else if (thevalue>13 && thevalue<=23){
			var fps  = 400;
		}
		else if (thevalue<=13){
			var fps  = 600;
		}
	/*var variablemade = bubble_sort(arr);*/
	/*heapSort(arr);
	draw(arr)*/
	
	var variablemade = heapSort(arr);
								 //draw2(arr);
							
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
