import { pushDonat } from "./pushDonat";


export class App {
    constructor(value) {
        this.value = value
        this.pushDonat = new pushDonat(this.value)
        this.donatesContainer = document.querySelector('.donates-container__donates')

    }

    run() {
        const pushDonatHTML = this.pushDonat.render()
        this.donatesContainer.append(pushDonatHTML)

    }
}