import $ from '../core';

$.prototype.show = function() {
    for(let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;     /* если у объекта нет свойства style - пропускаем */
        }
        this[i].style.display = '';
    }

    return this;
};
/* из этого метода возвращаем объект чтобы можно было дальше работать с ним по цепочке */

$.prototype.hide = function() {
    for(let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }
        this[i].style.display = 'none';
    }

    return this;
};

$.prototype.toggle = function() {
    for(let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }

        if (this[i].style.display === 'none') {
            this[i].style.display = '';
        } else {
            this[i].style.display = 'none';
        }
    }

    return this;
};