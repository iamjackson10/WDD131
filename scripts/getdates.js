const today = new Date()
const year = today.getFullYear()
const currentYear =document.querySelector('#currentYear')
currentYear.textContent = year


const modifiedDate = document.querySelector('.modified-date')
const modified = document.lastModified
modifiedDate.textContent = `last modified: ${modified}`

