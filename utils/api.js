import axios from 'axios'

const newsApi = axios.create({
    baseURL: 'https://nc-news-api-zlkx.onrender.com/api/',
})

export const getTopics = () => {
    return newsApi.get('/topics').then(({data}) => {
        return data.topics;
    })
}

export const getArticles = () => {
    return newsApi.get('/articles').then(({data}) => {
        return data.articles;
    })
}

export const getSingleArticle = (article_id) => {
    return newsApi.get(`/articles/${article_id}`).then(({data}) => {
        return data.article;
    })
}

export const getComments = (article_id) => {
    return newsApi.get(`/articles/${article_id}/comments`).then(({data}) => {
        return data.comments;
    })
}

export const updateVotes = (article_id, value) => {
    return newsApi.patch(`/articles/${article_id}`, { inc_votes: value}).then(({data}) => {
        return data.article;
    })
}

export const addComment = (article_id, username, body) => {
    console.log(`/api/articles/${article_id}/comments`, { body:body, username:username })
    return newsApi.post(`/articles/${article_id}/comments`, { body:body, username:username }).then(({data}) => {
        return data.comment;
    })
}