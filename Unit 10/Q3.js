marks = 67;

if (marks >= 80 && marks <= 100) {
  document.write("Distinction");
} else if (marks >= 60 && marks < 80) {
  document.write("First Division");
} else if (marks >= 50 && marks < 60) {
  document.write("Second Division");
} else if (marks >= 40 && marks < 50) {
  document.write("Third Division");
} else if (marks >=0 && marks < 40){
  document.write("Fail");
} else {
    document.write("Marks not in range")
}
