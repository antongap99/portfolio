import swiperController from './swiper.js';
import modalController from './modal.js';
import formController from './form.js'

const init = () => {
    swiperController();
    modalController({modal: '.modal1',
       btnOpen: '.present__order-btn',
       btnClose: '.modal__close',});

    formController();
}

init()