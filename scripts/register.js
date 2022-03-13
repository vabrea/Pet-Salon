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

function isValid(aPet){
  //return false when the pet is not valid
  let valid=true;
  //return true if the pet is valid
  if(aPet.petName.length==0){
    valid=false;
    console.log("Invalid Name");
  }
  if(aPet.petAge.length==0){
    valid=false;
    console.log("Invalid Owner");
  }
  if(aPet.petGender.length==0){
    valid=false;
    console.log("Invalid Gender");
  }
  if(aPet.petBreed.length==0){
    valid=false;
    console.log("Invalid Breed");
  }
  if(aPet.petService.length==0){
    valid=false;
    console.log("Invalid Service");
  }
  if(aPet.petOwner.length==0){
    valid=false;
    console.log("Invalid Owner");
  }
  if(aPet.petOwnerNumber.length==0){
    valid=false;
    console.log("Invalid Phone");
  }
  //return the error in the console

  //validations
  return valid;
}

//create some pets


function register(){
    // console.log(inputPetName.value,inputPetAge.value,inputPetGender.value,inputPetBreed.value,inputPetService.value,inputPetOwner.value,inputPetOwnerNumber.value),

    //create the object
    let thePet= new Pet(inputPetName.value,inputPetAge.value,inputPetGender.value,inputPetBreed.value,inputPetService.value,inputPetOwner.value,inputPetOwnerNumber.value);
    console.log(thePet);
    // push the obj
    if(isValid(thePet)){
      petSalon.pets.push(thePet);
     displayPets();
    }
    
  //clearing the form
    document.getElementById("txtPetsName").value="";
    document.getElementById("txtPetsAge").value="";
    document.getElementById("txtPetsGender").value="";
    document.getElementById("txtPetsBreed").value="";
    document.getElementById("txtPetsService").value="";
    document.getElementById("txtPetsOwner").value="";
    document.getElementById("txtPetsOwnerNumber").value="";
}

//end of assignment 2

function displayPets(){
  //travel the array
  let tmp="";
  for(let i=0;i<petSalon.pets.length;i++){
    //create the template
      tmp+=`
      <div class="pet-list">
        <h4>${petSalon.pets[i].petName}</h4>
        <p>Age: ${petSalon.pets[i].petAge}</p>
        <p>Gender: ${petSalon.pets[i].petGender}</p>
        <p>Breed: ${petSalon.pets[i].petBreed}</p>
        <p>Service: ${petSalon.pets[i].petService}</p>
        <p>Owner: ${petSalon.pets[i].petOwner}</p>
        <p>Owner Phone: ${petSalon.pets[i].petOwnerNumber}</p>
      </div>
      `;
  }
    document.getElementById("pets").innerHTML=tmp;
  //display the top on the html

}
function init(){
  let scooby= new Pet("Scooby",50,"Male","Dane","Bath","Shaggy","111-111-1234");
let scrappy= new Pet("Scrappy",7,"Male","Dane","Haircut","Shaggy","111-111-1234");
let brian= new Pet("Brian",35,"Male","Labrador","Full Service","Peter","234-111-1234");
  petSalon.pets.push(scooby,scrappy,brian);
  displayPets();
}

window.onload=init;