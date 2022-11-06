const display = document.getElementById('display');
const money = document.getElementById('money');
const drinks = Array.from(document.getElementsByClassName('drinks'));
const change = document.getElementById('change');
const add = document.getElementById('add');
const remove = document.getElementById('remove');
const part = document.getElementsByClassName('part');

let count = 2;

add.addEventListener('click', () => {
    if(count === 4) {
        return;
    } else {
        count = count + 1;
    }
    part[count].style.backgroundColor = 'red;'
    console.log(count);
})

remove.addEventListener('click', () => { 
    if(count === -1) {
        part[0].style.backgroundColor = '#fff';
        return;
    }
    part[count].style.backgroundColor = '#fff';
    count = count - 1;
    console.log(count);
})


drinks.map(el => {
    el.addEventListener('click', (event) => {
        if(money.value >= Number(event.target.closest('div').lastChild.innerText)) {
            if(count > 0) {
                display.innerText = `Your order is ${event.target.closest('div').firstChild.innerText} coffee with ${count} sugar`;
            } else {
                display.innerText = `Your order is ${event.target.closest('div').firstChild.innerText} coffee`
            }
            let yourChange = money.value - event.target.closest('div').lastChild.innerText;
            setTimeout(() => {
                display.innerText = 'Please wait your coffee is preparing.';
            },3000);
            setTimeout(() => {
                display.innerText = 'Enjoy your coffee :)';
            }, 20000);
            if(yourChange > 0) {
                change.innerText = `Your change is ${yourChange}`;
            }
        } else {
            display.innerText = `You cant order ${event.target.closest('div').firstChild.innerText}, 
            your order costs ${event.target.closest('div').lastChild.innerText}`
            change.innerText = '';
        }
    })
})