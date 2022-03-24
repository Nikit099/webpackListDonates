import getDate from "./getDate"

export class pushDonat {
    constructor(value) {
        this.value = value
        this.donatItem = document.createElement('div')
        this.count = document.createElement('b')

    }

    render() {

        this.donatItem.className = 'donate-item'
        this.donatItem.append(`${getDate()} - `, this.count)
        this.count.textContent = `${this.value}$`

        return this.donatItem
    }
}