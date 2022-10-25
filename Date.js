const moment = require('moment-timezone');
// 4) tìm ngày đầu tháng và ngày cuối tháng

function TimeStartTimeEnd(date,timzone){
    const firtday = moment(date).tz(timzone).startOf('month').format('YYYY-MM-DDTHH:mm:ss:SSSZ');
    const lastday = moment(date).tz(timzone).endOf('month').format('YYYY-MM-DDTHH:mm:ss:SSSZ');
    return{ firtday, lastday }

}
console.log(TimeStartTimeEnd(new Date,'Asia/Ho_Chi_Minh'));
// 5) tìm ngày của đầu tháng và ngày của hiện tại
function findSumDay(date,timzone){
    const starDay = moment(date).tz(timzone).startOf('month').format('YYYY-MM-DDTHH:mm:ss:SSSZ');
    const endDay =  moment(date).tz(timzone).hour('date').format('YYYY-MM-DDTHH:mm:ss:SSSZ');
    return{ starDay, endDay }

}
console.log(findSumDay(new Date,'Asia/Ho_Chi_Minh'));
// 6) tìm ngày đầu tuần và ngày cuối tuần của tuần trước

function findOneDay(date,timzone){
    const lastWeek = moment(date).subtract(8,'day');
    const starDay = moment(lastWeek).tz(timzone).startOf('week').add(1,'day').format('YYYY-MM-DDTHH:mm:ss:SSSZ');
    const endDay = moment(lastWeek).tz(timzone).endOf('week').add(1,'day').format('YYYY-MM-DDTHH:mm:ss:SSSZ')
    return { starDay, endDay }
    
}
console.log(findOneDay(new Date,'Asia/Ho_Chi_Minh'))


