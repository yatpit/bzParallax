import {init1,bindEvent1} from '/Slide.js'
import {init2,bindEvent2} from '/Transfer.js'

class Banner{
    constructor(selector, option) {
        // 选出最外层div
        this.banner = document.querySelector(`${selector}`);

        // 设置speed初始值
        if(option.speed === undefined){option.speed = 3}

        if(option.type == 'Slide'){
            // 引入css文件，为banner动态添加类名
            this.addCSS(1);

            this.images = this.banner.querySelectorAll('div>img');

            init1(this.images);
            bindEvent1(this.banner, this.images, option.speed);
        }

        if(option.type == 'Transfer'){
            this.addCSS(2);

            this.imgs = this.banner.querySelectorAll('div>img');
            this.left = this.banner.querySelector('.left');
            this.middle = this.banner.querySelector('.middle');
            this.right = this.banner.querySelector('.right');
            
            let positions = {
                left: this.left,
                middle: this.middle,
                right: this.right
            }
            init2(this.imgs, positions);
            bindEvent2(this.banner, this.imgs, positions, option.speed);
        }
    }

    // 添加CSS文件，以及banner添加新的class
    addCSS(num){
        let new_element = document.createElement('link');
        new_element.setAttribute('rel', 'stylesheet');
        new_element.setAttribute('href', 'style.css');
        document.body.appendChild(new_element);
        this.banner.classList.add('wrapper');
        this.banner.classList.add(`wrapper${num}`);
    }
}
export default Banner;