

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
	console.log(this.style.backgroundImage)
	img = this;
	style = img.currentStyle || window.getComputedStyle(img, false),
	bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");
	console.log(bi)
	document.getElementById('lightboxPhoto').getAttributeNode("src").value = bi;
	
	
	
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

