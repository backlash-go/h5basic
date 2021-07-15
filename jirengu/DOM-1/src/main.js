//
//

const test = document.querySelector('#test');
console.log(test);
const div3 = dom.create("<div>222</div>");

// dom.wrap(div3,d1)
// console.log(d1.parentNode)

// dom.after(d1,div)

// dom.append(d1,div)
// dom.before(div3,d1)
// dom.empty(d1)

const nodes = dom.empty(window.empty);

dom.attr(test, "title", "i am xxb1");
console.log(nodes);

const title = dom.attr(test, "title");
console.log(`title is ${title}`);


dom.text(test, "我是大家的小宝贝");

dom.style(test, {border: '1px solid red', color: "blue"});
dom.style(test, "border");
