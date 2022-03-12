// previous assignments and notes

//constructor notes

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

// console.log(petSalon.address.zip);
// console.log(petSalon.pets.length);
// console.log(petSalon.pets[0].service);
//create pets array

//display the pet salon info in the fotter section of HTML

function displaySalonInfo(){
    document.getElementById("footer-info").innerHTML=`Welcome to ${petSalon.name} located in ${petSalon.address.city}`;
};

// displaySalonInfo();


//assignment 1 FSDI 104
alert(`There are ${petSalon.pets.length} registered pets at the Salon`);

let x=0;
let petNames = `${petSalon.pets[x].name}`;
console.log(petNames); 

function displayPetNames(){
   
    for (x=0;x<=5;x++){
    return petNames;
    }
}

displayPetNames();

//end of assignment 1