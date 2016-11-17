let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

canvas.height=window.innerHeight-20;
canvas.width =window.innerWidth-20;

const NUM_POINTS = 5;
const points = [];

for(let i = 0; i < NUM_POINTS; i++)
{

  points.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    width: Math.random() * 100,
    height: Math.random() * 100,
    xDelta: 0.9,
    yDelta: 1,
    color: 'orange' // the best color
  });
}

const draw = function()
{
  context.clearRect(0,0,canvas.width,canvas.height);

  for (let i=0;i<NUM_POINTS;i++)
  {
    point=points[i];

    context.fillStyle=point.color;
    context.fillRect(point.x,point.y,point.width,point.height);

    point.x+=point.xDelta;
    point.y+=point.yDelta;

    if(point.x<=0 ||point.x>=canvas.width-point.width)
      point.xDelta*=-1;

    if(point.y<=0 ||point.y>=canvas.height-point.height)
      point.yDelta*=-1;
  }

};
let animate = function() {
  draw();
  setTimeout(animate, 5);

};

animate();
