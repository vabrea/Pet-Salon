//create an obj literal for the pet salon

const petSalon={
    name:"The Groom Room",
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
    pets:[]
}


// console.log(petSalon.pets);

function displaySalonInfo(){
    document.getElementById("salon-info").innerHTML=`
    Hello and welcome all pets! 
    <br>
    We are located at ${petSalon.address.number} ${petSalon.address.street} ${petSalon.address.city} ${petSalon.address.state} ${petSalon.address.zip}
    <br>
    Please use the Registration form for appointments and services.`
};

displaySalonInfo();