
const similares = document.querySelector('.similares-photos')
const recomendados = document.querySelector('.recomendados .similares-photos')
const discover = document.querySelector('.discover .similares-photos')

const arrowRigth = document.querySelector('.arrow-rigth')
const arrowLeft = document.querySelector('.arrow-left')

const arrowRigthR = document.querySelector('.arrow-rigthR')
const arrowLeftR = document.querySelector('.arrow-leftR')

const arrowRigthD = document.querySelector('.arrow-rigthD')
const arrowLeftD = document.querySelector('.arrow-leftD')

function getDados() {
	//SIMILARES
	const urlSimilar = `https://api.themoviedb.org/3/movie/3/similar?api_key=e71e111f4b1a8c978a7904443907ed8b&language=pt-br&page=1`

	fetch(urlSimilar)
		.then(response => response.json())
		.then(response => {
			const arreySimilar = []

			response.results.forEach(ele => {
				arreySimilar.push(ele)
			})
			slSimilares(arreySimilar)
		})

	//RECOMENDADOS
	const urlRecomendado = `https://api.themoviedb.org/3/tv/34/recommendations?api_key=e71e111f4b1a8c978a7904443907ed8b&language=pt-br&page=1`

	fetch(urlRecomendado)
		.then(response => response.json())
		.then(response => {
			const arreyRecom = []

			response.results.forEach(elem => {
				arreyRecom.push(elem)
			})
			slRecomendados(arreyRecom)
		})


	//DISCOVER
	const urlDiscover = `https://api.themoviedb.org/3/discover/movie?api_key=e71e111f4b1a8c978a7904443907ed8b&language=pt-br&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`

	fetch(urlDiscover)
		.then(response => response.json())
		.then(response => {
			const arreyDiscovery = []

			response.results.forEach(elemm => {
				arreyDiscovery.push(elemm)
			})
			slDiscover(arreyDiscovery)
		})
}

getDados()

let count0 = 0
let count1 = 0
let count2 = 0
//PHOTOS PAGE RECOMENDADOS
arrowLeftR.addEventListener('click', () => {
	if (count0 != 0) {
		count0 += 400
		document.querySelector('.recomendados .similares-photos .conteiner-photo-high')
			.style.marginLeft = `${count0}px`
	} else {
		count0 = 0
	}
	noneArrow()
})
arrowRigthR.addEventListener('click', () => {
	if (count0 > -8500) {
		count0 -= 400
		document.querySelector('.recomendados .similares-photos .conteiner-photo-high')
			.style.marginLeft = `${count0}px`
	} else {
		count0 = -8400
	}
	noneArrow()
})

//PHOTOS PAGE SIMILARES
arrowLeft.addEventListener('click', () => {
	if (count1 != 0) {
		count1 += 400
		document.querySelector('.similares .similares-photos .conteiner-photo-high')
			.style.marginLeft = `${count1}px`
	} else {
		count1 = 0
	}
	noneArrow()
})
arrowRigth.addEventListener('click', () => {
	if (count1 > -8500) {
		count1 -= 400
		document.querySelector('.similares .similares-photos .conteiner-photo-high')
			.style.marginLeft = `${count1}px`
	} else {
		count1 = -8400
	}
	noneArrow()
})
//PHOTOS PAGE DISCOVER
arrowLeftD.addEventListener('click', () => {
	if (count2 != 0) {
		count2 += 400
		document.querySelector('.discover .similares-photos .conteiner-photo-high')
			.style.marginLeft = `${count2}px`
	} else {
		count2 = 0
	}
	noneArrow()
})
arrowRigthD.addEventListener('click', () => {
	if (count2 > -8500) {
		count2 -= 400
		document.querySelector('.discover .similares-photos .conteiner-photo-high')
			.style.marginLeft = `${count2}px`
	} else {
		count2 = -8400
	}
	noneArrow()

})

function enter1() {
	arrowLeft.style.display = 'flex'
	arrowRigth.style.display = 'flex'
	noneArrow()
}
function enter2() {
	arrowLeftD.style.display = 'flex'
	arrowRigthD.style.display = 'flex'
	noneArrow()
}
function enter3() {
	arrowLeftR.style.display = 'flex'
	arrowRigthR.style.display = 'flex'
	noneArrow()
}

