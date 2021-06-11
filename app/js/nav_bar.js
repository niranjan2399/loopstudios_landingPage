const hamburger = document.querySelector(".hamburger");
const overlay = document.querySelector('.overlay');
const a_tags = document.querySelector('.a_tags');
const body = document.querySelector('body');

function displayNavOpt(e) {
	if(this.src.includes('hamburger')){
		this.src = 'images/icon-close.svg';
		overlay.style.visibility = 'visible';
		a_tags.style.visibility = 'visible';
		body.style.overflow = 'hidden';
	}
	else{
		this.src = 'images/icon-hamburger.svg';
		overlay.setAttribute('style','none');
		a_tags.setAttribute('style', 'none');
		body.setAttribute('style', 'none');
	}
}

hamburger.addEventListener("click", displayNavOpt);
