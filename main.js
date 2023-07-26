//recuperation des élements des face des cartes
const codeOnCard = document.querySelector('#front-card-code')
const nameOnCard = document.querySelector('#front-card-name')
const monthOnCard = document.querySelector('.month-content')
const yearOnCard = document.querySelector('.year-content')
const cvcOnCard = document.querySelector('#back-card-code')

// recupérations des zones d'inputs
const nameInput = document.querySelector('#name')
const numberInput = document.querySelector('#card-number') 
const monthInput = document.querySelector('#month')
const yearInput = document.querySelector('#year')
const cvcInput = document.querySelector('#cvc')
arrayinputTarget = [nameInput, numberInput, monthInput, yearInput, cvcInput]

// tableaux intervenant dans la logique
let valueCodeArray = []
let valueNameArray = []
let valueMonthArray = []
let valueYearArray = []
let valueCvcArray = []

const confBtn = document.querySelector('button')

function fulling(keyEntered, tabCalled){
  // console.log('ok')
  tabCalled.push(keyEntered)
}
function backSpace(tabCalled){
  tabCalled.pop()
}

function disabledInput(inputArea){
  inputArea.disabled=true
  setTimeout(inputArea.disabled=false, 500)
}


function DatasOnScreen(InputedArrayValue, targetCible){
  console.log("ok2")
  let etat = ""
  for (let i=0; i<=(InputedArrayValue.length)-1;i++){
    etat =etat + InputedArrayValue[i]
    console.log(etat)
  }
  targetCible.textContent=etat
}


arrayinputTarget.map((item)=>{item.addEventListener('click', ()=>{
  item.style.border='1px solid blue'}
  )
})

nameInput.addEventListener('keydown', (event)=>{
    // console.log('ok')
    let key = event.key
    console.log(key)
    if(key=="Backspace"){
      backSpace(valueNameArray)
      DatasOnScreen(valueNameArray, nameOnCard)
    }else
    if ((/^[a-zA-Z]$/.test(key)) || key==' ' ){
      fulling(key, valueNameArray)
      DatasOnScreen(valueNameArray, nameOnCard)
    }
})

numberInput.addEventListener('keydown', (event)=>{
  // console.log(event.key)
  let key = event.key
  if(key=="Backspace"){
    backSpace(valueCodeArray)
    DatasOnScreen(valueCodeArray, codeOnCard)
  }else
  if(isNaN(key)){
    console.log('not a number')
    disabledInput(numberInput)
  }else{
    fulling(key, valueCodeArray)
    DatasOnScreen(valueCodeArray, codeOnCard)
   }
})

monthInput.addEventListener('keydown', (event)=>{
  // console.log(event.key)
  let key = event.key
  if(key=="Backspace"){
    backSpace(valueMonthArray)
    DatasOnScreen(valueMonthArray, monthOnCard)
  }else{
    if(isNaN(key)){
      console.log('not a number')
      disabledInput(monthInput)
    }else{
    fulling(key, valueMonthArray)
      if(valueMonthArray.length>2){
        disabledInput(monthInput)
      }else{
        DatasOnScreen(valueMonthArray, monthOnCard)
      }
    }
  }
})

yearInput.addEventListener('keydown', (event)=>{
  console.log(event.key)
  let key = event.key
  if(key=="Backspace"){
    backSpace(valueYearArray)
    DatasOnScreen(valueYearArray, yearOnCard)
  }else{
  if(isNaN(key)){
    console.log('not a number')
    disabledInput(yearInput)
  }else{
    fulling(key, valueYearArray)
      if(valueYearArray.length>2){
        disabledInput(yearInput)
      }else{
        DatasOnScreen(valueYearArray, yearOnCard)
      }
    }
  }
})

cvcInput.addEventListener('keydown', (event)=>{
  console.log(event.key)
  let key = event.key
  if(key=="Backspace"){
    backSpace(valueCvcArray)
    DatasOnScreen(valueCvcArray, cvcOnCard)
  }else{
  if(isNaN(key)){
    console.log('not a number')
    disabledInput(cvcInput)
  }else{
    fulling(key, valueCvcArray)
      if(valueCvcArray.length>3){
        disabledInput(cvcInput)
      }else{
        DatasOnScreen(valueCvcArray, cvcOnCard)
      }
    }
  }
})


confBtn.addEventListener('click', ()=>{
  console.log('ok')
  arrayinputTarget.map((item)=>{
    console.log('ok2')
    if (item.value== ''){
      item.style.border ='2px solid pink'
      item.setAttribute('placeholder', 'please fill the blank')
    }
  })
})

