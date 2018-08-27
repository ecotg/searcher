const express = require('express');
const app = express();
const { search, get_details } = require('./../src/utilities/google.js');

app.get('/search', async (req, res) => {
    const { q, pg = 0 } = req.query;
    console.log(`\nsearching for:  `, q);
    const books = await search(q, pg);
    return res.send(books);
});

app.get('/books/:bookId', async (req, res) => {
    const { bookId } = req.params;
    console.log('\n/books/:bookId: ', req.params);
    const details = await get_details(bookId);
    return res.send(details);
});

app.get('/', (req, res) => res.send('Hello World!'));


app.listen(3000, () => console.log('Example app listening on port 3000!'))