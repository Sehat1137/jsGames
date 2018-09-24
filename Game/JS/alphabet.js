var 
    canv = document.getElementById('canvas');
    ctx = canv.getContext('2d');
	bodySize = document.body.getBoundingClientRect();

	canv_width = bodySize.width * 0.9;
	canv_height = bodySize.height * 2;

	delay_time = 1000;

	game = false;

	letersList = [
		['Б', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ф', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Б', 'Ю'], 
		['Л', 'П', 'О'], 
		['Л', 'П', 'О']]

document.getElementById('1').checked = true;
canv.setAttribute('width', canv_width);
canv.setAttribute('height', canv_height);


function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function сhangSpeed() {
	speed = document.getElementById("speed").value;
	delay_time = 6000 - (speed * 1000);
	return delay_time;
}



function chekOverlap (leter2){
	var leter3 = letersList[2][getRandomInt(0, letersList[2].length)];

	while (leter2 == leter3){
		leter3 = letersList[2][getRandomInt(0, letersList[2].length)];
	}

	if (document.getElementById('1').checked) {return " ";}
	else {return leter3;}
}

function createAndShowLeters(){

	var leter1 = letersList[0][getRandomInt(0, letersList[0].length)];
	var leter2 = letersList[1][getRandomInt(0, letersList[1].length)];
	var leter3 = chekOverlap(leter2);

	pos_x = getRandomInt(60, canv_width - 100)
	pos_y = getRandomInt(60, canv_height - 200)
     
	ctx.clearRect(0, 0,  canv_width, canv_height);
	ctx.fillStyle = "black"
	ctx.font = "BOLD 5em HELVETIСA";
	ctx.textAlign = "center";
	ctx.textBaseline = "midle";
	ctx.fillText(leter1, pos_x, pos_y);
	ctx.fillText(leter2, pos_x, pos_y + 70);
	ctx.fillText(leter3, pos_x, pos_y + 140);
}

function runGame (){
    setTimeout(function run() {
    	if (game){
    		delay_time = сhangSpeed();
    		createAndShowLeters();
    	}

    	setTimeout(run, delay_time);

    }, delay_time);
}


window.onload = function () {
	var b = document.getElementById("startButton").onclick = function() {
		if ( this.innerHTML == "Старт" )
			game = true,
			runGame(),
			this.innerHTML = "Стоп";
		else this.innerHTML = "Старт",
			game = false;
	}
	return false;
}