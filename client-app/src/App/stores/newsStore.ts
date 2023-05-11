import { makeAutoObservable, runInAction } from "mobx";
import { News } from "../layout/models/news";
import { Newsce } from "../layout/models/newsce";
import newsAgent from "../api/newsAgent";

export default class NewsStore {

    newss: News[] = [];
    newsce: Newsce[] = [];
    newssRegistry = new Map<number, News>();
    selectedNews: News | undefined = undefined;
    selectedNewsce: Newsce | undefined = undefined;

    editMode = false;
    loading = false;
    loadingInitial = false;

    constructor(){
        makeAutoObservable(this)
    }

    loadNewss = async () => {
        this.setLoadingInitial(true);
        try {
            const newss = await newsAgent.Newss.list();
            
            newss.forEach((news: News) => {
                news.newsUploadTime = news.newsUploadTime.split('T')[0];
                this.newss.push(news);
                //this.newssRegistry.set(news.newsId, news);
            })
            this.setLoadingInitial(false);
            
            } catch (error) {
                console.log(error);
                this.setLoadingInitial(false);
            
        }
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    selectNews = (newsId: number) => {
        this.selectedNews = this.newss.find(n => n.newsId === newsId);
    }

    cancelSelectedNews = () => {
        this.selectedNews = undefined;
    }

    openForm =(newsId?: number) => {
        newsId ? this.selectNews(newsId) : this.cancelSelectedNews();
        this.editMode = true;
    }

    closeForm = () => {
        this.editMode = false;
    }

    createNews = async (newsce: Newsce) => {
        this.loading = true;
        try {
            await newsAgent.Newss.create(newsce);
            runInAction (() =>
            {
                this.newsce.push(newsce);
                this.selectedNewsce = newsce;
                this.editMode=false;
                this.loading=false;
            })
        } catch (error) {
            console.log(error);
            runInAction (() =>
            {
                this.loading=false;
            })
        }
    }

    updateNews = async (news: News) => {
        this.loading = true;
        try{
            await newsAgent.Newss.update(news);
            runInAction(() => {
                this.newss = [...this.newss.filter(n => n.newsId !== news.newsId), news];
                this.selectedNews = news;
                this.editMode = false;
                this.loading = false;
            })

        }catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }

    deleteNews = async (newsId: number) => {
        this.loading = true;
        try {
            await newsAgent.Newss.delete(newsId);
            runInAction(() => {
                this.newss = [...this.newss.filter(n => n.newsId !== newsId)];
                if (this.selectedNews?.newsId === newsId) this.cancelSelectedNews;
                this.loading = false;
            })
        }catch (error) {
            console.log(error);
            runInAction(() => {
                
                this.loading = false;
            })
        }
    }
}