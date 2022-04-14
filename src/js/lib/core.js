/* (() => {
    const $ = function (selector) {
        const elements = document.querySelectorAll(selector);
        const obj = {};

        obj.hide = () => {
            elements.forEach(elem => {
                elem.style.display = 'none';
            });
            return obj;
        };

        obj.show = () => {
            elements.forEach(elem => {
                elem.style.display = '';
            });
            return obj;
        };

        return obj;
    };

    window.$ = $;
})(); */

const $ = function(selector) {
    return new $.prototype.init(selector);
};

/* проверяем на условие если скобки пустые - не передан никакой селектор */
/* возвращаем только контекст, т.е. по сути создаём просто пустой объект */
/* Object.assign команда позволяет в существующий объект добавить новые свойства */
$.prototype.init = function(selector) {
    if(!selector) {   
        return this;
    }

    if (selector.tagName) {
        this[0] = selector;
        this.length = 1;
        return this;
    }

    Object.assign(this, document.querySelectorAll(selector));
    this.length = document.querySelectorAll(selector).length;
    return this;
};

$.prototype.init.prototype = $.prototype;
/* главная магия! - из функции init возвращаем объект (this) и у этого объекта так же есть 
свой прототип и этому прототипу мы присваиваем значение $.prototype, т.е. мы записали
в прототип возвращаемого объекта прототип нашей главной функции. Это даёт нам следующее
преимущество: теперь на объекте который будет создаваться при помощи функции $ мы можем
использовать любые методы, которые будут внутри прототипа этой функции */

window.$ = $;
/* записали функцию в глобальный объект window */

export default $;