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
        node.parentNode.insertBefore(node2, node)
    },
    append(parent, node) {
        parent.appendChild(node)
    },
    wrap(node, parent) {
        dom.before(node, parent)
        dom.append(parent, node)
    }
}