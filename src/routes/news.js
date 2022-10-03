const express = require("express");
const newsRouter = express.Router()
const axios = require("axios")

newsRouter.get("/", async(request, response) => {
    try {
        const newsApi = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=103bfa8ee87041348470cfa39f4609e2`)
        response.render("news", { newsData : newsApi.data })
        
        
    } catch (error) {
        console.log(error)
        response.render("server-error")
    }
  
})

newsRouter.get("/business", async(request, response)=> {
    try {
        const newsApi = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=103bfa8ee87041348470cfa39f4609e2`);
        
        response.render("news", { newsData : newsApi.data })
        
    } catch (error) {
        response.render("server-error")
    }
})

newsRouter.get("/technology", async(request, response)=> {
    try {
        const newsApi = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=103bfa8ee87041348470cfa39f4609e2`);
        
        response.render("news", { newsData : newsApi.data })
        
    } catch (error) {
        response.render("server-error")
    }
})

newsRouter.get("/entertainment", async(request, response)=> {
    try {
        const newsApi = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=103bfa8ee87041348470cfa39f4609e2`);
        
        response.render("news", { newsData : newsApi.data })
        
    } catch (error) {
        response.render("server-error")
    }
})

newsRouter.get("/science", async(request, response)=> {
    try {
        const newsApi = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=103bfa8ee87041348470cfa39f4609e2`);
        
        response.render("news", { newsData : newsApi.data })
        
    } catch (error) {
        response.render("server-error")
    }
})

newsRouter.get("/sport", async(request, response)=> {
    try {
        const newsApi = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=sport&apiKey=103bfa8ee87041348470cfa39f4609e2`);
        
        response.render("news", { newsData : newsApi.data });
        
    } catch (error) {
        response.render("server-error");
    }
})

newsRouter.get("/health", async(request, response)=> {
    try { 
        const newsApi = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=103bfa8ee87041348470cfa39f4609e2`);
        response.render("news", { newsData : newsApi.data })
        
    } catch (error) {
        response.render("server-error");
        
    }
})

module.exports = newsRouter;