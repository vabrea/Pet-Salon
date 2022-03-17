//create the constructor
let x=0;
function Pet(type,name,age,gender,breed,service,petOwner,petOwnerNumber){
    this.petType=type;
    this.petName=name;
    this.petAge=age;
    this.petGender=gender;
    this.petBreed=breed;
    this.petService=service;
    this.petOwner=petOwner,
    this.petOwnerNumber=petOwnerNumber
    this.id=x++;
}

//assignment 2
// get the info from the inputs
let inputPetType=document.getElementById("txtPetsType");
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
  if(aPet.petType.length==0){
    valid=false;
    console.log("Invalid Type");
  }
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
    let thePet= new Pet(inputPetType.value,inputPetName.value,inputPetAge.value,inputPetGender.value,inputPetBreed.value,inputPetService.value,inputPetOwner.value,inputPetOwnerNumber.value);
    console.log(thePet);
    // push the obj
    if(isValid(thePet)){
      petSalon.pets.push(thePet);
    //  displayPets();
     displayPetsTable(); 
    }
    
  //clearing the form
    document.getElementById("txtPetsType").value="";
    document.getElementById("txtPetsName").value="";
    document.getElementById("txtPetsAge").value="";
    document.getElementById("txtPetsGender").value="";
    document.getElementById("txtPetsBreed").value="";
    document.getElementById("txtPetsService").value="";
    document.getElementById("txtPetsOwner").value="";
    document.getElementById("txtPetsOwnerNumber").value="";
}

//end of assignment 2

//display cards

// function displayPets(){
//   //travel the array
//   let tmp="";
//   for(let i=0;i<petSalon.pets.length;i++){
//     //create the template
//       tmp+=`
//       <div class="pet-list">
//         <h4>${petSalon.pets[i].petName}</h4>
//         <p>Age: ${petSalon.pets[i].petAge}</p>
//         <p>Gender: ${petSalon.pets[i].petGender}</p>
//         <p>Breed: ${petSalon.pets[i].petBreed}</p>
//         <p>Service: ${petSalon.pets[i].petService}</p>
//         <p>Owner: ${petSalon.pets[i].petOwner}</p>
//         <p>Owner Phone: ${petSalon.pets[i].petOwnerNumber}</p>
//       </div>
//       `;
//   }
//     document.getElementById("pets").innerHTML=tmp;
  //display the top on the html

// }

// end of display cards

function displayPetsTable(){
  let row="";
  for(let i=0;i<petSalon.pets.length;i++){
    //create the template
      row+=`
      <tr id="${petSalon.pets[i].id}">
        <td>${petSalon.pets[i].petType} </td>
        <td>${petSalon.pets[i].petName} </td>
        <td>${petSalon.pets[i].petAge} </td>
        <td>${petSalon.pets[i].petGender} </td>
        <td>${petSalon.pets[i].petBreed} </td>
        <td>${petSalon.pets[i].petService} </td>
        <td>${petSalon.pets[i].petOwner} </td>
        <td>${petSalon.pets[i].petOwnerNumber} </td>
        <td> <button onclick="deletePet(${petSalon.pets[i].id});">Delete</button> </td>
      </tr>
      `;
  }
    document.getElementById("pets-table").innerHTML=row;
}

function deletePet(petId){
  console.log("Delete Pet", petId);
    for(let i=0;i<petSalon.pets.length;i++){
      let pet=petSalon.pets[i];
      if(pet.id==petId){
        deleteIndex=i;
        console.log("Pet Found", deleteIndex);
      }

    }
    petSalon.pets.splice(deleteIndex,1);
    document.getElementById(petId).remove();
  }

  function searchPet(){
    let searchString=document.getElementById("txtSearch").value;
    console.log(searchString);
    for(let i=0;i<petSalon.pets.length;i++){
      let pet=petSalon.pets[i];
      if(pet.petName.toLowerCase()==searchString.toLowerCase() ||
      pet.petService.toLowerCase()==searchString.toLowerCase()
      ){
        console.log("I found it");
        document.getElementById(pet.id).classList.add(`bg-color`);
      }
      else{document.getElementById(pet.id).classList.remove(`bg-color`);
    }
    }
  }


function init(){
  let scooby= new Pet("Dog","Scooby",50,"Male","Dane","Bath","Shaggy","111-111-1234");
let scrappy= new Pet("Dog","Scrappy",7,"Male","Dane","Haircut","Shaggy","111-111-1234");
let brian= new Pet("Dog","Brian",35,"Male","Labrador","Full Service","Peter","234-111-1234");
  petSalon.pets.push(scooby,scrappy,brian);
  // displayPets();
  displayPetsTable();
}

window.onload=init;