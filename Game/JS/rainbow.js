    	var 
    		canv = document.getElementById('canvas');
    		ctx = canv.getContext('2d');
			bodySize = document.body.getBoundingClientRect();

			canv_width = bodySize.width * 0.9;
			canv_height = bodySize.height * 2.2;
			rect_w = 250;
			rect_h = 75; 

			canv.setAttribute('width', canv_width);
			canv.setAttribute('height', canv_height);

			colors  = ["#ff0000", "#ffff00", "#0000ff", "#42aaff", "#008000", "#808080"];
			colors_name = ["КРАСНЫЙ", "ЖЁЛТЫЙ", "СИНИЙ", "ГОЛУБОЙ", "ЗЕЛЁНЫЙ", "СЕРЫЙ", "ХЛОПОК",];

			delay_time = 0;
			num_rect = 1;
			game = false;
			count = 9999; // кол-во показов



		function getRandomInt(min, max) {
  			return Math.floor(Math.random() * (max - min)) + min;
		}

		function checkColor(rect_color, label_color){
			while (rect_color == label_color ){
		 		label_color = getRandomInt(0, colors.length - 1);
		 	}
		 	return label_color;
		}


		function createRectangleAndTextinCavas() {
			ctx.clearRect(0, 0,  canv_width, canv_height);

			delay_time = сhangSpeed();

			color_name = colors_name[getRandomInt(0, colors_name.length)]
			pos_x = getRandomInt(0,canv_width - rect_w)
		 	pos_y = getRandomInt(0,canv_height - rect_h)
		 	rect_color = getRandomInt(0, colors.length);
		 	label_color = getRandomInt(0, colors.length);


		 	label_color = checkColor(rect_color, label_color);

		 	//Создание прямоугольника
			ctx.fillStyle = colors[rect_color];
	 		ctx.fillRect(pos_x, pos_y, rect_w, rect_h);

	 		// //Создание текста 
	 		ctx.fillStyle = colors[label_color];
	 		ctx.font = "BOLD 1.6em HELVETIСA";
	 		ctx.textAlign = "center";
	 		ctx.textBaseline = "midle";
	 		ctx.fillText(color_name, pos_x + (rect_w/2), pos_y + 45);

	 		setTimeout(function(){ctx.clearRect(0, 0,  rect_w, rect_h);}, delay_time);
	 		console.log(delay_time);


		}

		function runGame() {
			setTimeout(function run() {
			if (num_rect > count && game) {
				setTimeout(function(){ctx.clearRect(0, 0,  canv_width, canv_height);}, delay_time);
				return false
			}
			createRectangleAndTextinCavas();
			num_rect+=1;
			setTimeout(run, delay_time);
			}, delay_time);
		}

		function сhangSpeed() {
			speed = document.getElementById("speed").value;
			delay_time = (3.25 - speed) * 1000;
			return delay_time;

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
