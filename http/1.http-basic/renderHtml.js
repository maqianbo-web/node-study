

function renderHtml(url){
    const data = [
        {
            url: '/list', 
            template: `<html>
                            <body>
                                <p>hello world</p>
                                <p>你好，list</p>
                            </body>
                        <html>`
        },
        {
            url: '/home', 
            template: `<html>
                            <body>
                                <p>hello world</p>
                                <p>你好，home</p>
                            </body>
                        <html>`
        },
        {
            url: '/list/data', 
            template: `['1','2']`
        },
        {
            url: '/home/data', 
            template: `nihao nice to meet you`
        },

    ]
    const notFound = `<html>
                        <body>
                            <p>hello world</p>
                            <p>not found</p>
                        </body>
                    <html>`;
    const template = data.find(v => v.url === url)
    
    return template ? template.template : notFound
}

module.exports = {
    renderHtml
}