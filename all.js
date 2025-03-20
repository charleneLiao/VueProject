const Playlist = {
    data(){
        return{
            playlist:["我會等 - 承桓","Flowers- Miley Cyrus","Peaches - Justin Bieber"],
            searchTerm:"",
        };
    },
    computed:{
        filteredPlaylist(){
            if (this.searchTerm){
                return this.playlist.filter((song) => 
                    song.toLowerCase().includes(this.searchTerm.toLowerCase())
                );
            }
            else{
                return this.playlist;
            }
        },
    },
};
Vue.createApp(Playlist).mount("#app");