describe("School Methods Test", function() {
  var schoolObj;
  var id;
 

  beforeEach(function() {
 schoolObj = school;
console.log(school);

  });

  describe("Register a student", function() {
  it("should register a student a and return student object", function() {
  const student =  schoolObj.registerStudent("john", "male", "12", "300", "08038585837", "Iju Lagos")
  console.log(student);  
  expect(typeof(student)).toEqual("object");
  
  });

});


describe("Get all students", function() {
  it("Get all student", function() {
  const student =  schoolObj.getAllStudents();
  id = student.id;
  console.log(student);  
  expect(typeof(student)).toEqual("object");
  
  });

});

describe("Get a students with its id", function() {
  it("Get a student", function() {
  const student =  schoolObj.getStudent()
  console.log(student);  
  expect(typeof(student)).toEqual("object");
  
  });

});
});