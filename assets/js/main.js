const $header = document.querySelector('#header')
const $menuIcon = document.querySelector('#menu-icon')

$menuIcon.addEventListener('click', () => {
	$header.classList.toggle('active')
})
