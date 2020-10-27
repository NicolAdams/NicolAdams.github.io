const game_fill =  document.querySelector('.game_fill');
const counter = document.querySelector('.counter');
const score = document.querySelector('.score');

let maxLevel = 20;



let counterf;

let target;
let fillSize = 660;
let level = 2;

let targetRec;
let R,G,B;

function gg(){
	alert("YOU LOOSE");
	level = 2;
	main();
}

function win(){
	alert("YOU WIN!!!")
			level = 2;
			main();
}

function listen(event) {
	const target = event.target;


	console.log(targetRec);
	console.log(target.dataset.id);
	if(targetRec==target.dataset.id)
	{
		if(level==maxLevel)
		{
			win();
		}
		else
		{
			level++;
			fill();
		}
	}
	else
	{
		gg();
	}
}

function fill(){

	score.innerHTML = 'Level: '+(level-1);

	targetRec = Math.floor( Math.random()*level*level);
	R = Math.floor( Math.random()*256);
	G = Math.floor( Math.random()*256);
	B = Math.floor( Math.random()*256);

	game_fill.innerHTML = "";

	
	let n = level*level;
	let size = Math.floor( fillSize/level);
	let callor;

	for(let i=0;i<n;i++)
	{
		const dive = document.createElement('div');
		dive.dataset.id = i;

		let margin = Math.ceil(10/level);

		dive.style.margin = margin+"px";

		dive.style.height = (size-margin*2-2)+"px";
		dive.style.width = (size-margin*2-2)+"px";
		console.log(dive.style.height);
		let dif = (0.8+level*0.01);
		if(i!=targetRec)
			callor = "rgb("+R+","+G+","+B+")";
		else
			callor = "rgb("+(R*dif)+","+(G*dif)+","+(B*dif)+")";

		dive.style.background = callor;

		dive.addEventListener('click', listen);

		game_fill.appendChild(dive);
	}
}
function counterF()
{
	let i =30;
	counterf = setInterval(function() {
	        counter.innerHTML ="Time: "+ i;
	        i--;
	        if(i==0)
	        {
	        	gg();
	        }

		},1000)
	
}
function main()
{
	clearInterval(counterf);
	counterF();
	fill();
}

main();





