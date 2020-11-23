
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

const school =  {
    students : [],
     staffs : [],
     name : "Dev School",
    address : "Lagos, Nigeria",

//register a student  (Florence)
registerStudent : function(name, sex, age, fees, phone, address ){

return 
},


//get  student (Morenikeji)
getAllStudents : function(){

return ;
},


//get a single student (Wasiu)
getStudent : function(id){


return student
},


//modify a student record (Wasiu)
modifyStudent : function(id, newInfo){

return student;
},

//Delete Student (Florence)
deleteStudent : function(id){
  
return student;
},

//employ a staff (Mitchel)
employStaff : function ( name, sex, phone, address, salary ){
    const id = staffID();
    const salaryPaid = 0;
    const salaryBalance =  parseInt(salary) ;
    
    return staff;
    
    },
    

//get all staffs in the school (Morenikeji)
getAllStaffs : function(){
// for example

return staffs
},

//get a single staff (Daniel)

getStaff : function(id){

  return staff;
},

//modify a staff record (Daniel)
modifyStaff : function(id, newInfo){

  return staff;
},

//delete student records (Mitchel)
deleteStaff : function(id){

return staff;
},

//check school account balance (Wasiu)
getSchoolAccountBalance : function(){


return balance;
},


//get information about the school (Mornikeji)
getInfo : function(){
  
},


//pay schoolFees (Florence)
paySchoolFees : function(id, amount){
 
 return student;
},


//get total fees balance (Morenikeji)
totalFeesBalance : function(){

return balance;
},

//get all students owing fees (Daniel)
studentsWithsFeesBalance : function(){

  return students;
},


//pay salary (Mitchel)
payStaff : function(id, amount){


return staff;
},

//get the total (Florence)

totalSalaryBalance : function(){


return balance;
},


//get all staffs the school is owing salary (Daniel)
staffsWithSalaryBalance : function(){


return staffs;
}




}