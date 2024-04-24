//your JS code here. If required.
document.addEventListener('DOMContentLoaded',() => {
	const textInput = document.getElementById("text");
	const delayInput = document.getElementById("delay");
	const outDiv = document.getElementById("output");
	const btn = document.getElementById('btn');

	btn.addEventListener('click', async() => {
		const text = textInput.value;
		const delay = parseInt(delayInput.value);

		if(!text || isNaN(delay)){
			outDiv.textContent = "please enter valid text";
			return;
		}

		outDiv.textContent = "Waiting...";

     await.clearOutputDiv();
		
		await delayFunction(delay);
		outDiv.textContent = text;
	});

	function delayFunction(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}
	function clearOutputDiv() {
        return new Promise(resolve => {
            outputDiv.textContent = "";
            resolve();
        });
    }
});
// 	outDiv.innerHTML = " ";

// 	await delayFunction(delay);

// 	outDiv.innerText = text;

// });

// async function delayFunction(delay){
// 	await new Promise(resolve => setTimeout(resolve, delay));
// }

// document.getElementById("btn").addEventListener("click", function(){
// 	var text2 = document.getElementById("delay").value;
// 	var outDiv = document.getElementById("output");

// 	outDiv.innerHTML = " ";

// 	setTimeout(function(){
// 		outDiv.innerText = text2;
// 	},2000);
// })