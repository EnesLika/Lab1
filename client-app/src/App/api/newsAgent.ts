import axios, { AxiosResponse } from 'axios';
import { News } from '../layout/models/news';
import { Newsce } from '../layout/models/newsce';


const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    })
}


axios.defaults.baseURL = 'http://localhost:5000/api';

axios.interceptors.response.use(async response => {
    try {
        await sleep(500);
        return response;
    } catch (error) {
        console.log(error);
        return await Promise.reject(error);
    }
})

const responseBody = <T> (response: AxiosResponse) => response.data;

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post: <T> (url: string, body: {}) => axios.post<T>(url).then(responseBody),
    put: <T> (url: string, body: {}) => axios.put<T>(url).then(responseBody),
    del: <T> (url: string) => axios.delete<T>(url).then(responseBody),

}

const Newss = {
    list: () => requests.get<News[]>('/news'),
    details: (newsId: number) => requests.get<News>(`/news/${newsId}`),
    create: (newsce: Newsce) => axios.post<void>('/news', newsce),
    update: (news: News) => axios.put<void>(`/news/${news.newsId}`, news),
    delete: (newsId: number) => axios.delete<void>(`/news/${newsId}`)
}

const newsAgent = {
    Newss
}

export default newsAgent;