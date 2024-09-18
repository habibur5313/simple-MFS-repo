document.getElementById('login-button').addEventListener('click',function(event){
                  event.preventDefault()
                    
                  const phoneNumber = document.getElementById('phone-number').value;
                  const pinNumber = document.getElementById('pin-number').value;
                  
                  if(phoneNumber === '17' && pinNumber === '1234'){
                   window.location.href ='home.html'
                   
                  }
                  else{
                      alert('password & pin wrong');
                      
                  }
                  document.getElementById('phone-number').value = ''  
                  document.getElementById('pin-number').value ='' 
})