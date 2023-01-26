import swiperController from './swiper.js';
import modalController from './modal.js';

const init = () => {
    swiperController();
    modalController({modal: '.modal1',
       btnOpen: '.present__order-btn',
       btnClose: '.modal__close',});
}

init()