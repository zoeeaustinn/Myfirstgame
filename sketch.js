
let broom;
//let Sprite1
let gems;
let bgColor;


function setup() {
	createCanvas(1500, 1800);
	//displayMode('centered');
bgColor = color('#CCCCFF');




broom = new Sprite();
broom.x = 1000;
broom.y = 1000;
broom.width = 500;
broom.height = 500;
broom.rotationLock = true; 


let broomGraphics = createGraphics(broom.width,broom.height);
broomGraphics.textSize(400)
broomGraphics.textAlign(CENTER,CENTER);
broomGraphics.fill(255)
broomGraphics.text('🧹', broom.width/ 2, broom.height/ 2);
broom.image = broomGraphics;



//Sprite1 = new Sprite(100, 100, 300, 300);
//Sprite1.color = 'white';


gems = new Group();
gems.diameter = 40;
gems.amount = 150;

for (let i = 0; i < gems.length; i++) {
	gems[i].x = random(width);
	gems[i].y = random(height);


}

}

function draw() {
	background(bgColor);




	

textAlign (CENTER, TOP);
textSize(100);
fill(255);
text("Clean up the mess!!", width / 2, 20);






broom.moveTowards(mouse);


for (let gem of gems){
	if (broom.overlaps(gem)) {

		gem.x = -500;
		gem.y = -500;
	}
}







let allGemsOffscreen = true;
for (let gem of gems){
	if (gem.x >= 0 && gem.x <= width && gem.y >= 0 && gem.y <= height) {
		allGemsOffscreen = false;
		break;
	}
}



if (allGemsOffscreen){
	bgColor = color(random(255), random(255), random(255));


	for (let gem of gems) {
		gem.x = random(width);
		gem.y = random(height);
}




}








}
