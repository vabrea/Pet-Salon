//create an obj literal for the pet salon

const petSalon={
    name:"Fancy Pets",
    address:{
        street:"First Street",
        number:"2500",
        zip:"93004",
        city:"Ventura",
        state:"CA",
        fullAddress:function(){
            return this.number+" "+this.street+ " "+this.city+","+this.state + " "+ this.zip;
        }
    },
    workingHours:{
        open:"9:00am",
        close:"5:00pm"
    },
    pets:[
        {//first pet
            name:"scooby",
            age:50,
            gender:"Male",
            breed:"Dane",
            service:"grooming",
            ownderName:"Shaggy",
            contactPhone:"111-111-111"

        },
        {
            name:"scooby",
            age:50,
            gender:"Male",
            breed:"Dane",
            service:"grooming",
            ownderName:"Shaggy",
            contactPhone:"111-111-111"
        },
    ]
}
console.log(petSalon.address.zip);
console.log(petSalon.pets.length);
console.log(petSalon.pets[0].service);
//create pets array

//display the pet salon info in the fotter section of HTML

function displaySalonInfo(){
    document.getElementById("footer-info").innerHTML=`Welcome to ${petSalon.name} located in ${petSalon.address.city}`;
};

displaySalonInfo();
function displayPetNames(){
    
}