var canvas=new fabric.Canvas('myCanvas');

Block_width=30;
Block_height=30;

Boy_x=10;
Boy_y=10;

var player_object="";
var block_image_object="";

function player_update()
{
    fabric.Image.fromURL("https://i.postimg.cc/zDwfFdYY/player.png", function(Img){
    player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);   
    player_object.set({
        top:Boy_y,
        left:Boy_x
    });  
    canvas.add(player_object);
    });
}

function new_image(get_img)
{
    fabric.Image.fromURL(get_img, function(Img){
    block_image_object=Img;
    block_image_object.scaleToWidth(Block_width);
    block_image_object.scaleToHeight(Block_height);   
    block_image_object.set({
        top:Boy_y,
        left:Boy_x
    });  
    canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
keyPressed=e.keyCode;
console.log(keyPressed);
if(e.shiftKey == true && keyPressed == '80')
{
    console.log("p and shift");
    Block_width=Block_width+10;
    Block_height=Block_height+10;
    document.getElementById("current_width").innerHTML = Block_width;
    document.getElementById("current_height").innerHTML = Block_height;
}

if(e.shiftKey == true && keyPressed == '77')
{
    console.log("m and shift");
    Block_width=Block_width-10;
    Block_height=Block_height-10;
    document.getElementById("current_width").innerHTML = Block_width;
    document.getElementById("current_height").innerHTML = Block_height;
}
    if(keyPressed == '38')
    {
        up();
        console.log("up");
    }
    if(keyPressed == '40')
      {
         down();
         console.log("down");
      }

      if(keyPressed == '37')
      {
         left();
         console.log("left");
      }

      if(keyPressed == '39')
      {
         right();
         console.log("right");
      }
      if(keyPressed == '70')
      {
         new_image('captain_america_left_hand.png');
         console.log("f");
      }
      if(keyPressed == '66')
      {
         new_image('hulk_face.png');
         console.log("b");
      }
      if(keyPressed == '76')
      {
         new_image('hulk_left_hand.png');
         console.log("l");
      }
      if(keyPressed == '82')
      {
         new_image('hulk_right_hand.png');
         console.log("r");
      }
      if(keyPressed == '72')
      {
         new_image('hulk_legs.png');
         console.log("h");
      }
}

function up()
{
   if(Boy_y>=0)
   {
      Boy_y=Boy_y-Block_height;
      console.log("Block_height ="+Block_height);
      console.log("up arrow ="+Boy_x,+Boy_y);
      canvas.remove(player_object);
      player_update();
   }
}

function down()
{
   if(Boy_y<=500)
   {
      Boy_y=Boy_y+Block_height;
      console.log("Block_height ="+Block_height);
      console.log("up arrow ="+Boy_x,+Boy_y);
      canvas.remove(player_object);
      player_update();
   }
}

function left()
{
   if(Boy_x>0)
   {
      Boy_x=Boy_x-Block_width;
      console.log("Block_width="+Block_width);
      console.log("up arrow ="+Boy_x,+Boy_y);
      canvas.remove(player_object);
      player_update();
   }
}

function right()
{
   if(Boy_x<=850)
   {
      Boy_x=Boy_x+Block_width;
      console.log("Block_width="+Block_width);
      console.log("up arrow ="+Boy_x,+Boy_y);
      canvas.remove(player_object);
      player_update();
   }
}