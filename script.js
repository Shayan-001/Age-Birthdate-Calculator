function calculateAge() {
    let birthdateInput = document.getElementById('birthdate').value;
    
    // Check if birthdate is empty
    if (!birthdateInput) {
        document.getElementById('result').innerHTML = "Please enter your birthdate.";
        return;
    }

    let birthdate = new Date(birthdateInput);
    // Check if the entered date is valid
    if (isNaN(birthdate.getTime())) {
        document.getElementById('result').innerHTML = "Please enter a valid birthdate.";
        return;
    }

    let birthYear = birthdate.getFullYear();
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;

    // Check if birthday has occurred this year
    let birthdayThisYear = new Date(currentYear, birthdate.getMonth(), birthdate.getDate());
    if (birthdayThisYear > new Date()) {
        age--;
    }

    // Calculate next birthday
    let nextBirthday = new Date(currentYear, birthdate.getMonth(), birthdate.getDate());
    if (nextBirthday < new Date()) {
        nextBirthday.setFullYear(currentYear + 1);
    }

    let daysUntilBirthday = Math.ceil((nextBirthday - new Date()) / (1000 * 60 * 60 * 24));

    let result = "You are " + age + " years old.";
    result += "<br>Your next birthday is on " + nextBirthday.toDateString() + ".";
    result += "<br>There are " + daysUntilBirthday + " days until your next birthday.";

    document.getElementById('result').innerHTML = result;
}
