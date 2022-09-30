


const bodyPlace = document.querySelector("body");

const clock = document.querySelector("p")


const digitalClock = setInterval(() => {
    const date = new Date();

    let hour = date.getHours();

    let minute = date.getMinutes();

    let second = date.getSeconds();

    let amPm = "AM";
    let hourStatus = hour > 12 ? amPm = "PM" : amPm = "AM"


    hour = hour < 10 ? `0${hour}` : `${hour}`;

    minute = minute < 10 ? `0${minute}` : `${minute}`;

    second = second < 10 ? `0${second}` : `${second}`;




    clock.innerHTML = `${hour % 13}:${minute}:${second} <sup>${hourStatus}</sup> `


}, 1000)


bodyPlace.addEventListener("mousemove", (e) => { 

    clock.style.color = `rgb(${e.clientX % 255}, ${e.clientY % 255}, ${(e.clientX + e.clientY) % 255})`
})