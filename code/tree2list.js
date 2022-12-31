/**
 * 树形转列表
 */
function tree2list(data) {
    let res = []
    const dfs = (tree) => {
        tree.forEach((item) => {
            if(item.children) {
                dfs(item.children)
                delete item.children
            }
            res.push(item)
        })
    }
    dfs(data)
    return res;
}