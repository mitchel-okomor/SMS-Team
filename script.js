
//generate a unique id for students
const studentID = function randomID() {
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

return;
},


//get All student (Lawrence)
getAllStudents : function(){
},
//get  students (Lawrence)
getAllStudents: function(){
  const students = this.students;

return students;

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
    const staff = {id, name, sex, phone, address, salary, salaryPaid, salaryBalance};
    this.staffs.push(staff)
    return this.staffs[this.staffs.length -1];
    },
    

//get all staffs in the school (Lawrence)
getAllStaffs : function(){
// for example

},
 //Lawrence
//get all staffs in the school (Lawrence)
getAllStaffs: function(){
  const staffs = this.staffs;
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
  const index = this.staffs.findIndex(item => item.id === id);
  console.log(index);
 const staff = this.staffs.splice(index,1);
return staff;
},

//check school account balance (Wasiu)
getSchoolAccountBalance : function(){


return balance;
},


//get information about the school (Lawrence)
getInfo : function(){
  
},


//pay schoolFees (Florence)
paySchoolFees : function(id, amount){
 
 return student;
},


//get total fees balance (Lawrence)
totalFeesBalance : function(){

return balance;
},

//get all students owing fees (Daniel)
studentsWithsFeesBalance : function(){

  return students;
},


//pay salary (Mitchel)
payStaff : function(id, amount){
  const staff = this.staffs.map((item) =>{
    if(id === item.id){
      item.salaryPaid = amount;
      item.salaryBalance = item.salary - amount;
      return item;
    }
  })

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