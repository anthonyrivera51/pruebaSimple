import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLocalStorage from 'vue-localstorage'

Vue.config.productionTip = false
Vue.use(VueLocalStorage)
    // Or you can specify any other name and use it via this.$ls, this.$whatEverYouWant
Vue.use(VueLocalStorage, {
    name: 'ls',
    bind: true //created computed members from your variable declarations
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')