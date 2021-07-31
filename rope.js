class rope{
	constructor()
	{

	//create rope constraint here
	
	}


    //create display() here 
display() {
var pos = this.body.position;
push();
translate(pos.x, pos.y);
imageMode(CENTER);
image(this.image, 0, 0, this.width, this.height);
pop();
}



}
