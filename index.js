<!DOCTYPE html>
<html>
  <head>
	<script type="text/javascript" src="/js/loading.js"></script>
	
	<meta property="og:type" content="profile"> 
	
	<meta property="og:image" content="https://raw.githubusercontent.com/WB-Painel/WB-Painel.github.io/main/images/logo.png">
	
	<meta  property="og:title" content="WB-Painel">
	
	<meta  property="og:description" content="WB-Painel, global painel of ban WhatsApp Accounts.">
	
	  
	<meta name="theme-color" content="#ff000000"/>
	  
	<link href="css/styles.css" rel="stylesheet">
  </head>
  <body id="MyBody" bgcolor="#000000">
	
	<center>
	  
	    <div class="SplashScreenBackground">
	  
		<img class="SplashScreenLogo" src="/images/logo.png"/>
	  
		</div>
		
	</center>
	
	<div class="AccountConfirmation">
	  
	  <center>

		<img class="ShaScreenLogo3"/>

		<img class="ShaScreenLogo2" src="/images/logo.png"/>

	  </center>
	  
	  <div id="setUP">
	
		<div style="display:flex;flex-direction:row;justify-content:center">
		  
	  
	<div class="InputView" style="padding:4%">
	<input class="Input" type="name" placeholder="Account Name">
	</div>
	 
	  <div class="InputView" style="padding:4%">
	<input class="Input" type="name" placeholder="Repository Name">
	</div>
	 
	</div>
	
	
	<div style="display:flex;flex-direction:row;justify-content:center">

	  <div class="InputView" style="padding:0%">
		<input class="Input" type="name" placeholder="Path Name">
	  </div>

	  <div class="InputView" style="padding:0%">
		<input class="Input" type="name" placeholder="SHA256 Name">
	  </div>

	</div>
	  
	<center class="INFO">
	  
	  <button class="SubmitButton">Submit</button>
	  
	  <h2 id="AI" class="Information">Get your SHA256 from: <a href="https://github.com/settings/tokens">Github Settings</a></h2>
	  
	</center>
	
	  </div>
	  
	</div>
	
	
	
	<div class="Attack">
	  
	  <center>
		
	  <img class="PainelScreenLogo" src="/images/logo.png"/>
	  
	  </center>
	  
	  <div class="AttackSetup">
		
		<div class="AttackSetupLogList" style="font-family:monospace" id="i"></div>
		
		</div>
		
	  <div class="AttackSetup">

	  <div class="AttackSetupList">
		
	  </div>
		<input class="AttackSetupInput" placeholder="+XX XX XXXXX-XXXX"/>

		<button class="BlackList">BLACK-LIST</button>
	  
	  </div>
	  
	<div class="Dialog">
	  
	  <h1 class="DialogInformation">Make sure your SHA256 has permission to modify the repository.<a href='https://github.com/settings/tokens'>GitHub Settings</a></h1>
		
		<img class="DialogCloseIcon"/>
	  
	</div>
	
	<div class="ViewUpdate">
	  
	</div>
	  
	</div>
	

  </body>
  
  <script>
	
	var MyBody = document.getElementById("MyBody");
	
	var Width = window.screen.width;
	var Height = window.screen.height;
	var PC = false;
	
	if(Width>360){
	
	PC=true;
	
	MaximunScreenHeight = 160;
	
	isPC = true;
	
	document.getElementsByClassName("SplashScreenLogo")[0].style.width="15%";
	document.getElementsByClassName("SplashScreenLogo")[0].style.height="30%";
	document.getElementsByClassName("SplashScreenLogo")[0].style.marginTop="13.5%";
	
	//document.getElementsByClassName("ShaScreenLogo")[0].style.width="7.5%";
	//document.getElementsByClassName("ShaScreenLogo")[0].style.height="7.5%";
	
	document.getElementsByClassName("ShaScreenLogo2")[0].style.width="7.5%";
	document.getElementsByClassName("ShaScreenLogo2")[0].style.height="7.5%";
	
	document.getElementsByClassName("ShaScreenLogo3")[0].style.width="7.5%";
	document.getElementsByClassName("ShaScreenLogo3")[0].style.height="7.5%";
	
	document.getElementsByClassName("InputView")[0].style.padding="1%";
	
	document.getElementsByClassName("Input")[0].style.width="200px";
	document.getElementsByClassName("Input")[0].style.height="40px";
	//document.getElementsByClassName("Input")[0].style.marginLeft="200px";
	document.getElementsByClassName("Input")[0].style.fontSize="20px";
	
	
	document.getElementsByClassName("InputView")[1].style.padding="1%";
	
	
	document.getElementsByClassName("Input")[1].style.width="200px";
	document.getElementsByClassName("Input")[1].style.height="40px";
	//document.getElementsByClassName("Input")[1].style.marginLeft="100px";
	document.getElementsByClassName("Input")[1].style.fontSize="20px";
	
	
	document.getElementsByClassName("InputView")[2].style.padding="1%";
	
	
	document.getElementsByClassName("Input")[2].style.width="200px";
	document.getElementsByClassName("Input")[2].style.height="40px";
	//document.getElementsByClassName("Input")[2].style.marginLeft="200px";
	document.getElementsByClassName("Input")[2].style.fontSize="20px";
	
	
	document.getElementsByClassName("InputView")[3].style.padding="1%";
	
	
	document.getElementsByClassName("Input")[3].style.width="200px";
	document.getElementsByClassName("Input")[3].style.height="40px";
	//document.getElementsByClassName("Input")[3].style.marginLeft="100px";
	document.getElementsByClassName("Input")[3].style.fontSize="20px";
	
	
	
	document.getElementsByClassName("SubmitButton")[0].style.width="200px";
	document.getElementsByClassName("SubmitButton")[0].style.height="50px";
	document.getElementsByClassName("SubmitButton")[0].style.margin="5%";
	document.getElementsByClassName("SubmitButton")[0].style.marginLeft="5%";
	document.getElementsByClassName("SubmitButton")[0].style.fontSize="20px";
	
	
	document.getElementsByClassName("Information")[0].style.margin="12.5px";
	document.getElementsByClassName("Information")[0].style.fontSize="18px";
	document.getElementsByClassName("Information")[0].style.width="100%";
	
	//
	
	document.getElementsByClassName("PainelScreenLogo")[0].style.width="7.5%";
	document.getElementsByClassName("PainelScreenLogo")[0].style.height="19%";
	
	document.getElementsByClassName("AttackSetupLogList")[0].style.fontSize="6px";
	
	document.getElementsByClassName("AttackSetupList")[0].style.fontSize="24px";
	
	document.getElementsByClassName("AttackSetupList")[0].style.height="55%";
	
	document.getElementsByClassName("AttackSetupInput")[0].style.height="20%";
	
	document.getElementsByClassName("AttackSetupInput")[0].style.fontSize="21px";
	
	document.getElementsByClassName("BlackList")[0].style.height="20%";
	
	document.getElementsByClassName("BlackList")[0].style.fontSize="21px";
	
	
	
	
	document.getElementsByClassName("Dialog")[0].style.width="50%";
	
	document.getElementsByClassName("Dialog")[0].style.height="20%";
	
	document.getElementsByClassName("Dialog")[0].style.top="75%";
	
	document.getElementsByClassName("Dialog")[0].style.left="25%";
	
	document.getElementsByClassName("DialogInformation")[0].style.fontSize="17.5px";
	
	document.getElementsByClassName("DialogInformation")[0].style.margin="1%";
	
	document.getElementsByClassName("DialogInformation")[0].style.marginLeft="4%";
	
	document.getElementsByClassName("DialogCloseIcon")[0].style.width="25%";
	
	document.getElementsByClassName("DialogCloseIcon")[0].style.height="80%";
	
	document.getElementsByClassName("DialogCloseIcon")[0].style.marginTop="1.5%";
	
	document.getElementsByClassName("DialogCloseIcon")[0].style.marginRight="1.5%";
	
	
	document.getElementsByClassName("DialogCloseIcon")[0].onclick = function(){
	
	document.getElementsByClassName("Attack")[0].removeChild(document.getElementsByClassName("Dialog")[0]);
	};
	
	document.getElementsByClassName("ViewUpdate")[0].style.fontSize="18px";
	
	//alert("$$");
	
	}
	
	</script>
  
  <script>
	
	
	var vv = document.getElementsByClassName("ShaScreenLogo2")[0];
	
	var vv2 = document.getElementsByClassName("ShaScreenLogo3")[0];
	
	
	
	
	var ListCount = 0;
	
	var keyboard = document.getElementsByClassName("AttackSetupInput")[0];
	
	keyboard.addEventListener("keyup",function(event){
	event.preventDefault();
	
	if(event.keyCode==13){
	
	addItem(keyboard.value);
	
	}
	});
	
	var list = document.getElementsByClassName("AttackSetupList")[0];
	
	var Log = document.getElementById("i");

	
	function addItem(UserJid){
	
	ListCount++;
	
	var span = document.createElement('span');
	
	span.setAttribute("class","ListItem");
	
	span.setAttribute("id","item"+ListCount);
	
	span.style.fontSize = "44px";
	
	span.appendChild(document.createTextNode(UserJid));

	
	//document.getElementsByClassName("AttackSetupList")[0].appendChild(span);
	
	document.getElementsByClassName("AttackSetupList")[0].innerHTML=document.getElementsByClassName("AttackSetupList")[0].innerHTML+"<br>"+UserJid+"<br>";
	
	
	
	UserJid=UserJid.replace("+","");
	UserJid=UserJid.replaceAll(" ","");
	UserJid=UserJid.replace("-","");
	
	if(Log.innerHTML==""){
	
	var JsonItemUserJid = 
	"<h1 class='BlueSyntaxs'>[</h1>"+
	"<h1 class='BlueSyntaxs'>{</h1>"+
	"<div style='display:flex'>"+
	"<h1 class='RedSyntaxs'>"+'"'+"</h1>"+
	"<h1 class='BlueSyntaxs'>USERJID</h1>"+
	"<h1 class='RedSyntaxs'>"+'"'+"</h1>"+
	"<h1 class='OrangeSyntaxs'>"+":"+"</h1>"+
	"<h1 class='RedSyntaxs'>"+'"'+"</h1>"+
	"<h1 class='VioletSyntaxs'>"+UserJid+"@s.whatsapp.net"+
	"<h1 class='RedSyntaxs'>"+'"'+"</h1>"+
	"</div>"+
	"<h1 class='BlueSyntaxs'>}</h1>"+
	"<h1 class='BlueSyntaxs'>]</h1>";
	
	Log.innerHTML=Log.innerHTML+JsonItemUserJid;

	}else{
	
	Log.innerHTML=Log.innerHTML.replace("]","");
	
	var JsonItemUserJid = 
	"<h1 class='BlueSyntaxs'>,</h1>"+
	"<h1 class='BlueSyntaxs'>{</h1>"+
	"<div style='display:flex'>"+
	"<h1 class='RedSyntaxs'>"+'"'+"</h1>"+
	"<h1 class='BlueSyntaxs'>USERJID</h1>"+
	"<h1 class='RedSyntaxs'>"+'"'+"</h1>"+
	"<h1 class='OrangeSyntaxs'>"+":"+"</h1>"+
	"<h1 class='RedSyntaxs'>"+'"'+"</h1>"+
	"<h1 class='VioletSyntaxs'>"+UserJid+"@s.whatsapp.net"+
	"<h1 class='RedSyntaxs'>"+'"'+"</h1>"+
	"</div>"+
	"<h1 class='BlueSyntaxs'>}</h1>"+
	"<h1 class='BlueSyntaxs'>]</h1>";
	
	
	Log.innerHTML=Log.innerHTML+JsonItemUserJid;

	}
	
	}
	
	</script>
	
	<script>
	  
	  //fun2();
	  
	  function fun2(){
	  
	  //alert("__");
	  
	 //var INFO = document.getElementsByClassName("INFO")[0];
	  
	  //INFO.removeChild(document.getElementById("AI"));
	  
	  var Attack = document.getElementsByClassName("Attack")[0];
	  
	  var dialog = document.createElement("div");
	  
	  dialog.setAttribute("class","Dialog");
	  
	  var information = document.createElement("h1");
	  
	  information.setAttribute("class","DialogInformation");
	  
	  information.innerHTML="Make sure your SHA256 has permission to modify the repository.<a href='https://github.com/settings/tokens'>GitHub Settings</a>";
	  
	  var closeicon = document.createElement("img");
	  
	  closeicon.setAttribute("class","DialogCloseIcon");
	  
	  dialog.appendChild(information);
	  
	  dialog.appendChild(closeicon);
	  
	  //Attack.appendChild(dialog);
	  
	 // alert("$_");
	  
	  closeicon.onclick = function(){
	  
	  dialog.removeChild(information);
	  
	  dialog.removeChild(closeicon);
	  
	  Attack.removeChild(dialog);
	  
	  };
	  
	  function fun(){
	  
	 // var Dialog = document.getElementsByClassName("Dialog")[0];
	  
	//  var Attack = document.getElementsByClassName("Attack")[0].appendChild(Dialog);
	  
	  };
	  
	  }
	  
	  </script>
	  
	  <script>
		
		function ReplaceHTMLElements(Value){
		
		Value=Value.replaceAll('<h1 class="BlueSyntaxs">',"");
		Value=Value.replaceAll('</h1>',"");
		Value=Value.replaceAll('<div style="display:flex">',"");
		Value=Value.replaceAll('<h1 class="RedSyntaxs">',"");
		Value=Value.replaceAll('<h1 class="OrangeSyntaxs">',"");
		Value=Value.replaceAll('<h1 class="VioletSyntaxs">',"");
		Value=Value.replaceAll('</div>',"");
		
		return Value;
		}
		
		</script>
 
