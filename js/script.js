

function showDropDown() {
	// body...

	this.children[1].style.display = 'block';
}

function hideDropDown() {
	// body...

	this.children[1].style.display = 'none';
	
}

let elements = document.getElementsByClassName('haveDropdown');//.addEventListener('mouseover', showDropDown);

for (element of elements) {
	element.addEventListener('mouseover', showDropDown);
	element.addEventListener('mouseleave', hideDropDown);

}

