# Express POST Errors

I cannot get POST data to show up in the body of an Express request.

## Install Dependencies

Run `yarn` or `npm i` to install all dependencies.

## Start the server

Run `node index.js` to start the server, and open [localhost:4004](http://localhost:4004) to view the page.

## Perform a `POST` request

Copy and paste either of these snippets to perform a POST request to the `/postendpoint` route.

```javascript
const xhr = new XMLHttpRequest();
xhr.open('post'.toUpperCase(), '/postendpoint');
xhr.send(JSON.stringify({a:'b'}));

fetch('/postendpoint', { method: 'POST', body: new FormData().append('a','b') })

fetch('/postendpoint', { method: 'POST', body: JSON.stringify({a:"b"}) })
```

They all *should* echo out `{a:"b"}` on the console log (Terminal/CLI window), but what I see is `{}`.