class Youtube {
    constructor(key){
        this.key = key;
        this.requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        
    }

    async search(query){
            const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&type=video&q=${query}&key=${this.key}`,this.requestOptions);
            const result = await response.json();
            return result.items.map(item => ({ ...item, id: item.id.videoId}))
    }
}

export default Youtube;

