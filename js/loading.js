var stop = false;

var count = 0;

var MaximunScreenHeight = 780;

var isPC = false;

var incrementedHeight = "0px";

var incrementedWidth = "0px";

function l(v,v2,SetUP){

	

	if(isPC){

		incrementedHeight = -"100px";

		incrementedWidth = "-1%";

	}

	

if(SetUP.style.visibility!="hidden"){

	SetUP.style.visibility="hidden";

}

setTimeout(function(){

	

count=count+20;

		

Translate(v,v2,SetUP,count);

},12.5);

}

function l2(v,v2,SetUP){

	

setTimeout(function(){

	

count=count-20;

		

TranslateReverse(v,v2,SetUP,count);

},12.5);

}

function Loading(v,v2,SetUP){

	

	if(stop==false){

		

		v2.style.visibility="visible";

		

	    setTimeout(function(){

		

		var vv = window.getComputedStyle(v);

		

		var vvv = vv.getPropertyValue('background-color');

		

		var vv2 = window.getComputedStyle(v2);

		

		var vvv2 = vv2.getPropertyValue('width');

		

		var vvv2 = vv2.getPropertyValue('height');

		

		var vvvv = vv2.getPropertyValue('margin-left');

		

		

		//alert(vvv);

		

		if(vvv=="rgba(255, 255, 255, 0.2)"){

			v.style.backgroundColor = "#FFFFFFFF";

			if(isPC!=true){

			v2.style.width="144px";

			v2.style.height="144px";

			

			v2.style.marginLeft="0.0%";

			

			v2.style.marginTop="0px";

			}

		}

		

		if(vvv=="rgba(255, 255, 255, 0.267)"){

			v.style.backgroundColor = "#FFFFFF33";

			if(isPC!=true){

			v2.style.width="122px";

			v2.style.height="122px";

			

			v2.style.marginLeft="1.2%";

			

			v2.style.marginTop="12px";

			}

			v2.style.borderColor = "#FFFFFFEE";

			

		}

		

		if(vvv=="rgba(255, 255, 255, 0.333)"){

			v.style.backgroundColor = "#FFFFFF44";

			if(isPC!=true){

			v2.style.width="110px";

			v2.style.height="110px";

			

			v2.style.marginLeft="1.7%";

			

			v2.style.marginTop="20px";

			}

			v2.style.borderColor = "#FFFFFFDD";

			

		}

		

		if(vvv=="rgba(255, 255, 255, 0.4)"){

			v.style.backgroundColor = "#FFFFFF55";

			if(isPC!=true){

			v2.style.width="100px";

			v2.style.height="100px";

			

			v2.style.marginLeft="2.2%";

			

			v2.style.marginTop="25px";

			}

			v2.style.borderColor = "#FFFFFFCC";

			

		}

		

		if(vvv=="rgba(255, 255, 255, 0.467)"){

			v.style.backgroundColor = "#FFFFFF66";

			if(isPC!=true){

			v2.style.width="90px";

			v2.style.height="90px";

			

			v2.style.marginLeft="2.6%";

			

			v2.style.marginTop="30px";

			}

			v2.style.borderColor = "#FFFFFFBB";

			

		}

		if(vvv=="rgba(255, 255, 255, 0.533)"){

			v.style.backgroundColor = "#FFFFFF77";

			if(isPC!=true){

			v2.style.width="80px";

			v2.style.height="80px";

			

			v2.style.marginLeft="3.2%";

			

			v2.style.marginTop="35px";

			}

			v2.style.borderColor = "#FFFFFFAA";

			

		}

		if(vvv=="rgba(255, 255, 255, 0.6)"){

			v.style.backgroundColor = "#FFFFFF88";

			

			v2.style.width="70px";

			v2.style.height="70px";

			

			if(isPC!=true){

			v2.style.marginLeft="3.7%";

			v2.style.marginTop="40px";

			}else{

			v2.style.marginLeft="0.0%";

			v2.style.marginTop="0px";

			}

			

			v2.style.borderColor = "#FFFFFF99";

		}

		if(vvv=="rgba(255, 255, 255, 0.667)"){

			v.style.backgroundColor = "#FFFFFF99";

			

			v2.style.width="60px";

			v2.style.height="60px";

			

			if(isPC!=true){

			v2.style.marginLeft="4.2%";

			v2.style.marginTop="45px";

			}else{

			v2.style.marginLeft="0.5%";

			v2.style.marginTop="5px";

			}

			

			v2.style.borderColor = "#FFFFFF88";

		}

		if(vvv=="rgba(255, 255, 255, 0.733)"){

			v.style.backgroundColor = "#FFFFFFAA";

			

			v2.style.width="50px";

			v2.style.height="50px";

			

			if(isPC!=true){

			v2.style.marginLeft="4.7%";

			v2.style.marginTop="50px";

			}else{

			v2.style.marginLeft="1.0%";

			v2.style.marginTop="10px";

			}

			

			v2.style.borderColor = "#FFFFFF77";

		}

		if(vvv=="rgba(255, 255, 255, 0.8)"){

			v.style.backgroundColor = "#FFFFFFBB";

			

			v2.style.width="40px";

			v2.style.height="40px";

			

			if(isPC!=true){

			v2.style.marginLeft="5.2%";

			v2.style.marginTop="55px";

			}else{

			v2.style.marginLeft="1.5%";

			v2.style.marginTop="16px";

			}

			

			v2.style.borderColor = "#FFFFFF66";

		}

		if(vvv=="rgba(255, 255, 255, 0.867)"){

			v.style.backgroundColor = "#FFFFFFCC";

			

			v2.style.width="30px";

			v2.style.height="30px";

			

			if(isPC!=true){

			v2.style.marginLeft="5.7%";

			v2.style.marginTop="60px";

			}else{

			v2.style.marginLeft="2.0%";

			v2.style.marginTop="22px";

			}

			

			

			

			v2.style.borderColor = "#FFFFFF55";

		}

		if(vvv=="rgba(255, 255, 255, 0.933)"){

			v.style.backgroundColor = "#FFFFFFDD";

			

			v2.style.width="20px";

			v2.style.height="20px";

			

			if(isPC!=true){

			v2.style.marginLeft="6.2%";

			v2.style.marginTop="65px";

			}else{

			v2.style.marginLeft="2.5%";

			v2.style.marginTop="28px";

			}

			

			

			

			v2.style.borderColor = "#FFFFFF44";

			

		}

		if(vvv=="rgb(255, 255, 255)"){

			v.style.backgroundColor = "#FFFFFFEE";

			

			v2.style.width="10px";

			v2.style.height="10px";

			

			if(isPC!=true){

			v2.style.marginLeft="6.8%";

			v2.style.marginTop="70px";

			}else{

			v2.style.marginLeft="3.1%";

			v2.style.marginTop="30px";

			}

			

			

			

			v2.style.borderColor = "#FFFFFF33";

		}

		

		if(vvv=="rgba(0, 0, 0, 0)"){

			v.style.backgroundColor = "#FFFFFFFF";

			

			v2.style.width="0px";

			v2.style.height="0px";

			

			if(isPC!=true){

			v2.style.marginLeft="6.8%";

			v2.style.marginTop="60px";

			}else{

			v2.style.marginLeft="3.1%";

			v2.style.marginTop="30px";

			}

			

			

			

			v2.style.borderColor = "#FFFFFF22";

		}

		

		

		Loading(v,v2,SetUP);

		

		

		

		

		

	},50);

	

	}else{

		

		v.style.backgroundColor="#00000000";

		

		v2.style.borderColor="#00000000";

		

		//v2.style.visibility="hidden";

		

		l2(v,v2,SetUP);

		

	}

}

function Translate(v,v2,SetUP,v3){

	

	var style = window.getComputedStyle(v);

	var marginTop = style.getPropertyValue('margin-top'); 

	var va = v3+"px";

	

	v.style.transform = "translateY("+va+")";

	v2.style.transform = "translateY("+va+")";

	if(v3!=MaximunScreenHeight){

		

	l(v,v2,SetUP);

	

	}else{

	

	Loading(v,v2,SetUP);

	

	}

	

}

function TranslateReverse(v,v2,SetUP,v3){

	

	var va = v3+"px";

	

	v.style.transform = "translateY("+va+")";

	

	v2.style.transform = "translateY("+va+")";

	

	if(v3!=0){

		

	l2(v,v2,SetUP);

		

	}else{

		

	stop=false;

		

	if(SetUP.style.visibility!="visible"){

	SetUP.style.visibility="visible";

}

	}

	

}
