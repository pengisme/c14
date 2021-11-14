var Student={
name:"amy",
class:5,
role_number:21,
favourite_subject:"history",
marks:[50,45,70,100]
};








function setup() {
  
  createCanvas(400, 400);
  console.log(Student.name);
  console.log(Student.marks);
  console.log(Student.role_number);
  Student.role_number=100;
  console.log(Student.role_number);
}

function draw() {
  background(220);
}