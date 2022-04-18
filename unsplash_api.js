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
    
    async getRandomImage () {
        
        try {
            const getImage = await this.axiosNesne.get('/photos/random');
            console.log(getImage.data.urls.regular);
            return getImage.data.urls.regular;
            
        } catch (err) {
            console.log(err);
            return 'https://www.wpblog.com/wp-content/uploads/2018/02/4-580x318-1280x720.jpg';
        }
    }
}