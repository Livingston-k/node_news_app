// const { default: axios, Axios } = require('axios');
var express = require('express');
var router = express.Router();
const NewsAPI = require('newsapi');

/* GET home page. */
router.get('/', async (req, res, next) => {
    // const newsapi = new NewsAPI(process.env.NEWS_API_KEY);
    // To query /v2/top-headlines
    // All options passed to topHeadlines are optional, but you need to include at least one of them
    res.render('news', { title: 'News page' });

    // newsapi.v2.sources({
    //     category: 'technology',
    //     language: 'en',
    //     country: 'us'
    // }).then(response => {
    //     console.log(response)
    //     res.render('news', { title: 'News page', news: response.sources });
    // });


});

module.exports = router;
