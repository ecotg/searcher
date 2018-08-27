const rp = require('request-promise');
const RESULTS_LIMIT = 40;

export async function search(query, offset=0) {
    try {
        const books = await rp({
            method: 'GET',
            url: `https://www.googleapis.com/books/v1/volumes?q=${query}`,
            json: true,
            qs: {
                maxResults: RESULTS_LIMIT,
                startIndex: offset * RESULTS_LIMIT
            },
            transform: (body) => body && body.items ? {items: body.items, count: body.totalItems } : {items: [], count: 0 }
    });
        return books;
    } catch (e) {
        return [];
    }
}
