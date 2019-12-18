function numRandom(min, max)
{
return Math.floor(Math.random() * (max - min +1) + min);
}
var arr = [];
var Alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S","T", "U", "V", "W", "X", "Y", "Z"];
var ok = document.getElementById("ok")
ok.addEventListener("click", function(e)
{   var local_time = new Date().getTime();
    var storared = new storge(e.type , e.target , local_time ); 
 if (localStorage.getItem("click") != null)
 {
 	arr = JSON.parse(localStorage.getItem("click"));
 }
 arr.push(storared);
 localStorage.setItem("click" , JSON.stringify(arr));
  setTimeout(function()
	{
		localStorage.removeItem("click");
	},
	 5000);

	var span_btn= document.getElementById("btnn");
	span_btn.innerHTML="";
	var input =document.getElementById("num") ;
	var number =input.value;
	for(var i = 0; i < number ; i++)
	{
		var randomNumber = numRandom(0, 25);
		var letterRandom = Alphabet[randomNumber];
		var cButton = document.createElement("button");
		var addText = document.createTextNode(letterRandom);
		cButton.appendChild(addText);
		var spann= document.getElementById("btnn"); 
		spann.appendChild(cButton);
		cButton.setAttribute("style", "margin:4px")
		cButton.setAttribute("id","aph");

	}
	var span_btn= document.getElementById("btnn");
	span_btn.addEventListener("click", function(e)
{
		var textt = e.target.textContent;
		var div = document.getElementById("oo");
		div.innerHTML = "<img src=alphabet/" + textt+ ".jpg >";
		var local_time = new Date().getTime();
       var storared = new storge(e.type , e.target , local_time ); 
     if (localStorage.getItem("letter_button") != null)
   {
 	    arr = JSON.parse(localStorage.getItem("letter_button"));
   }
      arr.push(storared);
      localStorage.setItem("letter_button" , JSON.stringify(arr));
       setTimeout(function()
	{
		localStorage.removeItem("letter_button");
	},
	 5000);

});
	});
   
function storge(type , target , time)
{
	this.type = type;
	this.target = target;
	this.time = time;
}
window.addEventListener("load", function(e)
{

 var local_time = new Date().getTime();
 var storared = new storge(e.type , e.target , local_time ); 
 if (localStorage.getItem("load") != null)
 {
 	arr = JSON.parse(localStorage.getItem("load"));
 }
 arr.push(storared);
 localStorage.setItem("load" , JSON.stringify(arr));
 $.ajax({
			"url" : "increment.php",
			"method" : "post",
			"data" : {"object" :JSON.stringify(storared) },
			"beforeSend":function(){
				console.log("sending to server...");
				console.log(storared);
			},
			success : function(response){
				console.log("server replayed");
			    console.log(response);
				console.log(typeof response);
			}
		});
});
setTimeout(function()
	{
		localStorage.removeItem("load");
	},
	 5000);
window.addEventListener("unload", function(e)
{
var local_time = new Date().getTime();
var storared = new storge(e.type , e.target , local_time );
 if (localStorage.getItem("unload" ) != null)
 {
 	arr=JSON.parse(localStorage.getItem("unload"));
 } 
 arr.push(storared);
 localStorage.setItem("unload" , JSON.stringify(arr));
});
setTimeout(function()
	{
		localStorage.removeItem("unload");
	},
	 5000);
 $.ajax({
			"url" : "increment.php",
			"method" : "get",
			"data" : {"db": ""},
			"beforeSend":function(){
          console.log("sending to server...");
			
		},
        "success":function(response){
				
            console.log("server replayed");
        }
    });