function calculateAge() {
    let birthdate = document.getElementById('birthdate').value;
    let birthYear = new Date(birthdate).getFullYear();
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    
    let birthdayThisYear = new Date(currentYear, new Date(birthdate).getMonth(), new Date(birthdate).getDate());
    let nextBirthday = new Date(currentYear + 1, new Date(birthdate).getMonth(), new Date(birthdate).getDate());
    let daysUntilBirthday = Math.ceil((nextBirthday - new Date()) / (1000 * 60 * 60 * 24));

    let result = "You are " + age + " years old.";
    result += "<br>Your next birthday is on " + birthdayThisYear.toDateString() + ".";
    result += "<br>There are " + daysUntilBirthday + " days until your next birthday.";

    document.getElementById('result').innerHTML = result;
}
