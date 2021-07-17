window.jQuery = function (selectorOrArray) {
    let elements;
    if (typeof selectorOrArray === 'string') {
        elements = document.querySelectorAll(selectorOrArray);
    } else if (selectorOrArray instanceof Array) {
        elements = selectorOrArray;
    }

    return {
        oldApi: selectorOrArray.oldApi,
        addClass(className) {
            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.add(className);
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
};

/* obj.fn(p1)  obj.fn.call(obj,p1) */