
export const burgerController = () => {
    const headerContactsBurger = document.querySelector('.header__contacts-burger');
    const headerContacts = document.querySelector('.header__contacts');

    const resize = () => {
        if(document.documentElement.clientWidth >= 992 && headerContacts.classList.contains('no-visible')) {
            headerContacts.classList.remove('no-visible');
        } else {
            headerContacts.classList.add('no-visible');
        }
    }
    window.addEventListener('resize', () => {
        resize();
    })

    headerContactsBurger.addEventListener('click', e => {
        if (headerContacts.classList.contains('no-visible')) {
            headerContacts.classList.remove('no-visible');
        } else {
            headerContacts.classList.add('no-visible');
        }
    })

    document.addEventListener('click', e => {
        if (!e.target.closest('.header') &&
            !headerContacts.classList.contains('no-visible') && document.documentElement.clientWidth <= 992
        ) {
            headerContacts.classList.add('no-visible');
        }
    })

    resize();
}