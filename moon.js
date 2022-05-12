	let back= document.getElementByID("back");
	let moon= document.getElementByID("moon");
	let mountain= document.getElementByID("mountain");
	let road= document.getElementByID("road");
	let text= document.getElementByID("text");
	
	window.addEventListener('scroll',function(){
		var value = window.scrollY;
		
		back.style.top = value*0.5 +'px';
		moon.style.left = -value * 0.5+'px';
		mountain.style.top = value * 0.15 + 'px';
		road.style.top = value * 0.15 + 'px';
		road.styel.top = value * 0.15 + 'px';
		
	})