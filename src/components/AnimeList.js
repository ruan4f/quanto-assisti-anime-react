import React, { Component } from 'react'
import AnimeItem from './AnimeItem'
import axios from 'axios'
import fire from '../fire'

class AnimeList extends Component {
    constructor(props, context) {
        super(props, context)

        this.state = { items: [] }
    }

    componentWillMount() {
        this.setState({ items: [] })
    }

    componentDidMount() {
        /* Create reference to messages in Firebase Database */
        let messagesRef = fire.database().ref('animes').orderByKey().limitToLast(100)
        messagesRef.once('value').then(snapshot => {
            /* Update React state when message is added at Firebase Database */            
            let anime = snapshot.val()
            let animes = []
            
            for (var key in anime) {
                if (anime.hasOwnProperty(key)) {
                    var element = anime[key]
                    element.key = key
                    animes.push(element)
                }
            }
            this.setState({ items: animes })
        })
    }

    searchAnimes(id) {
        const urlCredentials = 'https://anilist.co/api/auth/access_token?grant_type=client_credentials&client_id=ruanfs-6yfhu&client_secret=TFBfZr50AlYRvlmoTaTcRhky'
        //const urlSearchAnimes = `https://anilist.co/api/anime/`
        //var itemArray = []

        axios.post(urlCredentials)
            .then(resp => {
                // const url = urlSearchAnimes + listIds[index]
                // axios.get(url, { headers: { authorization: 'Bearer ' + resp.data.access_token } })
                //     .then(resp1 => {
                //         console.log(resp1)
                //         var element = resp1.data;
                //         itemArray.unshift(
                //             {
                //                 key: element.id,
                //                 image_url_med: element.image_url_med,
                //                 title_romaji: element.title_romaji,
                //                 total_episodes: element.total_episodes,
                //             }
                //         );
                //     })
                //     .catch(error => { console.log(error) })
            })
            .catch(error => { console.log(error) })
    }

    addEpisode(key){

    }

    removeEpisode(key){

    }

    render() {        
        return (
            <div>
                <AnimeItem items={this.state.items} />
            </div>
        )
    }
}

export default AnimeList