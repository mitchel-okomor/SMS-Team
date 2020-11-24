describe("School Methods Test", function() {
  var schoolObj;
  var StudenId;
  var StaffID
 

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
  studendID = student.id;
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



//staff test
describe("Employ A staff", function() {
  it("should register a staff and return the staff object", function() {
  const staff =  schoolObj.employStaff("Bobo", "male", "080358694", "45, cante, Lagos", "5000")
  studendID = staff.id;
  console.log(staff);  
  expect(typeof(staff)).toEqual("object");
  
  });

});


});