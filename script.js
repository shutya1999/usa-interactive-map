/// Map
let texts = document.querySelectorAll('.text-state'),
    maps_state = document.querySelectorAll('.map-state'),
    map = document.querySelector('.map');


maps_state.forEach(state => {
    if (state.id !== ''){
        let text = document.querySelector(`.text-state[data-id="${state.id}"]`);

        let top = (state.getBoundingClientRect().top - map.getBoundingClientRect().top) + (state.getBoundingClientRect().height / 2) - (text.getBoundingClientRect().height / 2);
        let left = (state.getBoundingClientRect().left - map.getBoundingClientRect().left) + (state.getBoundingClientRect().width / 2) - (text.getBoundingClientRect().width / 2);

        switch (state.id){
            case 'idaho':{
                top += 40;
                // left += 20;
                break;
            }
            case 'minnesota':{
                top -= 20;
                left -= 10;
                break;
            }
            case 'michigan':{
                top += 20;
                left += 30;
                break;
            }
            case 'new-jersey':{
                top += 5;
                left += 35;
                break;
            }
            case 'delaware':{
                top += 10;
                left += 45;
                break;
            }
            case 'maryland':{
                top += 15;
                left += 71;
                break;
            }
            case 'florida':{
                top += 7;
                left += 45;
                break;
            }
            case 'vermont':{
                top -= 16;
                break;
            }
            case 'rhode-island':{
                top += 12;
                left += 35;
                break;
            }
            case 'california':{
                top += 15;
                left -= 15;
                break;
            }
            case 'oklahoma':{
                left += 25;
                break;
            }
            case 'arkansas':{
                left -= 4;
                break;
            }
            case 'louisiana':{
                top += 8;
                left -= 8;
                break;
            }
            case 'south-carolina':{
                top -= 10;
                left += 4;
                break;
            }
            case 'virginia':{
                left += 25;
                break;
            }
            case 'west-virginia':{
                left -= 10;
                break;
            }
            case 'new-york':{
                top += 10;
                break;
            }
        }


        text.style.left = `${left}px`;
        text.style.top = `${top}px`;
    }
})
