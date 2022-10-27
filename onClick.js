const query = document.querySelector.bind(document)

const hamburger = query('.hamburger');
const mobileNav = query('#mobile-nav');
const btnClose = query('.button-close');

const arrow = query('.mobile-nav-link__arrow');
const mobileNavChildList = query('.mobile-nav-child-list');

hamburger.onclick = function() {
    mobileNav.classList.add('active')
}

btnClose.onclick = function() {
    mobileNav.classList.remove('active')
}



arrow.onclick = function() {
    let isOpen = mobileNavChildList.clientHeight === 0;
    if(isOpen) {
        mobileNavChildList.classList.add('active-mobile-nav-child-list')
        arrow.style.transform = 'rotate(-180deg)';
        
    } else {
        arrow.style.transform = 'rotate(0)';
        mobileNavChildList.classList.remove('active-mobile-nav-child-list')
    }
}