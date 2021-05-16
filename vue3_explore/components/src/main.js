import { createApp } from 'vue';
import App from './App.vue';
// import Greeting from './components/Greeting.vue';

const vm = createApp(App);

// load component gloabaly
// vm.component('Greeting', Greeting);

vm.mount('#app');
