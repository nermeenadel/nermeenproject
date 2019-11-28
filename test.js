function numRandom(min, max)
{
return Math.floor(Math.random() * (max - min +1) + min);
}
var Alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S","T", "U", "V", "W", "X", "Y", "Z"];
var ok = document.getElementById("ok")
ok.addEventListener("click", function()
{
	var span_btn= document.getElementById("btnn");
	span_btn.innerHTML="";
	var input =document.getElementById("num") ;
	var number =input.value;
	for(var i = 0; i < number ; i++){
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
	span_btn.addEventListener("click", function(e){
		var textt = e.target.textContent;
		var div = document.getElementById("oo");
		div.innerHTML = "<img src=alphabet/" + textt+ ".jpg >";
	});
});