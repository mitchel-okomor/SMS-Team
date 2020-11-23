
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

//register a student
registerStudent: function(name, sex, age, fees, phone, address ){
    const id = studendID();
   const feesPaid = 0;
   const feesBalance = parseInt(fees) ;

},


//get  student
getAllStudents: function(){


return students
},


//get a single student
getStudent: function(id){


return student
},


//modify a student record
modifyStudent: function(id, newInfo){

return student;
},

//Delete Student
deleteStudent: function(id){
  
return student;
},

//employ a staff
employStaff: function ( name, sex, phone, address, salary ){
    const id = staffID();
    const salaryPaid = 0;
    const salaryBalance = salary;
    
    return staff;
    
    },
    

//get all staffs in the school
getAllStaffs: function(){
// for example

return staffs
},

//get a single staff

getStaff: function(id){

  return staff;
},

//modify a staff record
modifyStaff: function(id, newInfo){

  return staff;
},

deleteStaff: function(id){

return staff;
},

//check school account balance
getSchoolAccountBalance: function(){


return balance;
},


//get information about the school
getInfo: function(){
  
},

//pay schoolFees
paySchoolFees(id, amount){
 
 return student;
},

//get the total

totalFeesBalance(){

return balance;
},

//get all students owing fees
studentsWithsFeesBalance(){

  return students;
},


//pay salary
payStaff(id, amount){


return staff;
},

//get the total

totalSalaryBalance(){


return balance;
},


staffsWithSalaryBalance(){

    
return staffs;
}




}






