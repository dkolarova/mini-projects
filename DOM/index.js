function subscribed(){
  const button = document.querySelector(".youtube-btn")

  if(button.innerHTML === 'Subscribe'){
    button.innerHTML = 'Subscribed'
    button.classList.add('youtube-btn-subscribed')

  }else{
    button.innerHTML = 'Subscribe'
    button.classList.remove('youtube-btn-subscribed')
  }
}

function keyDown(event){
  if(event.key === 'Enter'){
    calculateShipping();
  }

}

function calculateShipping(){
  let valueElement = document.querySelector('#input-element')
  let total = document.querySelector('.display-value')
  let cost = Number(valueElement.value)

  if(cost <= 40){
   cost += 10 
  }

  total.innerHTML = `$${cost}`
}