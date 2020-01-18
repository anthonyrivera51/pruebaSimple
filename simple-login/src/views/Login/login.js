import axios from 'axios';

export default {
    name: 'Login',
    data() {
        return {
            input: {
                username: "",
                password: ""
            }
        }
    },
    methods: {
        login() {
            if (this.input.username != "" && this.input.password != "") {
                axios
                    .post('http://localhost:63564/api/Login', { username: this.input.username, password: this.input.password })
                    .then(result => {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "User" });
                        this.$localStorage.set('token', result.data.token);
                    })
                    .catch(error => {
                        alert("The username and / or password is incorrect");
                        console.error(error);
                        this.input.username = "";
                        this.input.password = "";
                    })
                    // if (this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                    //     this.$emit("authenticated", true);
                    //     this.$router.replace({ name: "User" });
                    // } else {
                    //     console.log("The username and / or password is incorrect");
                    // }
            } else {
                console.log("A username and password must be present");
            }
        }
    }
}