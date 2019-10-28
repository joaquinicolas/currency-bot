const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://www.dolarsi.com/';

axios(url)
    .then(resp => {
        const html = resp.data;
        const $ = cheerio.load(html);
        const c1 = $('.fecha');
        console
    })
    .catch(console.error);





