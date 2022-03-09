const student = {
    firstName: "Von",
    lastName:"Abrea",
    age:99,
    email:"von@gmail.com",
    isActive:true,
    fullName:function(){
        return this.firstName+" "+this.lastName;
    }
};

console.log(student.fullName());

function displayStudent(){
    document.getElementById("student-info").innerHTML=(
        `<p>${student.fullName()}</p>
        `
    )
}

displayStudent();
