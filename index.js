// Login button functuonality
document.getElementById("loginButton").
addEventListener("click", function(e){
    e.preventDefault()
    const mobileNumber = +8801305290120
    const pinNumber = 1234

    const mobileNumbervalue = document.getElementById("mobileNumber").value

    const mobileNumberValueConverted = parseInt( mobileNumbervalue)

    const pinNumberValue = document.getElementById("pinNumber").value
    const pinNumberConverted = parseInt(pinNumberValue)

    console.log(mobileNumberValueConverted, pinNumberConverted)


    if(mobileNumberValueConverted === mobileNumber && pinNumberConverted ===pinNumber){
        window.location.href = "./home.html"
    }
    else{
        alert("Invalid Credentials")
    }
})