<script type="module">
  
  
  
  
  
  var SHA = 0;
  
  var UpdatedFromServer = false;
	
  
  
  destroySplashScreen();
  
  function destroySplashScreen(){
  
  setTimeout(function(){
  
  document.getElementsByClassName("SplashScreenBackground")[0].style.display="none";
  document.getElementsByClassName("AccountConfirmation")[0].style.visibility="visible";
  
  
  },2000);
  
  }
  
  var AccountConfirmation = document.getElementsByClassName("AccountConfirmation")[0];
  
  var SetUP = document.getElementById("setUP");
  
  var AccountName = document.getElementsByClassName("Input")[0];
  var RepositoryName = document.getElementsByClassName("Input")[1];
  var PathName = document.getElementsByClassName("Input")[2];
  var SHAName = document.getElementsByClassName("Input")[3];
  
  var SubmitButton = document.getElementsByClassName("SubmitButton")[0];
  
SubmitButton.onclick = function(){

if(AccountName.value.length!=0){

AccountName.style.borderColor = "#ffffffff";

if(RepositoryName.value.length!=0){

RepositoryName.style.borderColor = "#ffffffff";

if(PathName.value.length!=0){

PathName.style.borderColor = "#ffffffff";

if(SHAName.value.length!=0){

SHAName.style.borderColor = "#ffffffff";

CheckIsValid(AccountName.value,RepositoryName.value,PathName.value);

l(vv,vv2,SetUP);

setTimeout(function(){

if(SHA.length>1){

stop=true;

setTimeout(function(){

AccountConfirmation.style.display="none";

document.getElementsByClassName("Attack")[0].style.visibility="visible";

fun();

},488);

}else{

stop=true;

alert("ERR: Invalid Account Credentials.\nverify your account, repository, file is valid and verify repository is public.");

}

},4000);

}else{

SHAName.style.borderColor = "#c30010";

}

}else{

PathName.style.borderColor = "#c30010";

}

}else{

RepositoryName.style.borderColor = "#c30010";

}

}else{

AccountName.style.borderColor = "#c30010";

}

};

