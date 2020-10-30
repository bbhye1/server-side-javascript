const express = require('express');
const app = express();
const port = 3001; 

app.locals.pretty = true;
app.set('view engine', 'pug');
app.set('views', './views'); //생략가능

app.use(express.static('public')); // 정적인 파일이 위치할 디렉토리를 지정할 이름 지정

app.get('/template', async(req, res) => {
  res.render('temp',{time: new Date()});
});

app.get('/', async(req, res) => {
  const response = await res.send('You are in Home');
  return response;
});

app.get('/login', async(req, res) => {
  const response = await res.send('<h1>Login please<h1>');
  return response;
});

app.get('/route', async(req, res) => {
  const response = await res.send('Hello, route, <img src="/img.png">');
  return response;
})

app.get('/dynamic', async(req,res) => {   // 동적인 웹페이지를 만드는 방법. 
let lis = new Date();

const output = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  Hello Dynamic!
  <h2>
  ${lis}
  </h2>
  </body>
</html>`;

const response = await res.send(output);
return response;
});

app.listen(port, () => {
  console.log('Connected 3000 port!');
});