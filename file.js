


let menu = document.querySelector('.sidemenu-control'),
	btn2 = document.querySelector('.btn-2'),
	btn = document.querySelector('.btn-1'),
	close = document.querySelector('.close'),
	inputs = document.querySelectorAll('input');
menu.onclick = function(){
	document.querySelector('nav').classList.toggle('hidden');
	document.querySelector('.menu').classList.toggle('hidden');
	document.querySelector('.exit').classList.toggle('hidden');
	document.querySelector('.overlay-m').classList.toggle('hide-m');
}
function success(){
	document.querySelector('.overlay').classList.remove('hide');
	document.querySelector('.pop-up').classList.remove('hide');
}
btn.onclick = function(){
	document.querySelector('.overlay').classList.remove('hide');
	document.querySelector('.pop-up').classList.remove('hide');
}
close.onclick = function(){
	document.querySelector('.overlay').classList.add('hide');
	document.querySelector('.pop-up').classList.add('hide');
}
document.querySelector('.bg').onclick = function(){
	document.querySelector('.img .check').classList.toggle('none')
	document.querySelector('.img .un-checked').classList.toggle('none')
}
document.querySelector('.sm').onclick = function(){
	document.querySelector('.img.check').classList.toggle('none')
	document.querySelector('.img.un-checked').classList.toggle('none')
}
document.querySelector('.btn-mine').onclick = function(){
	document.querySelector('.overlay').classList.add('hide');
	document.querySelector('.hold').classList.add('hide');
}
inputs.forEach(a =>{
	a.addEventListener('click',function(){
		if(document.querySelector('.shadow') != null){
		document.querySelector('.shadow').classList.remove('shadow')
		}
		this.parentElement.parentElement.classList.add('shadow');
	})
})
document.addEventListener('click',(e) => {
	if(e.target.className == 'continue'){
	document.querySelector('.overlay').classList.remove('hide');
	document.querySelector('.pop-up').classList.add('hide');
	document.querySelector('.hold').classList.remove('hide');
		inputs.forEach(a =>{
		a.setAttribute('checked','un-checked');
		})
	if(document.querySelector('.shadow') != null){
		document.querySelector('.shadow').classList.remove('shadow')
	}
	}
})
	