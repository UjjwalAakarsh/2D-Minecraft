canvas=new fabric.Canvas('myCanvas')
block_Width=30;
block_Height=30;
playerx=50;
playery=50;
playerimg='';
blockimg='';

function update_player_img(){
fabric.Image.fromURL("player.png", function(Img){
    playerimg=Img;
    playerimg.scaleToWidth(130);
    playerimg.scaleToHeight(130);
    playerimg.set({
        top:playery,
        left:playerx
    });
    canvas.add(playerimg);
});
}

function update_block_img(block){
    fabric.Image.fromURL(block, function(Img){
        blockimg=Img;
        blockimg.scaleToWidth(block_Width);
        blockimg.scaleToHeight(block_Height);
        blockimg.set({
            top:playery,
            left:playerx
        });
        canvas.add(blockimg);
    });
}
window.addEventListener("keydown",kd)
function kd(e){
    var key_number=e.keyCode;
    console.log(key_number);

    if(key_number=="87"){
        console.log("w is pressed");
        update_block_img("wall.jpg")
    }
    if(key_number=="67"){
        console.log("c is pressed");
        update_block_img("cloud.jpg")
    }
    if(key_number=="68"){
        console.log("d is pressed");
        update_block_img("dark_green.png");
    }
    if(key_number=="71"){
        console.log("g is pressed");
        update_block_img("ground.png")
    }
    if(key_number=="76"){
        console.log=("l is pressed");
        update_block_img("light_green.png")
    }
    if(key_number=="82"){
        console.log("r is pressed");
        update_block_img("roof.jpg")
    }
    if(key_number=="84"){
        console.log("t is pressed");
        update_block_img("trunk.jpg")
    }
    if(key_number=="89"){
        console.log("y is pressed");
        update_block_img("yellow_wall.png")
    }
    if(key_number=="38"){
        console.log("up is pressed");
        up()
    }
    if(key_number=="40"){
        console.log("down is pressed");
        down()
    }
    if(key_number=="37"){
        console.log("left is pressed");
        left()
    }
    if(key_number=="39"){
        console.log("right is pressed");
        right()
    }
    if(key_number=="80" && e.shiftKey==true){
        block_Width=block_Width+10;
        block_Height=block_Height+10;
        document.getElementById("width").innerHTML=block_Width
        document.getElementById("height").innerHTML=block_Height
    }
    if(key_number=="77" && e.shiftKey==true){
        block_Height=block_Height-10;
        block_Width=block_Width-10;
        document.getElementById("height").innerHTML=block_Height
        document.getElementById("width").innerHTML=block_Width
    }
}
function right(){
   playerx=playerx+block_Width;
   console.log("playerx= "+playerx);
   canvas.remove(playerimg);
   update_player_img()
}
function down(){
    playery=playery+block_Height;
        console.log("playery= "+playery);
        canvas.remove(playerimg);
        update_player_img()
}
function up(){
    playery=playery-block_Height;
    console.log("playery= "+playery);
    canvas.remove(playerimg);
    update_player_img()
}
function left(){
    playerx=playerx-block_Height;
    console.log("playerx= "+playerx);
    canvas.remove(playerimg);
    update_player_img()
}
