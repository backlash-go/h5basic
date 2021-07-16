window.jQuery = function (selector) {
    const elements = document.querySelectorAll(selector)
    return {
        addClass(className) {
            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.add(className)
            }
            return this
            // return api
        },
        find(selector) {
            let array = []
            for (let i = 0; i < elements.length; i++) {
                array.concat(Array.from(elements[i]))
            }
            return array
        }
    }
}

/* obj.fn(p1)  obj.fn.call(obj,p1) */