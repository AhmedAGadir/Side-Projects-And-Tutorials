let hour_tag = document.getElementById('hour');
let minute_tag = document.getElementById('minute');
let second_tag = document.getElementById('second');
let clock_img = document.getElementById('alarm-clock');
let anime_img = document.getElementById('anime');
let badge = document.querySelector('.badge');

 let clock = setInterval(() => {
	let date = new Date();
	
  let obj = {
		hour: date.getHours(),
		minute: date.getMinutes(),
		second: date.getSeconds()
	}
	
  for (let key of Object.keys(obj)) {
		obj[key] = obj[key].toString().length < 2 ? `0${obj[key]}`: `${obj[key]}`;
	}
  
  updateTime(obj);

  if (Number(obj.second) % 30 === 0)
    	 glitchImages();    
},1000)


 function updateTime({hour, minute, second}) {
 	hour_tag.textContent = hour +':';
 	minute_tag.textContent = minute + ':';
 	second_tag.textContent= second; 
 }

 function glitchImages() {
    
    let clock_img_srcs = ['images/AC0.png',
                          'images/AC1.png',
                          'images/alarm-clock.png',
                          'images/AC2.png',
                          'images/AC3.png',
                          'images/alarm-clock.png'];

    let anime_img_srcs = ['images/C0.png',
                          'images/C1.png',
                          'images/back-to-top-min.png',
                          'images/C2.png',
                          'images/C3.png',
                          'images/back-to-top-min.png']

    let count = 0;

    let glitch = setInterval(() => {
    	clock_img.src = clock_img_srcs[count];
    	anime_img.src = anime_img_srcs[count];
        count++
        if (count == 6) {

          let second_glitch = setTimeout(() => {
            secondGlitch();
          }, 700) 
        	clearInterval(glitch);
        }
    },100)

 }

 function secondGlitch() {
    let anime_img_srcs = ['images/C0.png',
                          'images/C1.png',
                          'images/back-to-top-min.png',
                          'images/C2.png',
                          'images/C3.png',
                          'images/back-to-top-min.png'];

    let count = 0;

    let glitch = setInterval(() => {
      anime_img.src = anime_img_srcs[count];
        count++
        if (count == 6)
          clearInterval(glitch);
    },50)
 }


badge.addEventListener('mouseover',glitchImages)


























