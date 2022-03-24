import './styles.css'
// import initApp from './src/app'

import { App } from './utils/app'


const donatForm = document.querySelector('.donate-form')
const totalAmount = document.querySelector('#total-amount')
let number = 0
totalAmount.textContent = `${number}$`

donatForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const { target } = event
    const value = target.amount.value
    target.amount.value = ''
    number = Number(number) + Number(value)

    totalAmount.textContent = `${number}$`
    const createDonat = new App(value)
    createDonat.run()
})