function out() {
	arrowLeft.style.display = 'none'
	arrowRigth.style.display = 'none'
}

const similaresImg = document.querySelector('.similares')
const recomendadosImg = document.querySelector('.recomendados')
const discoverImg = document.querySelector('.discover')

similaresImg.addEventListener('mouseenter', enter1)
recomendadosImg.addEventListener('mouseenter', enter2)
discover.addEventListener('mouseenter', enter3)

function noneArrow() {
	//Similar
	count1 == 0 ? arrowLeft.style.display = 'none' : arrowLeft.style.display = 'flex'
	count1 < -8400 ? arrowRigth.style.display = 'none' : arrowRigth.style.display = 'flex'
	//Discover
	count2 == 0 ? arrowLeftD.style.display = 'none' : arrowLeftD.style.display = 'flex'
	count2 < -8500 ? arrowRigthD.style.display = 'none' : arrowRigthD.style.display = 'flex'
	//Recomendados
	count0 == 0 ? arrowLeftR.style.display = 'none' : arrowLeftR.style.display = 'flex'
	count0 < -8500 ? arrowRigthR.style.display = 'none' : arrowRigthR.style.display = 'flex'
}

//SIMILARES
function slSimilares(arreySim) {
	let dataAtribute = 0
	arreySim.forEach(ele => {
		createElementDom(ele, dataAtribute, similares, ele.title)
		dataAtribute++
	})
	showTitle('.similares')
}
//RECOMENDADOS
function slRecomendados(arreyRecom) {
	let dataAtribute = 0
	arreyRecom.forEach(ele => {
		createElementDom(ele, dataAtribute, recomendados, ele.original_name)
		dataAtribute++
	})
	showTitle('.recomendados')
}
//DISCOVER
function slDiscover(arreyDiscover) {
	let dataAtribute = 0
	arreyDiscover.forEach(ele => {
		createElementDom(ele, dataAtribute, discover, ele.original_title)
		dataAtribute++
	})
	showTitle('.discover')
}
//CREATELEMENT
function createElementDom(ele, dataAtribute, selectPage, title) {
	const divConteinerPhotohigh = document.createElement('div')
	divConteinerPhotohigh.classList.add('conteiner-photo-high')
	const divHigh = document.createElement('div')
	divHigh.classList.add('high')
	const h2 = document.createElement('h2')
	h2.classList.add('title')
	h2.innerHTML = ele.title
	const divPhoto = document.createElement('div')
	divPhoto.classList.add('photo')
	const img = document.createElement('img')
	img.classList.add('img')
	img.setAttribute('data-', dataAtribute)
	const p = document.createElement('p')
	p.classList.add('start-title')
	p.innerHTML = ele.overview
	p.setAttribute('data-', dataAtribute)
	p.style.display = 'none'
	const ph3 = document.createElement('h3')
	ph3.classList.add('title-h3')
	ph3.innerHTML = ele.overview
	ph3.setAttribute('data-', dataAtribute)
	ph3.style.display = 'none'
	ph3.innerHTML = title

	img.src = `https://image.tmdb.org/t/p/w300${ele.backdrop_path}`
	divPhoto.appendChild(img)
	divPhoto.appendChild(p)
	divPhoto.appendChild(ph3)
	divHigh.appendChild(divPhoto)
	divHigh.appendChild(h2)
	divConteinerPhotohigh.appendChild(divHigh)
	selectPage.appendChild(divConteinerPhotohigh)
}
//SHOWTITLE
function showTitle(nameClass) {
	const title = document.querySelectorAll(`${nameClass} .start-title`)
	const pH3 = document.querySelectorAll(`${nameClass} .title-h3`)

	document.querySelectorAll(`${nameClass} .high .img`).forEach(index => {
		index.addEventListener('mouseenter', () => {
			for (let x = 0; x < title.length; x++) {
				for (let y = 0; y < pH3.length; y++) {
					if (index.getAttribute('data-') == title[x].getAttribute('data-') && index.getAttribute('data-') == pH3[y].getAttribute('data-')) {
						document.querySelector('.conteiner-title-start .start-title').innerHTML = title[x].innerHTML
						document.querySelector('.conteiner-title-start .title').innerHTML = pH3[y].innerHTML
					}
				}
			}
			document.querySelector('.conteiner-title').style.backgroundImage = `url(${index.src})`
		})
	})
}