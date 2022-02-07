import axios from 'axios';
class Youtube {
    constructor(key){
        this.client = axios.create({
            baseURL : 'https://www.googleapis.com/youtube/v3',
            params : {key : key}
        })
        
    }

    async search(query){
        const response = await this.client.get('search',{
            params : {
                part : 'snippet',
                maxResults : 30,
                type : 'video',
                q : query,
            }
        });
        return response.data.items.map(item => ({ ...item, id: item.id.videoId}))
    }
}

export default Youtube;

