noseX=0;
noseY=0;
function preload()
{
clown_nose = loadImage ('https://i.postimg.cc/pLzjPpTW/R-removebg-preview.png');
}

function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    
}
function modelLoaded()
{
console.log('poseNet is initialised');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x-15;
        noseY=results[0].pose.nose.y-15;
        console.log("nosex="+ noseX);
        console.log("nosey="+ noseY);
    }
}

function draw()
{
image(video,0,0,300,300);
image(clown_nose,noseX,noseY,30,30);

}

function take_snapshot()
{
    save("MyFilter.png");
}