<template>
    <div class="contact">
        <div class="container">
            <div class="text-block">
                <h1 class="title">Narmalni toldir </h1>
                <p class="auf">shunyam bilmasen uyat lekn!</p>
            </div>
            <div class="wrapper">
                <form method="post" @submit.prevent="submit" class="left">
                    <input v-model="fullName" type="text" placeholder="Your Name">
                    <input v-model="number" type="number" placeholder="Your phone number">
                    <input v-model="email" type="email" placeholder="Your e-mail">
                    <textarea v-model="message" placeholder="Message" />
                    <button class="btn">Send</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'ContactView',
    data() {
        return {
            fullName: '',
            number: '',
            email: '',
            message: '',
            token: '5430167178:AAH3UulVLr7QqM8lh6uto_NtGMsDHaptL1Y',
            chatId: 1439109027
        }
    },
    methods: {
        submit() {
            const fullMessage = `name: ${this.fullName} %0Anumber:${this.number} %0Aemail:${this.email} %0Amessage:${this.message}`

            axios.post(`https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chatId}&text=${fullMessage}`)
                .then(response => {
                    console.log('Success', response)
                    this.fullName = ''
                    this.number = ''
                    this.email = ''
                    this.message = ''
                }, error => {
                    console.log(error)
                })
        }
    }
}
</script>

<style scoped lang="scss">
.contact {
    width: 100%;
    padding: 30px 0 33px 0;

    background: url("../assets/back.webp") no-repeat center / cover;
    position: relative;
}

.text-block {
        margin: 3rem;
    
    .auf {
        font: sans-serif;
        color: #000;
        font-size: 15px;
    }
}

.contact:after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

}

.contact .wrapper .left {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 40px 0 30px;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    z-index: 99;
}

.contact input {
    width: 40%;
    color: #000;
    background: transparent;
    border: 1px solid #000;
    border-radius: 10px;
    outline: none;
    padding: 20px;
}

.contact textarea {
    width: 40%;
    height: 100px;
    padding: 20px;
    background: transparent;
    color: #000;
    border: 1px solid #000;
    border-radius: 10px;
}

.contact .button {
    position: relative;
    z-index: 99;
    width: 100%;
    display: flex;
}

.contact .btn {
    color: #000;
    background: transparent;
    border-radius: 10px;
    border: 1px solid #000;
    outline: none;
    cursor: pointer;
    padding: 15px 35px;
    margin: auto;
}

@media screen and (max-width: 768px) {
    .contact :is(input, textarea) {
        width: 70%;
    }
}
</style>