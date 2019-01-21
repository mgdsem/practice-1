import {
    SENTENCES
} from './constans';

class List {
    constructor() {
        this.counter = 0;
        this.listElement = document.getElementById('list');
        this.toggleBtn = document.getElementById('toggle-list-btn');
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
        const visibilityInterval = setInterval(() => {
            const item = document.getElementById(`item-${this.counter}`);
            this.counter++;
            item.classList.add('list__item--is-visible');
            if (this.counter > 2) {
                clearInterval(visibilityInterval);
            }
        }, 500);
    }
}




export default List;