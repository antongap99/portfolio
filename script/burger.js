
export const burgerController = () => {
    const headerContactsBurger = document.querySelector('.header__contacts-burger');
    const headerContacts = document.querySelector('.header__contacts');


    headerContactsBurger.addEventListener('click', e => {
        if (!headerContacts.classList.contains('header__contacts_active')) {
            headerContacts.classList.add('header__contacts_active')
        } else {
            headerContacts.classList.remove('header__contacts_active')
        }
    })

    document.addEventListener('click', e => {
        if (!e.target.closest('.header') &&
            headerContacts.classList.contains('header__contacts_active')
        ) {
            headerContacts.classList.remove('header__contacts_active');
        }
    })
}