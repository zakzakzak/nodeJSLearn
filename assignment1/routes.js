const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === "/"){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Hello</title><head>');
        res.write('<body><h1>Hello!</h1><form action="/create-user" method="POST"> <input type="text" name="username"><button type="submit">send </form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === "/user"){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Hello</title><head>');
        res.write('<body><ul> <li>Andi Saputra</li> <li>Budi Santoso</li> <li>Citra Lestari</li> <li>Dewi Anggraini</li> <li>Eko Prasetyo</li> </ul></body>');

        res.write('</html>');
        return res.end();
    }
    if (url === '/create-user' && method === 'POST'){
            const body = [];
            req.on('data', (chunk) => {
                console.log(chunk);
                body.push(chunk);
            });
            return req.on('end', () =>{
                const parsedBody = Buffer.concat(body).toString();
                const username = parsedBody.split('=')[1];
                console.log(username);
                // fs.writeFile('message.txt', message, (err)=>{
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
                // });
            });
        }
};

module.exports = {
    handler : requestHandler
}