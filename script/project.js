const allBtn = document.getElementsByClassName('add-btn');
let count = 0;
for(const btn of allBtn){
    btn.addEventListener('click',function(e){
    count = count + 1;
    const seatName = e.target.innerText;
     
    const economy = e.target.parentNode.parentNode.parentNode.parentNode.childNodes[5].childNodes[1].childNodes[9].childNodes[1].childNodes[3].innerText;

    const price = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[9].childNodes[1].childNodes[1].childNodes[7].childNodes[3].childNodes[0].innerText;

    const selectedContainer = document.getElementById('selected-seat-container');
    
    const div = document.createElement('div');
    div.classList.add('flex');
    div.classList.add('justify-between');
    
    const p = document.createElement('p');
    p.innerText = seatName;
    const p2 = document.createElement('p2');
    p2.innerText = price;
    const p3 = document.createElement('p3');
    p3.innerText= economy;

    div.appendChild(p);
    div.appendChild(p3);
    div.appendChild(p2);
   
    selectedContainer.appendChild(div);

    e.target.setAttribute('disabled',false);
   
    const selectedSeat = getConvertedValue('seat-count');
    if(selectedSeat + 1 > 4){
        alert('you can select only 4 seat') 
        return;     
    }

    e.target.style.backgroundColor = 'green';

    const seatCount = getConvertedValue('seat-count');
    document.getElementById('seat-count').innerText = seatCount + 1;

    const leftSeat = getConvertedValue('left-seat');
    document.getElementById('left-seat').innerText = leftSeat -1 ;

    updatedTotalPrice(price);
    updateGrandTotal();
  })
}



function updateGrandTotal(status){
    const totalPrice = getConvertedValue('total-price');
  if(status == undefined){
      document.getElementById('grand-total').innerText = totalPrice;
}
  else{
     const couponCode = document.getElementById('new-15').innerText;

     if(couponCode == 'NEW15'){
        const discounted = totalPrice * 0.15;
        document.getElementById('grand-total').innerText = totalPrice - discounted;
     }
     else{
         alert('please enter valid coupon code');
     }
}

   
}

function updatedTotalPrice(price){
    const totalPrice = getConvertedValue('total-price');
    const convertedPrice = parseInt(price);
    const sum = totalPrice + convertedPrice;
    document.getElementById('total-price').innerText = sum;
}

function getConvertedValue(id){
    const price = document.getElementById(id).innerText;
    const convertedPrice = parseInt(price);
    return convertedPrice;
}

function setInnerText(id,value){
    document.getElementById(id).innerText = value;
}

function next(){
    
}