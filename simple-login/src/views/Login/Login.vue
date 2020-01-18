<template>
    <div id="login">
        <h1>Login</h1>
        <input type="text" class="form-control" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" class="form-control" name="password" v-model="input.password" placeholder="Password" />
        <input value="user:admin-pw:admin"  :disabled="true" type="text" class="form-control">
        <button type="button" v-on:click="login()">Login</button>

    </div>
</template>

<script src="./login.js"></script>

<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>