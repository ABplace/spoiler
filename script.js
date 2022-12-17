/*	document.querySelectorAll('.accordion-item__trigger').forEach((item) =>
	item.addEventListener('click', () => {
		item.parentNode.classList.toggle('accordion-item--active');
	})
)*/
/*let elem = document.querySelector('.accordion-item__content');

let style = getComputedStyle(elem).position;
console.log(style);
if (style == "relative") {
	function hello() {
		alert("hello");
		return hello;
	}
	hello();
}*/
// Создаем медиа условие, проверяющее viewports на ширину не менее 768 пикселей.
/*let mediaQuery = window.matchMedia('(max-width: 400px)')

function handleTabletChange(e) {
  if (e.matches) {
	    console.log('Media Query Matched!')
	    document.querySelectorAll('.accordion-item__trigger').forEach((item) =>
		item.addEventListener('click', () => {
			item.parentNode.classList.toggle('accordion-item--active');
		})
	)
  }
  else {
  	return mediaQuery;
  }
}

mediaQuery.addListener(handleTabletChange)
handleTabletChange(mediaQuery)*/
/*let content = document.getElementById("content");
let show = content.getAttribute("data-l");
	    let content = document.getElementById("content");
			let show = content.getAttribute("data-l");
			content.setAttribute("data-l", "mobile");
		content.setAttribute("data-l", "pc");

content.setAttribute("data-l", "hi");*/


/*function spoiler() {
		  document.querySelectorAll('.accordion-item__trigger').forEach((item) =>
			item.addEventListener('click', () => {
			item.parentNode.classList.toggle('accordion-item--active');
		})
	)
}
let mediaQuery = window.matchMedia('(max-width: 400px)')
function handleTabletChange(e) {
  if (e.matches) {
	    console.log('Media Query Matched!')
	    spoiler();
  }
  else {
  	return spoiler();
}
mediaQuery.addListener(handleTabletChange)
handleTabletChange(mediaQuery)*/
/*function clickHandler() {
  alert("media worked");
}

function myFunction(x) {
  if (x.matches) { // If media query matches
    document.getElementById("trig").addEventListener("click", clickHandler)
  } else {
    document.getElementById("trig").removeEventListener("click", clickHandler)
  }
}

var x = window.matchMedia("(max-width: 400px)")
myFunction(x) // Call listener function at run time
mediaQuery.addListener(handleTabletChange)
handleTabletChange(mediaQuery)*/
/*  var divToggleVis = document.getElementById('spoiler_text');
  var button = document.getElementById('spoiler_button');
 
  button.onclick = function() {
      if (divToggleVis.style.display === 'none') {
          divToggleVis.style.display = 'block';
      } else {
          divToggleVis.style.display = 'none';
      }
 
  };*/
var mediaQuery = window.matchMedia('(max-width: 400px)')
var title = document.getElementsByClassName("title");
var spoiler = document.getElementsByClassName("content");
function g() {
	if (this.nextElementSibling.style.maxHeight) {
		this.nextElementSibling.style.maxHeight = null;
	}
	else {
		this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 'px';
	}
}
function handleTabletChange(e) {
  if (e.matches) {
  	Array.from(title).forEach((el) => {
    el.addEventListener('click', g);
		});
  }
  else {
  	Array.from(title).forEach((el) => {
    el.removeEventListener('click', g);
    el.nextElementSibling.style.maxHeight = el.nextElementSibling.scrollHeight + 'px';
		});
  }
}

mediaQuery.addListener(handleTabletChange)
handleTabletChange(mediaQuery)