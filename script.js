
//generate a unique id for students
const studendID = function randomID() {
    const letters = "0123456789ABCDEF";
    let id = "SD";
    for (let i = 0; i < 9; i++) {
      id += letters[Math.floor(Math.random() * 16)];
    }
    return id;
  }

  
//generate  a unique id for staffs
const staffID = function randomID() {
    const letters = "0123456789ABCDEF";
    let id = "SF";
    for (var i = 0; i < 9; i++) {
      id += letters[Math.floor(Math.random() * 16)];
    }
    return id;
  }

const school = {
    students : [],
     staffs : [],
     name : "Dev School",
     address : "Lagos, Nigeria",

//register a student  (Florence)
registerStudent: function(name, sex, age, fees, phone, address ){
    const id = studendID();
   const feesPaid = 0;
   const feesBalance = parseInt(fees) ;

},


//get  students (Lawrence)
getAllStudents: function(){
  const students = this.students;

return students
},


//get a single student (Wasiu)
getStudent: function(id){


return student
},


//modify a student record (Wasiu)
modifyStudent: function(id, newInfo){

return student;
},

//Delete Student (Florence)
deleteStudent: function(id){
  
return student;
},

//employ a staff (Mitchel)
employStaff: function ( name, sex, phone, address, salary ){
    const id = staffID();
    const salaryPaid = 0;
    const salaryBalance =  parseInt(salary) ;
    
    return staff;
    
    },
    

//get all staffs in the school (Lawrence)
getAllStaffs: function(){
  const staffs = this.staffs;

return staffs
},

//get a single staff (Daniel)

getStaff: function(id){

  return staff;
},

//modify a staff record (Daniel)
modifyStaff: function(id, newInfo){

  return staff;
},

//delete student records (Mitchel)
deleteStaff: function(id){

return staff;
},

//check school account balance (Wasiu)
getSchoolAccountBalance: function(){


return balance;
},


//get information about the school (Daniel)
getInfo: function(){
  
},


//pay schoolFees (Florence)
paySchoolFees(id, amount){
 
 return student;
},


//get total fees balance (Wasiu)
totalFeesBalance(){

return balance;
},

//get all students owing fees (Daniel)
studentsWithsFeesBalance(){

  return students;
},


//pay salary (Mitch)
payStaff(id, amount){


return staff;
},

//get the total (Florence)

totalSalaryBalance(){


return balance;
},


//get all staffs the school is owing salary (Daniel)
staffsWithSalaryBalance(){


return staffs;
}




}