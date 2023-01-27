
export const burgerController = () => {
    const headerContactsBurger = document.querySelector('.header__contacts-burger');
    const headerContacts = document.querySelector('.header__contacts');


    headerContactsBurger.addEventListener('click', e => {
        if (headerContacts.classList.contains('no-visible')) {
            headerContacts.classList.remove('no-visible');
        } else {
            headerContacts.classList.add('no-visible');
        }
    })

    document.addEventListener('click', e => {
        if (!e.target.closest('.header') &&
            !headerContacts.classList.contains('no-visible')
        ) {
            headerContacts.classList.add('no-visible');
        }
    })
}