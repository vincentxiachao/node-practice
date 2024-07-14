const fs = require('fs');

function requestHanler(req, res){
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write(
            `<html>
                <head>
                    <title>My first page</title>
                </head>
                <body>
                    <h1>My first page</h1>
                    <form action="/message" method="post"><input name="message" type="text"><button type="submit">Go</button></form>
                </body>
            </html>`
        );
        return res.end();

    }
    if(url === '/message' && method==='POST'){
        const body = [];
        req.on('data', (data) => {
            console.log(data.toString());
            body.push(data);
        });
        return req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log('buffered: ' + parsedBody);
            fs.writeFile('./message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/')
                return res.end();
            });
        });
    }
    res.setHeader('Content-type', 'text/html');
    res.write(`<html lang="en"><head><title>My first page</title></head><body><h1>My first page</h1></body></html>`);
    res.end();
}
exports.requestHanler = requestHanler;