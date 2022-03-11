const url1 = 'https://jsonplaceholder.typicode.com/todos/1'
const url2 = 'https://jsonplaceholder.typicode.com/todos/2'
// variables
const url = 'https://jsonplaceholder.typicode.com/todos/'
const $ = document
const insertBtn = $.getElementById("getinfo")
const list = $.getElementById("list")
const numberInput = $.getElementById("number")

// event of number limit
numberInput.addEventListener('input',e => {
  if(e.target.value == null){
    return
  }
  if(e.target.value > 200){
    e.target.value = 200
  }else if(e.target.value < 1){
    e.target.value = 1
  }
  return
})
// clicking on insert button
const insertInfo = (e) =>{
  const value = e.target.previousElementSibling.value
  addCard(value)
}
// event of clicking insert button
insertBtn.addEventListener("click",insertInfo)
// adding card with information from click
const addCard = (num) =>{
  if(num == ""){
    return
  }
  const infoUrl = url + num
  getInfo(infoUrl)
  .catch(err => {
    throw new Error(err)
  })
  .then(data =>{
    const card = makeCard(data)
    list.appendChild(card)
  })
}
// getting info with request
const getInfo = async url =>{
  const response = await fetch(url)
  if(response.status === 200){
    return await response.json()
  }else{
    return `something went wrong! | Error code: ${response.status}`
  }
}
// function that makes a card element
const makeCard = data => {
  const card = $.createElement('div')
  card.classList.add('card')
  const cardTitle = $.createElement('h3')
  cardTitle.textContent = `number: ${data["id"]}`
  const cardText = $.createElement('p')
  cardText.textContent = data["title"]
  card.appendChild(cardTitle)
  card.appendChild(cardText)
  return card
}






















const getTodo = async url => {
  const response = await fetch(url)
  if(response.status === 200) {
    return await response.json()
  }else{
    return new Error( "not found...")
  }
}

// getTodo(url)
//   .then(data =>{
//     console.log(data.length);
// }).catch(error =>{
//     console.log(error.message);
// })

const getText = async (url2) =>{
  const response = await fetch(url)
  if (response.status === 200){
    return await response.text()
  }else{
    return new Error(`something went wrong | Error code: ${response.status}`)
  }
}

// getText(url4)
//   .then(data =>{
//     console.log(data);
//   })
//   .catch(error =>{
//     console.error(error)
//   })