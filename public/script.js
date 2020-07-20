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
		console.log(dup)

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
			ctx.fillStyle = '#ff4d4d';}
			else if (i==color2){
				ctx.fillStyle = '#ff4d4d';
			}
			else {
				ctx.fillStyle = '#ca93ee'
			}
			for (var j =0;j<godfather.length;j++){
				if(i==godfather[j]){
					ctx.fillStyle = '#90ee90';
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
			ctx.fillStyle = 'purple';}
			else if (i==color2){
				ctx.fillStyle = 'purple';
			}
			else {
				ctx.fillStyle = '#ca93ee';
			}
			for (var j =0;j<godfather.length;j++){
				if(i==godfather[j]){
					ctx.fillStyle = '#90ee90';
				}
			}
			ctx.fillRect(xcordinate,canvas.height-h,width,h);
			xcordinate+=width+4;//**will have to change the width***********
		}	
	}
	
//-------------------------------------------------------------------------------------
		function* bubble_sort(arr){
		var swapped;
        var step = 0;
        var pass = 1;
        do{
            swapped = false;
            swapp = false;
            swa=false;
		    for (var i = 0; i < arr.length; i++) {
		    draw(arr,i,i+1);
		    if(arr[i]==dup[i]){

		    		godfather.push(i);
		    		console.log(godfather)
                   	//drawfinal(arr,i);
                   	swa = true;
                   	yield swa;
                   }
                else if (arr[i] > arr[i + 1]) {
                draw(arr,i,i+1);
                var temp = arr[i];
                 arr[i] = arr[i + 1];
              arr[i + 1] = temp;
             swapped = true;
             step++;               
            yield swapped;// pause here
                   }
                   
                   else{
                   	draw2(arr,i,i+1);

                   	swapp = true;
                   	yield swapp;
                   }
                            }
                        pass++
                    } while (swapped);
                    
}
//-------------------------------------------------------------------------------------
var shuff = document.getElementById('shuffle');
shuff.disabled = false;
		shuff.addEventListener('click',function(){		 
			shuffle(arr);
			console.log(arr);
			
			console.log(dup);
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
			var fps  = 0.8;
		}
		else if (thevalue>43 && thevalue<=53){
			var fps  = 10;
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
	var variablemade = bubble_sort(arr);
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
}, 100);}
//--------------------------------------------------------------------------------------------