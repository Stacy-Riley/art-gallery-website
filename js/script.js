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