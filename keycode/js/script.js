let $ = document
let locationKey = $.querySelector('#location')
let title = $.querySelector('title')

document.body.addEventListener('keydown', (e) => {
	e.preventDefault()
	starter.style.display = 'none'
	heading.style.display = 'flex'
	ascii.style.display = 'flex'
	infos.style.display = 'flex'
	key.textContent = e.key
	locationKey.textContent = e.location
	keyCode.textContent = e.keyCode
	title.textContent = "keyCode : " + e.keyCode
	which.textContent = e.which
	code.textContent = e.code
})