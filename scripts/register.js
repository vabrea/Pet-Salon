//create the constructor
function Pet(name,age,gender,breed,service,petOwner,petOwnerNumber){
    this.petName=name;
    this.petAge=age;
    this.petGender=gender;
    this.petBreed=breed;
    this.petService=service;
    this.petOwner=petOwner,
    this.petOwnerNumber=petOwnerNumber
}

//assignment 2
// get the info from the inputs
let inputPetName=document.getElementById("txtPetsName");
let inputPetAge=document.getElementById("txtPetsAge");
let inputPetGender=document.getElementById("txtPetsGender");
let inputPetBreed=document.getElementById("txtPetsBreed");
let inputPetService=document.getElementById("txtPetsService");
let inputPetOwner=document.getElementById("txtPetsOwner");
let inputPetOwnerNumber=document.getElementById("txtPetsOwnerNumber");

//create some pets
let scooby= new Pet("Scooby",50,"Male","Dane","Bath","Shaggy","111-111-12345");
let scrappy= new Pet("Scarppy",7,"Male","Dane","Haircut","Shaggy","111-111-12345");
let brian= new Pet("Brian",35,"Male","Labrador","Full Service","Brian","234-111-12345");
petSalon.pets.push(scooby,scrappy,brian);

function register(){
    // console.log(inputPetName.value,inputPetAge.value,inputPetGender.value,inputPetBreed.value,inputPetService.value,inputPetOwner.value,inputPetOwnerNumber.value),

    //create the object
    let thePet= new Pet(inputPetName.value,inputPetAge.value,inputPetGender.value,inputPetBreed.value,inputPetService.value,inputPetOwner.value,inputPetOwnerNumber.value);
    console.log(thePet);
    // push the obj
    petSalon.pets.push(thePet);
  //clearing the form
    document.getElementById("txtPetsName").value="";
    document.getElementById("txtPetsAge").value="";
    document.getElementById("txtPetsGender").value="";
    document.getElementById("txtPetsBreed").value="";
    document.getElementById("txtPetsService").value="";
    document.getElementById("txtPetsOwner").value="";
    document.getElementById("txtPetsOwnerNumber").value="";
    alert("Your Pet has been registered!")
}

//end of assignment 2

