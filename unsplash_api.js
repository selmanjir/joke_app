class UnsplashApi{
    constructor() {
        
        this.baseURL = 'https://api.unsplash.com';
        this.clientID = 'Client-ID TnDSfOYIUWI4DfKIvY3KwaAZzOEycnooLvNrqAUWevc'
        this.axiosNesne = axios.create({
            baseURL : this.baseURL,
            headers : {
                Authorization : this.clientID
            }
        });
    }
    
    async randomResimGetir () {
        
        try {
            const resimResponse = await this.axiosNesne.get('/photos/random');
            console.log(resimResponse.data.urls.regular);
            return resimResponse.data.urls.regular;
            
        } catch (err) {
            console.log(err);
            return 'https://www.wpblog.com/wp-content/uploads/2018/02/4-580x318-1280x720.jpg';
        }
    }
}