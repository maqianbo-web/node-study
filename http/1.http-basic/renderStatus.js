

function renderStatus(url){
    const pages = ['/list','/home','/list/data','/home/data']
    return pages.includes(url) ? 200 : 400
}




 module.exports = renderStatus