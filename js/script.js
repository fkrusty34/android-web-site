let togglemenuButton=document.getElementById('togglemenu');
let topmenu=document.querySelector('.topmenu');
togglemenuButton.addEventListener('click', function(evt){
	topmenu.classList.toggle('vis');
})