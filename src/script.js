import calendarData from "/src/data/months.js";
import {getDateOnLoad,calendarObjectConstructor} from "/src/data/months.js";

getDateOnLoad()
// поиск html элемента по ID
let calendar = document.getElementById('calendar')
let calendarApp = document.getElementById('calendar-app')


 async function renderCalendar() {

     for (let i = 4; i <= 10; i++) {
         if (i == 4) {
            calendar.innerHTML += `<div id="calendar-line"><div id="calendar-num" class=''>ПН</div></div>`
           document.getElementById('calendar-line').id = 'calendar-line-' + i
             let currentCalendarLine = document.getElementById('calendar-line-' + i)
             for (let j = 0; j < calendarData.current_date.month.days_amount; j++) {
                 if (calendarData.current_date.days[j].week_name_num == i) {
                     currentCalendarLine.innerHTML += `<div class="calendar-day" ><div class="calendar-day_header">${calendarData.current_date.days[j].day} </div></div>`
                 }
             }
         }
         if (i == 5) {
             calendar.innerHTML += `<div id="calendar-line"><div id="calendar-num" class=''>ВТ</div></div>`
             document.getElementById('calendar-line').id = 'calendar-line-' + i
             let currentCalendarLine = document.getElementById('calendar-line-' + i)
             for (let j = 0; j < calendarData.current_date.month.days_amount; j++) {
                 if (calendarData.current_date.days[j].week_name_num == i) {
                     currentCalendarLine.innerHTML += `<div class="calendar-day" ><div class="calendar-day_header">${calendarData.current_date.days[j].day} </div></div>`
                 }
             }
         }
         if (i == 6) {
             calendar.innerHTML += `<div id="calendar-line"><div id="calendar-num" class=''>СР</div></div>`
             document.getElementById('calendar-line').id = 'calendar-line-' + i
             let currentCalendarLine = document.getElementById('calendar-line-' + i)
             for (let j = 0; j < calendarData.current_date.month.days_amount; j++) {
                 if (calendarData.current_date.days[j].week_name_num == i) {
                     currentCalendarLine.innerHTML += `<div class="calendar-day" ><div class="calendar-day_header">${calendarData.current_date.days[j].day} </div></div>`
                 }
             }
         }
         if (i == 7) {
             calendar.innerHTML += `<div id="calendar-line"><div id="calendar-num" class=''>ЧТ</div></div>`
             document.getElementById('calendar-line').id = 'calendar-line-' + i
             let currentCalendarLine = document.getElementById('calendar-line-' + i)
             for (let j = 0; j < calendarData.current_date.month.days_amount; j++) {
                 if (calendarData.current_date.days[j].week_name_num == 0) {
                     currentCalendarLine.innerHTML += `<div class="calendar-day" ><div class="calendar-day_header">${calendarData.current_date.days[j].day} </div></div>`
                 }
             }
         }
         if (i == 8) {
             calendar.innerHTML += `<div id="calendar-line"><div id="calendar-num" class=''>ПТ</div></div>`
             document.getElementById('calendar-line').id = 'calendar-line-' + i
             let currentCalendarLine = document.getElementById('calendar-line-' + i)
             for (let j = 0; j < calendarData.current_date.month.days_amount; j++) {
                 if (calendarData.current_date.days[j].week_name_num == 1) {
                     currentCalendarLine.innerHTML += `<div class="calendar-day" ><div class="calendar-day_header">${calendarData.current_date.days[j].day} </div></div>`
                 }
             }
         }
         if (i == 9) {
             calendar.innerHTML += `<div id="calendar-line"><div id="calendar-num" class=''>СБ</div></div>`
             document.getElementById('calendar-line').id = 'calendar-line-' + i
             let currentCalendarLine = document.getElementById('calendar-line-' + i)
             for (let j = 0; j < calendarData.current_date.month.days_amount; j++) {
                 if (calendarData.current_date.days[j].week_name_num == 2) {
                     currentCalendarLine.innerHTML += `<div class="calendar-day" ><div class="calendar-day_header">${calendarData.current_date.days[j].day} </div></div>`
                 }
             }
         }
         if (i == 10) {
             calendar.innerHTML += `<div id="calendar-line"><div id="calendar-num" class=''>ВС</div></div>`
             document.getElementById('calendar-line').id = 'calendar-line-' + i
             let currentCalendarLine = document.getElementById('calendar-line-' + i)
             for (let j = 0; j < calendarData.current_date.month.days_amount; j++) {
                 if (calendarData.current_date.days[j].week_name_num == 3) {
                     currentCalendarLine.innerHTML += `<div class="calendar-day" ><div class="calendar-day_header">${calendarData.current_date.days[j].day} </div></div>`
                 }
             }
         }
     }


     calendarApp.innerHTML += `<div class="calendar-header">
<button id="prev-month" >Назад</button>
${calendarData.current_date.month.title} ${calendarData.full_date.split('/')[2]}
<button id="next-month"  >Вперед</button>
</div>
`
 }
renderCalendar()
let next = document.getElementById('next-month')
let prev = document.getElementById('prev-month')
next.addEventListener('click', nextMonth );
prev.addEventListener('click', prevMonth );
  function nextMonth() {
    document.getElementById('calendar').innerHTML = ''
     renderCalendar()
}
 async function prevMonth() {
     document.getElementById('calendar').innerHTML = ''
    await calendarObjectConstructor(new Date(2025,2,27).toLocaleDateString("en-US"))
    await renderCalendar()
}




