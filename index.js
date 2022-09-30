


const bodyPlace = document.querySelector("body");

const clock = document.querySelector("p")


const digitalClock = setInterval(() => {
    const date = new Date();

    let hour = date.getHours();
    console.log(hour);
    let minute = date.getMinutes();

    let second = date.getSeconds();

    let amPm = "AM";
    let hourStatus = hour > 12 ? amPm = "PM" : amPm = "AM"

    
    hour = hour < 10 ? `0${hour}` : `${hour}`;
    
    minute = minute < 10 ? `0${minute}` : `${minute}`;
    
    second = second < 10 ? `0${second}` : `${second}`;
    

    hour = hour > 12 ? Number(hour) + 1 : hour;
    console.log(hour,"2");




    clock.innerHTML = `${hour % 13}:${minute}:${second} <sup>${hourStatus}</sup> `


}, 1000)


bodyPlace.addEventListener("mousemove", (e) => { 

    clock.style.color = `rgb(${e.clientX % 255}, ${e.clientY % 255}, ${(e.clientX + e.clientY) % 255})`
})