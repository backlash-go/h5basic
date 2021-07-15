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


    }

};