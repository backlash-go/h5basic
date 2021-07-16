window.dom = {
    create(string) {
        const container = document.createElement("template");
        container.innerHTML = string.trim();
        // console.log(container.content)
        return container.content.firstChild;
    },
    after(node, node2) {
        //node.nextSibling 如果是空 依然可以插入
        node.parentNode.insertBefore(node2, node.nextSibling);
    },
    before(node, node2) {
        node.parentNode.insertBefore(node2, node);
    },
    append(parent, node) {
        parent.appendChild(node);
    },
    wrap(node, parent) {
        dom.before(node, parent);
        dom.append(parent, node);
    },
    remove(node) {
        node.parentNode.removeChild(node);
        return node;
    },
    empty(node) {
        const {childNodes} = node;
        console.log(childNodes);
        const array = [];
        let x = node.firstChild;
        console.log(x);
        while (x) {
            array.push(dom.remove(node.firstChild));
            x = node.firstChild;
        }
        return array;

    },
    attr(node, name, value) {  //重载
        if (arguments.length === 3) {
            node.setAttribute(name, value);
        } else if (arguments.length === 2) {
            return node.getAttribute(name);
        }
    },
    text(node, string) { //适配
        if (arguments.length === 2) {
            if ('innerText' in node) {
                node.innerText = string;
            } else if ('textContent' in node) {
                node.textContent = string;
            }
        } else if (arguments.length === 1) {
            if ('innerText' in node) {
                return node.innerText;
            } else if ('textContent' in node) {
                return node.textContent;
            }
        }

    },
    style(node, name, value) {
        if (arguments.length === 3) {
            //dom.style(div,color,red)
            node.style[name] = value;
        } else if (arguments.length === 2) {
            //dom.style(div,color)

            if (typeof name === 'string') {
                return node.style[name];
            }
        } else if (name instanceof Object) {
            //dom.style(div,object)
            for (let key in name) {
                node.style[key] = name[key];
            }
        }
    },
    class: {
        add(node, className) {
            node.classList.add(className)
        },
        remove(node, className) {
            node.classList.remove(className)
        },
        has(node, className) {
            return node.classList.contains(className)
        }
    },
    on(node, event, fn) {
        node.addEventListener(event, fn)
    },
    off(node, event, fn) {
        node.removeEventListener(event, fn)
    },
    find(selector, scope) {
        return (scope || document).querySelectorAll(selector)
    },
    parent(node) {
        return node.parentNode
    },
    children(node) {
        return node.children
    },
    siblings(node) {
        return Array.from(node.children).filter(n => n !== node)
    },
    next(node) {
        let x = node.nextSibling
        while (x && x.nodeType === 3) {
            x = x.nextSibling
        }
        return x
    },
    previous(node) {
        let x = node.previousNode
        while (x && x.nodeType === 3) {
            x = x.previousNode
        }
        return x
    },

    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i])
        }
    },
    index(node) {
        const list = dom.children(node.parentNode)
        for (let i = 0; i < list.length; i++) {
            if (node === list[i]) {
                return i
            }
        }
    }

}

;