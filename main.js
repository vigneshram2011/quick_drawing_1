random_number = Math.floor((Math.random() * array_1.length) + 1);
console.log(array_1[random_number]);
sketch = array_1[random_number];

document.getElementById("sketch_to_draw").innerHTML = "Sketch to be Drawn : " + sketch;

timer_counter = 0;
timer_check = "";
drawn_sketch = "";
answer_holder = "";
score = 0;

function preload() {}

function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
}