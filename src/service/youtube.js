class Youtube {
    constructor(key){
        this.key = key;
        this.requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        
    }

    search(query){
        return(
            fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&type=video&q=${query}&key=${this.key}`,this.requestOptions)
            .then(response => response.json())
            .then(result => 
                result.items.map(item => ({ ...item, id: item.id.videoId}))
            )
            .catch(error => console.log('error', error)
            )
        )
    }
}

export default Youtube;

