//Create variable grade that is connected to the grade calculation form
var grade = document.getElementById("submitButton");

//when the submit button on the form is clicked then this function will be called. 
//The function adds up the percentages given and applies the weight of each percentage, 
//then determines what letter grade to award and displays the info in an alert box.
grade.addEventListener("click", function () {
    var score = ((parseInt(document.getElementById("assignments").value) * .5) +
        (parseInt(document.getElementById("groupProject").value) * .1) +
        (parseInt(document.getElementById("quizzes").value) * .1) +
        (parseInt(document.getElementById("exams").value) * .2) +
        (parseInt(document.getElementById("intex").value) * .1));

    if (score >= 94) {
        alert(score + " which is an A");
    } else if (score >= 90) {
        alert(score + " which is an A-");
    } else if (score >= 87) {
        alert(score + " which is a B+");
    } else if (score >= 84) {
        alert(score + " which is a B");
    } else if (score >= 80) {
        alert(score + " which is a B-");
    } else if (score >= 77) {
        alert(score + " which is a C+");
    } else if (score >= 74) {
        alert(score + " which is a C");
    } else if (score >= 70) {
        alert(score + " which is a C-");
    } else if (score >= 67) {
        alert(score + " which is a D+");
    } else if (score >= 64) {
        alert(score + " which is a D");
    } else if (score >= 60) {
        alert(score + " which is a D-");
    } else if (score < 60) {
        alert(score + " which is an E");
    }
});