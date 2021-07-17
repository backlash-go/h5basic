window.$ = window.jQuery = function (selectorOrArray) {
    let elements;
    if (typeof selectorOrArray === 'string') {
        elements = document.querySelectorAll(selectorOrArray);
    } else if (selectorOrArray instanceof Array) {
        elements = selectorOrArray;
    }
    const api = Object.create(jQuery.prototype);
    Object.assign(api, {
        oldApi: selectorOrArray.oldApi,
        elements: elements,
    });
    console.log(api)
    return api;
};

/* obj.fn(p1)  obj.fn.call(obj,p1) */


jQuery.prototype = {
    jQuery: true,
    addClass(className) {
        for (let i = 0; i < this.elements.length; i++) {
            this.elements[i].classList.add(className);
        }
        return this;
        // return api
    },
    find(selector) {
        let array = [];
        for (let i = 0; i < elements.length; i++) {
            const elements2 = Array.from(elements[i].querySelectorAll(selector));
            array = array.concat(elements2);
        }
        array.oldApi = this; //  this is api1
        return jQuery(array);
    },
    end() {
        return this.oldApi;
    },
    each(fn) {
        for (let i = 0; i < elements.length; i++) {
            fn.call(null, elements[i], i);
        }
        return this;
    },
    parent() {
        let array = [];
        this.each((node) => {
            if (array.indexOf(node.parentNode) === -1) {
                array.push(node.parentNode());
            }
        });
        return jQuery(array);
    },
    print() {
        console.log(elements);
    },
};