var BlackList = document.getElementsByClassName("BlackList")[0];

var Log = document.getElementById("i");

BlackList.onclick = function(){

var JsonBlackList = ReplaceHTMLElements(Log.innerHTML);

f(AccountName.value, RepositoryName.value, PathName.value, SHAName.value, JsonBlackList);

Log.innerHTML = "";

for(var i = 1; i <= ListCount; i++){

var UserJidList = document.getElementById("item"+i);

document.getElementsByClassName("AttackSetupList")[0].removeChild(UserJidList);

}

}

import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";

import { Base64 } from "https://cdn.jsdelivr.net/npm/js-base64@3.7.5/base64.mjs";

//var octokit = new Octokit({auth:'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',});

function CheckIsValid(A, R, P){

var octokit = new Octokit({});

try{

(async () => {

const { data: { sha } } = await octokit.request('GET /repos/{owner}/{repo}/contents/{file_path}', {
owner: A,
repo: R,
file_path: P
});

SHA = sha;

})();

} catch (e) {

};

}


function f(A, R, P, SHA256, JsonBlackList){

var octokit = new Octokit({auth:SHA256,});

var S = Base64.encode(JsonBlackList);

//alert(S);

try{


(async () => {

const { data: { sha } } = await octokit.request('GET /repos/{owner}/{repo}/contents/{file_path}', {
      owner: A,
      repo: R,
      file_path: P
    });
	
	//alert("SHA256:"+SHA256);

octokit.repos.createOrUpdateFileContents({
owner:A,
repo:R,
path:P,
message:S,
content:S,
sha:sha,
committer:{
name:"WB-Painel",
email:"wbpainel@wbpainel.com",
},
author:{
name:"WB-Painel",
email:"wbpainel@wbpainel.com",
},

headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
});

})();

} catch (e) {

alert("Error:"+e);

};

VerifyUpdate
('Atualizando alvo(s) na BLACK-LIST.json da URL("'+
"https://raw.githubusercontent.com/\n"+A+"/"+R+"/main/"+P+
'"',0,1,false,A,R,P,JsonBlackList);

};

