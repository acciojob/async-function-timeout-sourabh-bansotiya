//your JS code here. If required.
document.getElementById("btn").addEventListener("click", function(){
	var text1 = document.getElementById("text").value;
	var outDiv = document.getElementById("output");

	outDiv.innerHTML = " ";

	setTimeout(function(){
		outDiv.innerText = text1;
	},1000);
})

document.getElementById("btn").addEventListener("click", function(){
	var text2 = document.getElementById("delay").value;
	var outDiv = document.getElementById("output");

	outDiv.innerHTML = " ";

	setTimeout(function(){
		outDiv.innerText = text2;
	},2000);
})