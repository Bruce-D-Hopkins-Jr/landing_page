//Array of Strings which are the names of list Items for navbar
let list = ['About Me', 'Whack-a-Mole', 'Memory', 'Farm Feeding Frenzy']
let anchor_list = ['about-me', 'mole', 'memory', 'farm']

//Store the creation of list items in a variable
let nav = document.querySelector('ul')

//For loop creates list elements inside of the empty unordered list in html
for (i = 0; i < list.length; i++) {
  //variable stores created list item
  let navbuttons = document.createElement('li')
  navbuttons.setAttribute('id', anchor_list[i] + 1)

  //variable stores created anchor item
  let anchor = document.createElement('a')

  //Puts created list item into empty unordered list
  nav.appendChild(navbuttons)

  //Puts anchor item into newly created list item
  navbuttons.appendChild(anchor)

  //Sets attribute href to name of section
  anchor.setAttribute('href', '#' + anchor_list[i])
  anchor.setAttribute('id', anchor_list[i] + '-link')

  //Changes inner html to name of section
  anchor.innerHTML = list[i]
}

//Variables that store anchor elements with a specific id name
let about_me_link = document.getElementById('about-me-link')
let mole_link = document.getElementById('mole-link')
let memory_link = document.getElementById('memory-link')
let farm_link = document.getElementById('farm-link')

//Variables that store the sections on the page
let about_me_section = document.getElementById('about-me-section')
let mole_section = document.getElementById('mole-section')
let memory_section = document.getElementById('memory-section')
let farm_section = document.getElementById('farm-section')

//function that clears active state for navbar
function clear_nav() {
  for (i = 0; i < anchor_list.length; i++) {
    document.getElementById(anchor_list[i] + '-link').removeAttribute('class')
  }
}

//function that clears active state for section
function clear_section() {
  about_me_section.removeAttribute('class')
  mole_section.removeAttribute('class')
  memory_section.removeAttribute('class')
  farm_section.removeAttribute('class')
}

//Sets anchor class as active to highlight section, removes active class from other anchor elements
about_me_link.addEventListener('click', function (event) {
  //prevents default action
  event.preventDefault()

  clear_nav()

  about_me_link.setAttribute('class', 'active')
  window.scrollTo({ top: 101, behavior: 'smooth' })
})

//Sets anchor class as active to highlight section, removes active class from other anchor elements
mole_link.addEventListener('click', function (event) {
  event.preventDefault()

  clear_nav()

  mole_link.setAttribute('class', 'active')
  window.scrollTo({ top: 1201, behavior: 'smooth' })
})

//Sets anchor class as active to highlight section, removes active class from other anchor elements
memory_link.addEventListener('click', function (event) {
  event.preventDefault()

  clear_nav()

  memory_link.setAttribute('class', 'active')
  window.scrollTo({ top: 2001, behavior: 'smooth' })
})

//Sets anchor class as active to highlight section, removes active class from other anchor elements
farm_link.addEventListener('click', function (event) {
  event.preventDefault()

  clear_nav()

  farm_link.setAttribute('class', 'active')
  window.scrollTo({ top: /*3045*/ 2645, behavior: 'smooth' })
})

//Change section background so user knows which content is highlighted
window.addEventListener('scroll', function () {
  if (window.scrollY > 100 && window.scrollY < 1200) {
    clear_nav()
    about_me_link.setAttribute('class', 'active')

    clear_section()
    about_me_section.setAttribute('class', 'active-section')
  } else if (window.scrollY > 1200 && window.scrollY < 2000) {
    clear_nav()
    mole_link.setAttribute('class', 'active')

    clear_section()
    mole_section.setAttribute('class', 'active-section')
  } else if (window.scrollY > 2000 && window.scrollY < 2644) {
    clear_nav()
    memory_link.setAttribute('class', 'active')

    clear_section()
    memory_section.setAttribute('class', 'active-section')
  } else if (window.scrollY > 2644) {
    clear_nav()
    farm_link.setAttribute('class', 'active')

    clear_section()
    farm_section.setAttribute('class', 'active-section')
  }
})
