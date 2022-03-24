import moment from 'moment'
import 'moment-precise-range-plugin'

export default function getDate() {
    return moment().format('MMMM Do YYYY, h:mm:ss a')
}