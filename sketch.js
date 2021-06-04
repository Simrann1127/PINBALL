const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies
const Constraint= Matter.Constraint
var engine, world
var ground


function setup(){
    createCanvas(1500,800)
    engine= Engine.create()
    world= engine.world
    ground= new Ground(300,300,1200,20)
}
function draw(){
    background(180)
    Engine.update(engine)
    ground.display()
}
