let star; star2; star3; star4; star5; star6; star7;


function setup() {
	createCanvas(1000, 1000);
	//displayMode('centered');




	
	let star = new Sprite();
	star.x = 200;
	star.y = 100;
	star.width = 250;
	star.height = 250;
	star.image = createGraphics(star.width, star.height);
	star.rotationSpeed = 1;
	star.immovable = true;
	star.collider ='none';
	star.image = '⭐️';
	

	let star2 = new Sprite();
	star2.x = 800;
	star2.y = 300;
	star2.width = 250;
	star2.height = 250;
	star2.rotationSpeed = 1;
	star2.immovable = true;
	star2.collider ='none';
	star2.image = createGraphics(star.width, star.height);
	star2.image = '⭐️';

	let star3 = new Sprite();
	star3.x = 400;
	star3.y = 400;
	star3.width = 250;
	star3.height = 250;
	star3.rotationSpeed = 1;
	star3.immovable = true;
	star3.collider ='none';
	star3.image = createGraphics(star.width, star.height);
	star3.image = '⭐️';

	let star4 = new Sprite();
	star4.x = 150;
	star4.y = 500;
	star4.width = 250;
	star4.height = 250;
	star4.rotationSpeed = 1;
	star4.immovable = true;
	star4.collider ='none';
	star4.image = createGraphics(star.width, star.height);
	star4.image = '⭐️';


	let star5 = new Sprite();
	star5.x = 650;
	star5.y = 600;
	star5.width = 250;
	star5.height = 250;
	star5.rotationSpeed = 1;
	star5.immovable = true;
	star5.collider ='none';
	star5.image = createGraphics(star.width, star.height);
	star5.image = '⭐️';

	let star6 = new Sprite();
	star6.x = 300;
	star6.y = 750;
	star6.width = 250;
	star6.height = 250;
	star6.rotationSpeed = 1;
	star6.immovable = true;
	star6.collider ='none';
	star6.image = createGraphics(star.width, star.height);
	star6.image = '⭐️';

	let star7 = new Sprite();
	star7.x = 850;
	star7.y = 800;
	star7.width = 250;
	star7.height = 250;
	star7.rotationSpeed = 1;
	star7.immovable = true;
	star7.collider ='none';
	star7.image = createGraphics(star.width, star.height);
	star7.image = '⭐️';

}

function draw() {
	background('black');



//outline for canvas
stroke(255);
strokeWeight(10);
noFill();
rect(5, 5, width - 10, height - 10);



	if (mouse.presses()) {
		
	}


}

