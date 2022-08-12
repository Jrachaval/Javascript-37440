
var userName = document.getElementById('inputName')
var surName = document.getElementById('inputSurname')
var country = document.getElementById('inputCountry')
var city = document.getElementById('inputCity')
var zip = document.getElementById('inputZip')
var phone = document.getElementById('inputPhone')
var address = document.getElementById('inputAddress')


var formUser = [userName, surName, country, city, zip, phone, address]



formUser.forEach((stored) => {

    if (localStorage.getItem(stored.id) != null) {

        stored.value = localStorage.getItem(stored.id)
    }
    else { }
})

const sendContact = document.getElementById('sendForm')
sendContact.addEventListener("click", sendForm);

function sendForm() {

    formUser.forEach((stored) => {

        console.log(stored.id)
        localStorage.setItem(stored.id, stored.value);

    })

}