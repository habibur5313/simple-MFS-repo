document.getElementById('add-money-button').addEventListener('click',function(event){
                    event.preventDefault();
                   const currentBalance = document.getElementById('current-balance').innerText;
                   const inputAddAmount = document.getElementById('amount-add-money').value;
                   const inputPin = document.getElementById('pin-add-money').value;
                   

                    if(inputPin === '1234'){
                       const balanceNumber = parseFloat(currentBalance)
                       const amountNumber = parseFloat(inputAddAmount)
                       
                       document.getElementById('current-balance').innerText = balanceNumber + amountNumber;
                     
                       document.getElementById('amount-add-money').value = ''
                       document.getElementById('pin-add-money').value = ''
                    }
                    else{
                                        alert('Wrong INfo! please try again')
                    }

})