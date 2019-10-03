var colors=[];

var numBoxes=6;
var target_color=document.getElementById("target_color");
var boxes=document.querySelectorAll(".square");
var resetGame=document.querySelector("#reset");
colorSpray(numBoxes);
var chosen_color=randomizer(); 		
target_color.textContent=chosen_color;

var message=document.getElementById("message");
var h1=document.querySelector("h1");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numBoxes=3;
	colorSpray(numBoxes);
	chosen_color=randomizer();
	target_color.textContent=chosen_color;
	for(var i=0;i<boxes.length;i++)
	{
		if(colors[i])
		{
			boxes[i].style.backgroundColor=colors[i];
		}
		else
		{
			boxes[i].style.display="none";

		}
	}
})
hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numBoxes=6;
	colorSpray(numBoxes);
	chosen_color=randomizer();
	target_color.textContent=chosen_color;
	for(var i=0;i<boxes.length;i++)
	{
		boxes[i].style.backgroundColor=colors[i];
		boxes[i].style.display="block";
	}
})

resetGame.addEventListener("click",function(){
	message.textContent="";
	resetGame.textContent="New colors";
	colorSpray(numBoxes);
	chosen_color=randomizer();
	target_color.textContent=chosen_color;
	h1.style.backgroundColor="steelblue";
	for(var i=0;i<boxes.length;i++)
	{
		boxes[i].style.backgroundColor=colors[i];		
	}


})
for(var i=0;i<boxes.length;i++)
{
	boxes[i].style.backgroundColor=colors[i];
	boxes[i].addEventListener("click",function(){
		selected_color=this.style.backgroundColor;
		if(selected_color===chosen_color)
			{
				message.textContent="Correct!";
				h1.style.backgroundColor=selected_color;
				winnerEffect(selected_color);
				resetGame.textContent="Play again!";
			}
		else{
					message.textContent="Try again!";
					this.style.backgroundColor="#232323";
			}
	})

}

function winnerEffect(color)
{
	for(var i=0;i<boxes.length;i++)

	{
		boxes[i].style.backgroundColor=color;
	}
}

function randomizer()
{
	var randy=Math.floor(Math.random()* colors.length);
	return colors[randy];
}
function colorSpray(no)
{
	colors=[];
	for(var i=0;i<no; i++)
	{
		var getRgb=colorRandomiser();
		colors.push(getRgb);

	}
	//for(var i=0;i<boxes.length;i++)
	//{
	//	console.log(colors[i]);
	//}
}

function colorRandomiser()
{
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}