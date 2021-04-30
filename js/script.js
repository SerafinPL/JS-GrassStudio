

function showDropDown() {
	// body...

	this.children[1].style.display = 'block';
}

function hideDropDown() {
	// body...

	this.children[1].style.display = 'none';

}

function showLightBox(event) {
	// body...
	
	style = this.currentStyle || window.getComputedStyle(this, false);
	biurl = style.backgroundImage.slice(4, -1).replace(/"/g, "");
	
	document.getElementById('lightboxPhoto').getAttributeNode("src").value = biurl;


	document.getElementById('lightbox').style.display = 'block';
	
}

let elements = document.getElementsByClassName('haveDropdown');//.addEventListener('mouseover', showDropDown);

for (element of elements) {
	element.addEventListener('mouseover', showDropDown);
	element.addEventListener('mouseleave', hideDropDown);

}

let photos = document.getElementsByClassName('photo');//.addEventListener('mouseover', showDropDown);

for (element of photos) {
	element.addEventListener('click', showLightBox);
	

}

