const express = require("express");
const newsRouter = express.Router()
const axios = require("axios")

newsRouter.get("", async(request, response) => {
    try {
        const newsApi = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=103bfa8ee87041348470cfa39f4609e2`)
        console.log(newsApi.data)
        response.render("news", { newsData : newsApi.data })
        
        
    } catch (error) {
        console.log(error)
    }
  
})

module.exports = newsRouter;