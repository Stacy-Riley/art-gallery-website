//Function to check if the element is in the viewport:
function isInViewport(element) {
	
/*Returns a DOMRect object representing the size 
of the element and its position relative to the viewport.
*/
const rect = element.getBoundingClientRect(); 
	
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}

//Function to handle the scroll event in body and footer sections:
function handleScroll() {
	const textEl = document.querySelectorAll('.slow-reveal');
	textEl.forEach(text => {
		if(isInViewport(text)){
			//Makes the text visible once it's in the viewport
			text.style.opacity = '1';
		}
	})
}

//Function to fade in the header section:
function fadeInHeader() {
	const header = document.querySelectorAll('.slow-load');
	header.forEach(element => {
		element.style.opacity = '1';
	})
	
}

//Scroll event listener:
window.addEventListener('scroll', handleScroll);

//Slow load header event listener:
window.addEventListener('DOMContentLoaded', function(){
	setTimeout(fadeInHeader, 500); /*Delay the function execution: 1000ms = 1 second)*/
})

//Leaflet Map:
var map = L.map('map').setView([41.4813725354493, -71.31037103172244], 15.5); //15.5 is the amt of zoom into the map

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([41.48163065277464, -71.31038736300455]).addTo(map);
