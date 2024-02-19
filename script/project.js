const allBtn = document.getElementsByClassName('add-btn');

let count = 0;


for(const btn of allBtn){
    btn.addEventListener('click',function(e){
    count = count + 1;

     const seatName = e.target.parentNode.childNodes[1].innerText;
     

    const price = e.target.parentNode.parentNode.parentNode.parentNode.childNodes[5].childNodes[1].childNodes[9].childNodes[1].childNodes[5].innerText;
     
    const economy = e.target.parentNode.parentNode.parentNode.parentNode.childNodes[5].childNodes[1].childNodes[9].childNodes[1].childNodes[3].innerText;

    const selectedContainer = document.getElementById('selected-seat-container');
    
    const div = document.createElement('div');
    
    const p = document.createElement('p');
    p.innerText = seatName;
    const p2 = document.createElement('p2');
    p2.innerText = price;
    const p3 = document.createElement('p3');
    p3.innerText= economy;

    div.appendChild(p);
    div.appendChild(p2);
    div.appendChild(p3);

    selectedContainer.appendChild(div);
    

     setInnerText('seat-count',count);
  })
}

function setInnerText(id,value){
    document.getElementById(id).innerText = value;
}