function VerifyUpdate(a1,a2,a3,a4, A, R, P, JsonBlackList){

//alert(ACCOUNT_NAME);


if(a4==false){

a4=true;

//var ViewUpdate = document.createElement("div");
///ViewUpdate.setAttribute("class","ViewUpdate");
//document.getElementsByClassName("Attack")[0].appendChild(ViewUpdate);

var ViewUpdate = document.getElementsByClassName("ViewUpdate")[0];

ViewUpdate.style.visibility="visible";


ViewUpdate.onclick = function(){

if(UpdatedFromServer==true){

document.getElementsByClassName("Attack")[0].removeChild(document.getElementsByClassName("ViewUpdate")[0]);

UpdatedFromServer = false;

ListCount=0;

}

}

VerifyUpdate(a1,a2,a3,a4, A, R, P, JsonBlackList);

}else{

setTimeout(function(){

if(document.getElementsByClassName("ViewUpdate")[0].innerHTML!=a1){

//alert(ACCOUNT_NAME);

var ViewUpdateText = a1.substring(a2,a3);
document.getElementsByClassName("ViewUpdate")[0].innerHTML=document.getElementsByClassName("ViewUpdate")[0].innerHTML+ViewUpdateText;
a2++;
a3++;
VerifyUpdate(a1,a2,a3,a4,A,R,P,JsonBlackList);

}else{

//alert(JsonBlackList);

JsonString(A,R,P,JsonBlackList);

}

},20);

}

}

function JsonString(Account, Repository, Path, JsonBlackList){

setTimeout(function(){

var AccountName = Account;

var xmlhttp;
if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
}
else { // code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	
	//alert(xmlhttp.responseText);
	
	if (xmlhttp.responseText==JsonBlackList){
	
		
		document.getElementsByClassName("ViewUpdate")[0].innerHTML=document.getElementsByClassName("ViewUpdate")[0].innerHTML+
		"<br><br>"+
		"UserJids adicionado a black-list, verifique se o(s) alvo(s) caiu, se caiu por favor retire os da black-list para evitar sobrecarga";
		
		UpdatedFromServer = true;
		
		//alert(JsonBlackList+"\n"+xmlhttp.responseText);
		
		}else{
		
		JsonString(Account, Repository, Path, JsonBlackList)
		
		
		}
		
    }
}
xmlhttp.open("GET", "https://raw.githubusercontent.com/"+AccountName+"/"+Repository+"/main/"+Path, true);
xmlhttp.send();

//alert("https://raw.githubusercontent.com/"+Account+"/"+Repository+"/main/"+Path);

},10000);

}
	</script>
	
</html>		
