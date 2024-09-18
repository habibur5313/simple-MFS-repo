document.getElementById('add-money-button').addEventListener('click',function(event){
                    event.preventDefault();
                   const currentBalance = document.getElementById('current-balance').innerText;
                   const inputAddAmount = document.getElementById('amount-add-money').value;
                   const inputPin = document.getElementById('pin-add-money').value;
                   

                    if(inputPin === '1234'){
                       const balanceNumber = parseFloat(currentBalance)
                       const amountNumber = parseFloat(inputAddAmount)
                       
                       document.getElementById('current-balance').innerText = balanceNumber + amountNumber;
                     
                    }
                    else{
                                        alert('Wrong INfo! please try again')
                    }
                    document.getElementById('amount-add-money').value = ''
                    document.getElementById('pin-add-money').value = ''

})

document.getElementById('cash-out-button').addEventListener('click',function(event){
                    event.preventDefault();
                    const currentBalance = document.getElementById('current-balance').innerText;
                    const inputPin = document.getElementById('pin-cash-out').value;
                    const inputCashOut = document.getElementById('amount-cash-out').value;

                    if(inputPin === '1234'){
                                        const balanceNumber = parseFloat(currentBalance);
                                        const amountNumber = parseFloat(inputCashOut);

                    document.getElementById('current-balance').innerText = balanceNumber - amountNumber;
                    }
                    else{
                                        alert('Wrong INfo! please try again')
                    }
                    document.getElementById('amount-cash-out').value = ''
                       document.getElementById('pin-cash-out').value = ''
})


document.getElementById('Withdraw-btn').addEventListener('click',function(){
                    const withdraw = document.getElementById('cash-out-form');
                    withdraw.classList.remove('hidden');

                    const deposit = document.getElementById('add-money-form');
                    deposit.classList.add('hidden')
})
document.getElementById('deposite-btn').addEventListener('click',function(){
                    const deposit = document.getElementById('add-money-form');
                    deposit.classList.remove('hidden')

                    const withdraw = document.getElementById('cash-out-form');
                    withdraw.classList.add('hidden');

})

