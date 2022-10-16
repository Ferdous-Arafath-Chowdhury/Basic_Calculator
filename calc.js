
let screen = document.querySelector('.screen');
let btns = document.querySelectorAll('.btn');
console.log(btns);
let clr = document.querySelector('#clear');
let eq = document.querySelector('#eq');
let tgl = document.querySelector('.switch');

btns.forEach(function(button)
{
    button.addEventListener('click',function(event)
    {
        let val = event.target.dataset.opt;
        console.log(val)
        screen.value += val;
        console.log(screen);
    })
})
eq.addEventListener('click',function(event)
{
    if(screen.value === "")
    {
        screen.value = alert("Please enter anything");
        screen.value = "";
    }

    else 
    {
        let ans = eval(screen.value);
        screen.value = ans;
    }
})
clr.addEventListener('click',function(event)
{
     screen.value = "";
})
