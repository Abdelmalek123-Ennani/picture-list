
// select the containers

const animals = document.querySelector('.Animals');
const water = document.querySelector('.Water');
const trees = document.querySelector('.Trees');
const passion = document.querySelector('.Passion');

// get the all Container
const allContainer = Array.from(document.querySelectorAll('.pic-show > div'));

// select the filter button
const filterBtn = Array.from(document.querySelectorAll('.nav-bar li'));


filterBtn.forEach((el) => {
    el.onclick = function() {

        filterBtn.forEach((it) => it.classList.remove('on'));

        el.classList.add('on');

        allContainer.filter((item) => {
            if (item.className === el.textContent ) {
                item.style.opacity = '1';
                item.style.height = 'auto';
            }else {
                item.style.opacity = '0';
                item.style.height = '0';
            }
        })

        if (el.dataset.title === 'on') {
            for (let item of allContainer) {
                item.style.opacity = '1';
                item.style.height = 'auto';
            }
        }

    }

    
})