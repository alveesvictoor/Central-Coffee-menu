const tabMenu = document.querySelectorAll('.js-tabmenu a[href^="#"]')
const tabContent = document.querySelectorAll('.js-tabcontent')
tabContent[0].classList.add('ativo')

function activeTab(index) {
    tabContent.forEach((section) => {
        section.classList.remove('ativo')
    });

    tabContent[index].classList.add('ativo')
}

tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
        activeTab(index);
    })
})