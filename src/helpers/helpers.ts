import moment from 'moment';

export const dateConvertor = (date: Date )=> {
    return moment(date).format("MMMM D, YYYY")
}
