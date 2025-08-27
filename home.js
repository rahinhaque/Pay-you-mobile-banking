const validpin =1234
// add money btn 
document.getElementById("addd-money-btn").
    addEventListener('click', function (e) {
        e.preventDefault()
        const bank =document.getElementById("bank").value
        const accountNumber = document.getElementById("account-number").value
        const amount = parseInt(document.getElementById("add-amount").value)
        const pin = parseInt(document.getElementById("add-pin").value)
        

        const availableBalance =  parseInt(document.getElementById("available-balace").innerText)
        
        if(accountNumber.length < 11){
            alert("Please Provide valid account Number")
            return
        }
        if(pin !== validpin){
            alert("Please enter valid pin number")
            return
        }


        const totalAvailableMoney = amount+availableBalance

        document.getElementById("available-balace").innerText = totalAvailableMoney
    })


    // cashout money feature 

    document.getElementById("withdraw-btn").addEventListener('click' , function(e){
         e.preventDefault()
         const amount = parseInt(document.getElementById("withdraw-amount").value)
         const availableBalance = parseInt(document.getElementById("available-balace").innerText)

          const totalWithdrawn =availableBalance- amount

           document.getElementById("available-balace").innerText =  totalWithdrawn
           
         
    })



    // toggling feature?

 document.getElementById("add-button").addEventListener('click', function(){
    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("add-money-parent").style.display = "block"
})

document.getElementById("cash-out-button").addEventListener('click', function(){
    document.getElementById("add-money-parent").style.display = "none"
    document.getElementById("cash-out-parent").style.display = "block"
})



 