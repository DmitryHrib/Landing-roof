/////////////Burger menu!!!!!!!!!!!
const burgerItem = document.querySelector('.burger');
const menu = document.querySelector('.header-nav');
const bgDark = document.querySelector('.zatemnenie');
const burgerClose = document.querySelector('.header-nav-close');
const navLinks = document.querySelector('.header-list');

burgerItem.addEventListener('click', toggleMenu);

function toggleMenu() {
    document.body.style.overflow = "hidden";
    menu.classList.add('header-nav-open');
    bgDark.classList.toggle('zatemnenieON');   
}

burgerClose.addEventListener('click', toggleMenuClose);
bgDark.addEventListener('click', toggleMenuClose);
navLinks.addEventListener('click', toggleMenuClose);


function toggleMenuClose() {
    document.body.style.overflow = "";
    menu.classList.remove('header-nav-open');
    bgDark.classList.toggle('zatemnenieON');
}




const modalBtn = document.querySelectorAll('[data-modal]');
const body = document.body;
const modalClose = document.querySelectorAll('.modal__close');
const modal = document.querySelectorAll('.modal');
//////Открыть модальные окна по клику
modalBtn.forEach(item => {
    item.addEventListener('click', event => {
        let $this = event.currentTarget;
        let modalId = $this.getAttribute('data-modal');
        let modal = document.getElementById(modalId);
        let modalContent = modal.querySelector('.modal__content');

        modalContent.addEventListener('click', event => {
            event.stopPropagation();
        })
        
        modal.classList.add('modal-show');
        document.body.style.overflow = "hidden" 
        body.classList.add('no-scroll');

        setTimeout(() => {
            modalContent.style.transform = 'none';
            modalContent.style.opacity = '1';
        }, 1);      
    })
});

//////Закрыть модальные окна по крестику
modalClose.forEach(item => {
    item.addEventListener('click', event => {
        let currentModal = event.currentTarget.closest('.modal');
        
        closeModal(currentModal);
    })
});

//////Закрыть модальные окна по области
modal.forEach(item => {
    item.addEventListener('click', event => {
        let currentModal = event.currentTarget;
        
        closeModal(currentModal);
    })
});
//////Функция закрытия модальных окн
function closeModal(currentModal) {
    let modalContent = currentModal.querySelector('.modal__content');
    modalContent.removeAttribute('style');

    setTimeout(() => {
        currentModal.classList.remove('modal-show');
        body.classList.remove('no-scroll');
        document.body.style.overflow = "" 
    }, 200)
}

///////////////
const modalBlago = document.querySelector('.modal-blago');
const modalButton= document.querySelector('.modal-button');
const modalCloseBlago= document.querySelector('.modal__close-blago');

modalButton.addEventListener('click', event => {
    let currentModal = event.currentTarget.closest('.modal');
    closeModal(currentModal);
    document.body.style.overflow = "hidden";
    modalBlago.classList.add('show');
});

modalCloseBlago.addEventListener('click', () => {
    modalBlago.classList.remove('show');
});
//////////////


const sidebarOpenClose = document.querySelector('.sidebar-close');
const sidebar = document.querySelector('.sidebar');

sidebarOpenClose.addEventListener('click', toggleOpenMenu);
function toggleOpenMenu() {
    sidebar.classList.toggle('sidebar-open');
}


var element = document.getElementById('phone');
var maskOptions = {
  mask: '+7 ( _ _ _) _ _ - _ _ - _ _',
  lazy: false
};
var mask = IMask(element, maskOptions);