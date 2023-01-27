import swiperController from './swiper.js';
import modalController from './modal.js';
import {burgerController} from './burger.js'

const init = () => {
    swiperController();
    modalController({
        modal: '.modal1',
        btnOpen: '.present__order-btn',
        btnClose: '.modal__close',
    });

    burgerController();
}

init()