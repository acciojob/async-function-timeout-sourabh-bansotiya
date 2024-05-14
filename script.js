// //your JS code here. If required.
// const text = document.getElementById("text").value;
// const number = document.getElementById("delay").value;
// const btn = document.getElementById("btn");

// btn.addEventListener('click', function(){
// async function msgDelay(){
//     await new Promise ((r) => setTimeout(r, 1000));
//     console.log(${text});
//     await new Promise ((r) => setTimeout(r, 2000));
//     console.log(${number});
// }
// 	})

const btn = document.getElementById("btn");

btn.addEventListener('click', async function(){
    const text = document.getElementById("text").value;
    const delay = document.getElementById("delay").value;

    async function msgDelay() {
        await new Promise ((r) => setTimeout(r, 1000));
        document.getElementById("output").innerText = `${text}`;
		await new Promise ((r) => setTimeout(r, 2000));
        document.getElementById("output").innerText = `${delay}`;
    }

    msgDelay();
});
