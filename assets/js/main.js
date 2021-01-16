/* toggle menu */
const $header = document.querySelector('#header')
const $menuIcon = document.querySelector('#menu-icon')

$menuIcon.addEventListener('click', () => {
	$header.classList.toggle('active')
})

/* ocultar menu al dar clic a los item del menu */
const $enlaces = document.querySelectorAll('.enlace-menu')

const hideMenu = () => {
	$header.classList.remove('active')
}

$enlaces.forEach((enlace) => {
	enlace.addEventListener('click', hideMenu)
})

/* toggle portfolio */
const $textFilters = document.querySelectorAll('.filtro__container--item')

const toggleFilter = (textFilter) => {
	document
		.querySelector('.filtro__container--item.active')
		.classList.remove('active')
	textFilter.classList.add('active')
}

$textFilters.forEach((textFilter) => {
	textFilter.addEventListener('click', () => {
		toggleFilter(textFilter)
	})
})
