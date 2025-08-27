document.getElementById("addd-money-btn").
    addEventListener('click', function (e) {
        e.preventDefault()
        const bank =document.getElementById("bank").value
        const account = document.getElementById("account-number").value
        const amount = parseInt(document.getElementById("add-amount").value)
        const pin = document.getElementById("add-pin").value
        

        const availableBalance =  parseInt(document.getElementById("available-balace").innerText)
        

        const totalAvailableMoney = amount+availableBalance

        document.getElementById("available-balace").innerText = totalAvailableMoney
    })