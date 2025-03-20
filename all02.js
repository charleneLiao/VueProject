const app = Vue.createApp({
    data(){
        return{
            name: ["同學","小美"],
            link: "https://github.com/charleneLiao",
            todos: ["廁所清潔","洗手台清潔","補充衛生紙"],
            books: ["世界上最透明的故事",
                "別對每件事都有反應【2025限量暢銷特典版】：淡泊一點也無妨，活出快意人生的99個禪練習！",
                "現象在一念之間改變 「量子力學式」平行世界的法則"],
            showAnswer: false,
            countDown: 5,
            timer: null,
        };
    },
    computed: {
        label(){
            return this.showAnswer ? "隱藏答案" + this.countDown
            : "顯示答案";
        },
    },
    methods: {
        toggleAnswer(){
            this.showAnswer = !this.showAnswer;
        },
    },
    watch: {
        showAnswer(newVal,oldVal){
            if(newVal){
                this.countDown = 5;
                if(this.timer){
                    clearInterval(this.timer);
                    this.timer = null;
                }
                this.timer = setInterval(() => {
                    this.countDown -= 1;
                    if(this.countDown === 0){
                        this.showAnswer = false;
                        clearInterval(this.timer);
                        this.timer = null;
                    }
                }, 1000)
            }
        }
    },
});

app.mount("#app");