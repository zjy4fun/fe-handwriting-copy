/**
 * 实现 DOM2JSON 一个函数，可以把一个 DOM 节点输出 JSON 的格式
 */
function dom2json(domTree){
    let obj = {}
    obj.name = domTree.tagName
    obj.children = []
    domTree.childNodes.forEach((child) => obj.children.push(dom2json(child)))
    return obj
}