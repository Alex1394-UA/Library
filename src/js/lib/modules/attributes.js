import $ from '../core';

$.prototype.setAttr = function(name, value) {
    for(let i = 0; i < this.length; i++) {
        this[i].setAttribute(name, value);
    }
    return this;
};

$.prototype.remAttr = function(name) {
    for(let i = 0; i < this.length; i++) {
        this[i].removeAttribute(name);
    }
    return this;
};

$.prototype.toggAttr = function(name, value) {
    for(let i = 0; i < this.length; i++) {
        if (!this[i].getAttribute(name)) {
            this[i].setAttribute(name, value);
        } else {
            this[i].removeAttribute(name);
        }
    }
    return this;
};
