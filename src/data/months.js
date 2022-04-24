
const calendarData = {}
const monthsName = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"]
const weekName = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
let emptyDaysCheckup = true


function emptyDayConstructor(week_num) {
    return {
        date: '',
        week_name_num: week_num,
        day: '',
        weekend: ''
    }
}

// конструктор объекта данныx для календаря
export function calendarObjectConstructor(current_date)
{
    calendarData.full_date = current_date
    calendarData.leap_year = current_date.split('/')[2] % 4 == 0 ? true : false
    calendarData.months = []
    monthsName.map((item, index) => {
        calendarData.months.push({
            title: item,
            number: index + 1,
            days_amount: null,
        })
    })
    // назначение количества дней в каждом месяце
    calendarData.months[0].days_amount = 31
    calendarData.months[1].days_amount = calendarData.leap_year == false ? 28 : 29 // если високосный год 29 дней , если нет то 28
    calendarData.months[2].days_amount = 31
    calendarData.months[3].days_amount = 30
    calendarData.months[4].days_amount = 31
    calendarData.months[5].days_amount = 30
    calendarData.months[6].days_amount = 31
    calendarData.months[7].days_amount = 31
    calendarData.months[8].days_amount = 30
    calendarData.months[9].days_amount = 31
    calendarData.months[10].days_amount = 30
    calendarData.months[11].days_amount = 31

    calendarData.current_date = {
        date: current_date,
        month: calendarData.months[current_date.split('/')[0] - 1],
        days: [],
    }

    for (let i = 0; i < calendarData.months[current_date.split('/')[0] - 1].days_amount; i++) {

        calendarData.current_date.days.push({
            date: calendarData.current_date.date.split('/')[0] + '/' + (i + 1) + '/' + calendarData.current_date.date.split('/')[2],
            week_name_num: new Date(calendarData.current_date.date.split('/')[2], calendarData.current_date.date.split('/')[0], i + 1).getDay(),
            day: i + 1,
            weekend: new Date(calendarData.current_date.date.split('/')[2], calendarData.current_date.date.split('/')[0], i + 1).getDay() === 0 ||
            new Date(calendarData.current_date.date.split('/')[2], calendarData.current_date.date.split('/')[0], i + 1).getDay() === 6
                ? true : false,
        })

    }
    if (calendarData.current_date.days[0] !== 4) {
        switch (calendarData.current_date.days[0].week_name_num) {
            case 0:
                calendarData.current_date.days = [emptyDayConstructor(4), emptyDayConstructor(5), emptyDayConstructor(6), ...calendarData.current_date.days]
                break;
            case 1:
                calendarData.current_date.days = [emptyDayConstructor(4), emptyDayConstructor(5), emptyDayConstructor(6), emptyDayConstructor(0), ...calendarData.current_date.days]
                break;
            case 2:
                calendarData.current_date.days = [emptyDayConstructor(4), emptyDayConstructor(5), emptyDayConstructor(6), emptyDayConstructor(0), emptyDayConstructor(1), ...calendarData.current_date.days]
                break;
            case 3:
                calendarData.current_date.days = [emptyDayConstructor(4), emptyDayConstructor(5), emptyDayConstructor(6), emptyDayConstructor(0), emptyDayConstructor(1), emptyDayConstructor(2), ...calendarData.current_date.days]
                break;
            case 5:
                calendarData.current_date.days = [emptyDayConstructor(4), ...calendarData.current_date.days]
                break;
            case 6:
                calendarData.current_date.days = [emptyDayConstructor(4), emptyDayConstructor(5), ...calendarData.current_date.days]
                break;
            default:
                calendarData.current_date.days = [...calendarData.current_date.days]
        }
    }
    console.log(calendarData)
}
calendarObjectConstructor( new Date().toLocaleDateString("en-US"))
console.log(new Date(2022,2,27))

export function getDateOnLoad(){
    console.log(calendarData)
    emptyDayConstructor()
}


export default calendarData