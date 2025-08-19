const spans = document.querySelectorAll('span:first-of-type')

function setClock(){
    const hour = new Date().getHours()
    const minute = new Date().getMinutes()
    const second = new Date().getSeconds()
    const millisecond = new Date().getMilliseconds()
    const amPm = hour >= 12 ? 'PM' : 'AM'

    spans[0].textContent = hour > 12 ? `${hour - 12 < 10 ? '0' : ''}${hour - 12}` : `${hour < 10 ? '0' : ''}${hour}`
    spans[1].textContent = minute < 10 ? `0${minute}` : minute
    
    spans[2].textContent = second < 10 ? `${second}` : second

    spans[3].textContent = millisecond < 100 ? millisecond < 10 ? `00${millisecond}` : `0${millisecond}` : millisecond

    spans[4].textContent = amPm


    setTimeout(setClock, 1000)

    document.title = `${spans[0].textContent}:${spans[1].textContent}:${spans[2].textContent}:${spans[3].textContent} ${spans[4].textContent}`
}

setClock()