//In this assignment you should calculate the area of two triangles
//and then compare the values of the result to see which one hasthe biggest area. 

//Code one example for each test data that youare provided. 
//That means one case (code example) 
//for the firsttest data, 
//one for the second and so on. 

//Use template literals too utput the result to the console.

//You can calculate the area of a triangle using the formula:area = (base * height) / 2

//OBS! In this case you actually have to use the parentheseswhen doing the area calculation.
//Answer the question why JavaScript needs the parentheses in thiscase? 

//You can put your answer as plain text when you hand in theassignment.


//TEST DATA - FIRST ASSIGNMENT

// Clarification: 
// First and foremost i determined variables using "let" to calculate the value of the triangles.
// I decided to use "tri" as a base for triangle and then add on the letterNumeral (ex One, Two.....)
// Then i subdivided the "height" and "width" (base) into smaller variables to then test the result against one another.
// I stayed on the path of "tri" and then added "H" or "W" to declare if it was the height or the width (base)
// Afterwards i added the letterNumeral again at the end, this to give the variables a conection to eachother,
// also so one could easily find the parent of the child.
// This resulted in a variable structure of ((tri)H/W(letterNumeral)) for the height and width. 
// Furthermore, ((tri)(letterNUmeral)) for the compiled 

// Awnser for the operation precedance:
// I don't understand if I'm doing anything wrong, because when I tried to remove one and both of the parentheses,
// I still get the same result... 
// I know that the operator precedance takes multiplication and division first,
// but i think that this has to do with the read right to left after the left to right...

//Case1
//triangleOne: base = 10cm, height = 13cm
//triangleTwo: base = 16,5cm, height = 20,3cm

// let triHOne = 13
// let triWOne = 10
// let triOne = ((triHOne) * (triWOne) / 2) // triOne = 65cm2
// Awnser: area of triangleOne = 65cm2

// let triHTwo = 20.3
// let triWTwo = 16.5
// let triTwo = ((triHTwo) * (triWTwo) / 2) // triTwo = 167.475cm2
// Awnser: area of triangleTwo = 167.475cm2
//(base * height) / 2

//Case2
//triangleThree: base = 16,5cm, height = 20,3cm
//triangleFour: base = 20,3cm, height = 16,5cm
// let triHThree = 20.3
// let triWThree = 16.5
// let triThree = ((triHThree) * (triWThree) / 2) // triThree = 167,475cm2
// Awnser: area of triangleThree = 167,475cm2

// let triHFour = 16.5
// let triWFour = 20.3
// let triFour = ((triHFour) * (triWFour) / 2) // triFour = 167,475cm2 
// Awnser: area of triangleFour = 167,475cm2
//(base * height) / 2

//Case3
//triangleFive: base = 7,8cm, height = 5,6cm
//triangleSix: base = 9,3cm, height = 12,4cm
// let triHFive = 5.6
// let triWFive = 7.8
// let triFive = ((triHFive) * (triWFive) / 2) // triFive = 21,84cm2
// Awnser: area of triangleFive = 21,84cm2

// let triHSix = 12.4
// let triWSix = 9.3
// let triSix = ((triHSix) * (triWSix) / 2) // triSix = 57,660000000000004cm2
// Awnser: area of triangleSix = 57,660000000000004cm2
//(base * height) / 2

// console.log((triHSix) * (triWSix) / 2)
// console.log(triSix)

//(tri(letterNumeral)) tri = triangle, letterNumeral = witch one of the triangles. 
// This is the area of X triangle
// (tri-H-) = the heigt of X triangle then + the letterNumeral
// (tri-W-) = the width (base) of X triangle then + the letterNumeral
// 


//Print the total area for each triangle together 
//with the result ofwhich one that has the biggest are. 

//Example:`
//Triangle One has an area of xx cm2 and Triangle Two has an areaof xx cm2. 
//The triangle with the biggest area is Triangle xx.`

//Code an example for each case of test data.
//Hand in a link to your GitHub repo for your assignment and don't forget to answer the question above.
