import {
    SENTENCES,
    SHOW,
    HIDE
} from './constans';

class List {
    constructor() {
        this.isVisible = false;
        this.counter = 0;
        this.listElement = document.getElementById('list');
        this.toggleBtn = document.getElementById('toggle-list-btn');
        this.toggleBtn.innerText = SHOW;
        this.toggleList = this.toggleList.bind(this);
        this.toggleBtn.addEventListener('click', this.toggleList);
        this.renderList()
    }
    renderList() {
        SENTENCES.forEach((sentence, index) => {
            const listItem = document.createElement('li');
            listItem.innerText = sentence
            listItem.classList.add('list__item');
            listItem.id = `item-${index}`;
            listItem.classList.add(`list__item--${index}`);
            this.listElement.appendChild(listItem);
        })
    }

    toggleList() {
        this.toggleBtn.setAttribute('disabled', 'true');

        const visibilityInterval = setInterval(() => {
            const item = document.getElementById(`item-${this.counter}`);
            this.counter++;

            if (!this.isVisible) {
                item.classList.add('list__item--is-visible');
                this.toggleBtn.innerText = HIDE;
            } else {
                item.classList.remove('list__item--is-visible');
                this.toggleBtn.innerText = SHOW;
            }

            if (this.counter > 2) {
                clearInterval(visibilityInterval);
                this.counter = 0;
                this.toggleBtn.disabled = false;
                this.isVisible = !this.isVisible;
            }

        }, 500);
    }
}




export default List;