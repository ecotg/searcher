const rp = require('request-promise');
const RESULTS_LIMIT = 5;

export async function search(query, offset=0) {
    try {
        console.log('\nIn google searching for :' ,query, '. currently on pg: ', offset);
        const books = await rp({
            method: 'GET',
            url: `https://www.googleapis.com/books/v1/volumes?q=${query}`,
            json: true,
            qs: {
                maxResults: RESULTS_LIMIT,
                startIndex: offset * RESULTS_LIMIT
            },
            transform: (body) => {
                console.log('\nbody.items length:', body && body.items ? body.items.length : 0)
                return  body && body.items ? body.items : [];
            }
        });
        return books;
    } catch (e) {
        console.log('\nGoogle.search returned an error', e);
        return [];
    }
}


export async function get_details(volumeId) {
    try {
        const book_details = await rp({
            method: 'GET',
            url: `https://www.googleapis.com/books/v1/volumes/${volumeId}'`,
            json: true,
        });
        return book_details;
    } catch (e) {
        console.log('\nGoogle.get_details returned an error', e);
        return {};
    }
}
