//create the constructor
function Pet(name,age,gender){
    this.petName=name;
    this.petAge=age;
    this.petGender=gender;

}

// get the info from the inputs
let inputPetName=document.getElementById("txtPetsName");
let inputPetAge=document.getElementById("txtPetsAge");
let inputPetGender=document.getElementById("txtPetsGender");

//create some pets
let scooby= new Pet("Scooby",50,"Male");
petSalon.pets.push(scooby);

function register(){
    console.log(inputPetName.value,inputPetAge.value,inputPetGender.value);
    //create the object
    let thePet= new Pet(inputPetName.value,inputPetAge.value,inputPetGender.value);
    console.log(thePet);
    // push the obj
    // display the obj in the console
}

