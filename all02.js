const app = Vue.createApp({
    data(){
        return{
            name: ["同學","小美"],
            link: "https://github.com/charleneLiao",
            todos: ["廁所清潔","洗手台清潔","補充衛生紙"],
        };
    },
});

app.mount("#app");