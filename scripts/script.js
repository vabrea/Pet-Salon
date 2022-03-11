const student = {
    firstName: "Von",
    lastName:"Abrea",
    age:99,
    email:"von@gmail.com",
    isActive:true,
    // fullName:function(){
    //     return this.firstName+" "+this.lastName;
    // }
};

// console.log(student.fullName());

// displayStudent();

//object constructor

function StudentC(firstName,lastName,age,email,isActive){
    this.userFN=firstName;
    this.userLN=lastName;
    this.userAge=age;
    this.userEmail=email;
    this.userStatus=isActive

}

let student1 = new StudentC("Vicky","Warren",99,"vicky@gmail.com",true);
let student2 = new StudentC("Von","Abrea",98,"von@gmail.com",true);

console.log(student1, student2);

function displayStudent(user){
    return `Name ${user.userFN} \n Email ${user.userEmail}`;
}

console.log(displayStudent(student1));