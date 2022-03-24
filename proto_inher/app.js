// function User(email, name){
//      this.email=email;
//      this.name=name;
// } 
// // User.id="55";
// // console.log(User);

// User.prototype.login=function(){
//     this.online = true; 
//     console.log(this.email, 'has logged in'); 
// } 
// // User.prototype.logout=function(){ 
// //     this.online = false; 
// //     console.log(this.email, 'has logged out'); 
// // } 
// let userOne = new User('online_true@test.com', 'aaa'); 
// // let userTwo = new User('offline_false@test.com', 'bbb'); 
// console.log(userOne);
// //  userTwo. login(); 
// /////  this.online = false; 
////////////////////////////////////////////////////
// class Person {                                    /////   super class
//     constructor(name) {
//         this.name = name;
//         // this.job = "unemployed";
//     }
//     newstu() {
//         console.log(`Hello ${this.name}.`);
//     } }

// class Student extends Person {      // inheriting form parent class    extends     /////   sub class
//     constructor(name) {
//         super(name);
//         this.job = 'Student';
//     }
//     newstu() {
//         console.log(`Hello  ${this.name}`);
//         console.log('job  ' + this.job);
//     } }
// let p = new Student('test');
// p.newstu();

/////////////////////////////////////////////////////

// function Person(firstName, lastName) {
//     this.FirstName = firstName;
//     this.LastName = lastName;            
// }

// Person.prototype.getFullName = function () {
//     return this.FirstName + " " + this.LastName;
// }


// function Student(firstName, lastName, schoolName, grade)
// {
//     Person.call(this, firstName, lastName);

//     this.SchoolName = schoolName;
//     this.Grade = grade || 0;
// }
// //Student.prototype = Person.prototype;
// Student.prototype = new Person();
// Student.prototype.constructor = Student;

// let std = new Student("James","Bond", "XYZ", 10);
            
// alert(std.getFullName()); // James Bond
// alert(std instanceof Student); // true
// alert(std instanceof Person); // true







// function parent(fname, last, , ) {
//     this.firstName = fname;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//   }
  
//   const myFather = new Person("John", "Doe", 50, "blue");
//   const myMother = new Person("Sally", "Rally", 48, "green");
  
//   document.getElementById("demo").innerHTML =
//   "My father is " + myFather.age + ". My mother is " + myMother.age; 