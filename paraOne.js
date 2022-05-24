// 添加CSS文件，以及banner添加新的class
function addCSS1(banner){
    let new_element = document.createElement('link');
    new_element.setAttribute('rel', 'stylesheet');
    new_element.setAttribute('href', 'style.css');
    document.body.appendChild(new_element);
    banner.classList.add('wrapper');
    banner.classList.add('wrapper1');
}

function init1(images){
    for(let image of images.values()){
        image.style.setProperty('--Xoffset', `0px`);
        image.style.setProperty('--Yoffset', `0px`);
    }
}

function bindEvent1(banner, images, setspeed){
    let x, y, x_offset, y_offset;
    banner.addEventListener('mouseover', (e)=>{
        x = e.clientX;
        y = e.clientY;
    })

    banner.addEventListener('mousemove', (e)=>{
        // 实现位移
        x_offset = e.clientX - x; 
        y_offset = e.clientY - y;
        for(let [index, image] of images.entries()){
            // console.log([index, image])
            let speed = (6 - index)*3*setspeed;
            let Xoffset = x_offset / speed;
            let Yoffset = y_offset / speed;
            image.style.setProperty('--Xoffset', `${Xoffset}px`);
            image.style.setProperty('--Yoffset', `${Yoffset}px`);
        }
    })
    
    banner.addEventListener('mouseout', (e)=>{
        init1(images)
    })
}

export {addCSS1, init1, bindEvent1}