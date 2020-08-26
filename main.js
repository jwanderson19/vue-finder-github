var app = new Vue({
    el:"#app",

    data:{
       search : '',
        avatar:'',
        repositories:'',
        followers:'',
        following:''

    },
    methods:{
        apiSearch: function(){
            fetch(`https://api.github.com/users/${this.search}`)
            .then(response =>{
                response.json()
                .then(data =>{
                    this.avatar = data.avatar_url
                    this.followers = data.followers
                    this.following = data.following
                    this.avatar = data.avatar_url
                    
                    fetch(data.repos_url).then(res=>{
                        res.json().then(dat=>{
                            this.repositories = dat.length
                           
                            console.log(dat)
                        })
                    })
                    console.log(data)
                    return data
                })
            }).catch(error =>{
                console.error(error)
            })
        }
    }
});