import { svgContactDefault, svgContactHover } from "./svg"

export const createClientsForm = () => {
    // создаем элементы формы добавления клиента

    const modelTitle = document.createElement('h2')
    const modalClose = document.createElement('button')
    const form = document.createElement('form')
    const inputName = document.createElement('input')
    const labelName = document.createElement('label')
    const inputSurname = document.createElement('input')
    const labelSurname = document.createElement('label')
    const inputLastName = document.createElement('input')
    const labelLastName = document.createElement('label')
    const requaredName = document.createElement('span')
    const requaredSurname = document.createElement('span')
    const addContactBtn = document.createElement('button')
    const contactBtnSvgDefault = document.createElement('span')
    const contactBtnSvgHover = document.createElement('bspan')
    const saveBtn = document.createElement('button')
    const cancelBtn = document.createElement('button')
    const contactsBlog = document.createElement('div')
    const formFloatingName = document.createElement('div')
    const formFloatingSurname = document.createElement('div')
    const formFloatingLastName = document.createElement('div')

    // Добавляем класси и ид элементам
    modelTitle.classList.add('modal__title')
    modalClose.classList.add('modal__close', 'btn-reset')
    form.classList.add('modal__form')
    formFloatingName.classList.add('form-floating')
    formFloatingSurname.classList.add('form-floating')
    formFloatingLastName.classList.add('form-floating')
    inputName.classList.add('modal__input')
    inputSurname.classList.add('modal__input')
    inputLastName.classList.add('modal__input')
    labelName.classList.add('modal__label')
    labelSurname.classList.add('modal__label')
    labelLastName.classList.add('modal__label')
    requaredName.classList.add('modal__label')
    requaredSurname.classList.add('modal__label')
    addContactBtn.classList.add('modal__btn-contact', 'modal__btn--active')
    saveBtn.classList.add('modal__btn-save', 'btn-reset', 'site-btn')
    cancelBtn.classList.add('modal__btn-bck', 'btn-reset')
    contactBtnSvgDefault.classList.add('btn-contact__svg', 'btn-contact__svg--default', 'btn-contact__svg--active')
    contactBtnSvgHover.classList.add('btn-contact__svg', 'btn-contact__svg--hover')
    contactsBlog.classList.add('modal__contact')
    labelName.for = 'floatingName'
    labelSurname.for = 'floatingSurname'
    labelLastName.for = 'floatingLastName'
    inputName.id = 'floatingName'
    labelSurname.id = 'floatingSurname'
    labelLastName.id = 'floatingLastName'

    // добавляем атрибуты и плейсхолдер
    inputName.type = 'text';
    inputSurname.type = 'text';
    inputLastName.type = 'text';
    inputName.placeholder = 'Имя';
    inputSurname.placeholder = 'Фамилия';
    inputLastName.placeholder = 'Отчество';

    // заполняем элементы контентом
    modelTitle.textContent = 'Новый клиент';
    labelName.textContent = 'Имя';
    labelSurname.textContent = 'Фамилия';
    labelLastName.textContent = 'Отчество';
    addContactBtn.textContent = 'Добавить контакт';
    saveBtn.textContent = 'Сохранить';
    cancelBtn.textContent = 'Отмена';
    requaredName.textContent = '*';
    requaredSurname.textContent = '*';
    contactBtnSvgDefault.innerHTML = svgContactDefault;
    contactBtnSvgHover.innerHTML = svgContactHover;

    // создаем форму
    labelName.append(requaredName);
    labelSurname.append(requaredSurname);
}