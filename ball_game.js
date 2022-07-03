let ball_x;
let ball_y,ball_radius;
let paddle_y,paddle_x,paddle_height,paddle_width,paddle_dx
let live=3,score=0;
let grid=[];
let m = Math.floor((Math.random() * 2) + 1);
let k = Math.floor((Math.random() * 3) + 1);
function setup() {
  createCanvas(400, 400);
  //stroke("red")
  ball_x=width/2;
  ball_y=height/2;
  ball_dx=1;
  ball_dy=2;
  ball_radius=30
  paddle_x=width/2;
  paddle_y=height-20;
  paddle_height=15;
  paddle_width=80;
  paddle_dx=3;
  brick_width=80;
  brick_height=15;
  for(var i=0;i<=m;i++)
    {
      let row=[]
      for( var j=0;j<=k;j++)
        {
          let brick={}
          brick["x"]=(i*100)+15
          brick["y"]=(j*25)+15
          brick["w"]=80
          brick["h"]=15
         // rect(brick.x,brick.y,brick.w,brick.h)
          row.push(brick);
        }
      grid.push(row)
    }
}

function draw()
{
 
   background("black")
  fill("white")
   for(var i=0;i<=m;i++)
    {
      for(var j=0;j<=k;j++)
        {
          rect(grid[i][j].x,grid[i][j].y,grid[i][j].w,grid[i][j].h)
        }
    }
  ball_x+=ball_dx;
  ball_y+=ball_dy;
  if(keyIsDown(RIGHT_ARROW))
    {
      paddle_x +=paddle_dx;
    }
  if(keyIsDown(LEFT_ARROW))
    {
      paddle_x -=paddle_dx;
    }
  if(paddle_x<0 || paddle_x>(width-(paddle_width)))
    paddle_dx=-paddle_dx
  
  fill("white")
  circle(ball_x,ball_y,30)
  rect(paddle_x,paddle_y,paddle_width,paddle_height)
  if(ball_x+(ball_radius/2)>width || ball_x-(ball_radius/2)<0)
    {
      ball_dx=-ball_dx;
    }
  if(ball_y+(ball_radius/2)+(20)>height && ball_x>paddle_x &&        (paddle_x+paddle_width)>ball_x )
     {
       ball_dy=-ball_dy;
     }
  if(ball_y+(ball_radius/2)>height )
  {
    live--; 
    ball_x=width/2;
    ball_y=height/2;
  }
  if(live==0 || score==((m+1)*(k+1)))
  {
    ball_dx=0;
    ball_dy=0;
    textSize(40)
    text("Game over",width/2-100,height/2-20)
    text("score is "+score,width/2-100,height/2+35)
    
  }
  if(ball_y-(ball_radius/2)<0 || ball_y-(ball_radius)>height)
  {
    ball_dy=-ball_dy;
  }
  for(var i=0;i<=m;i++)
    {
      for(j=0;j<=k;j++)
        {
          if(ball_y-(ball_radius)<(j*25)+15 && ball_x>(i*100)+15 && ball_x<(i*100)+15+grid[i][j].w)
            {
              grid[i][j].w=0;
              grid[i][j].h=0;
              ball_dy=-ball_dy;
              score++
            }
        }
    }
  fill("red")
  textSize(20)
  text("score:"+score,width-100,20)
  text("lives:"+ live,width-100,40)
}
