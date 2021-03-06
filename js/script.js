

function showDropDown() {
	this.children[1].style.display = 'block';
}

function onClickShowDropDown() {

	if (this.children[1].style.display == 'block'){
		this.children[1].style.display = 'none';
	}else{

		this.children[1].style.display = 'block';
	}
}

const hideDropDown= (event) => {
	event.target.children[1].style.display = 'none';
}

function showLightBox() {
	style = this.currentStyle || window.getComputedStyle(this, false);
	biurl = style.backgroundImage.slice(4, -1).replace(/"/g, "");
	
	document.getElementById('lightboxPhoto').getAttributeNode("src").value = biurl;
	document.getElementById('lightbox').style.display = 'flex';
}

let elements = document.getElementsByClassName('haveDropdown');

for (element of elements) {
	element.addEventListener('mouseover', showDropDown);
	element.addEventListener('mouseleave', hideDropDown);
	element.addEventListener('click', onClickShowDropDown);
}

let photos = document.getElementsByClassName('photo');

for (photo of photos) {
	photo.addEventListener('click', showLightBox);
}

document.getElementById('CancelButton').addEventListener('click', () => {
	document.getElementById('lightbox').style.display = 'none';
});


