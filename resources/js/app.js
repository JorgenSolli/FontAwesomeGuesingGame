
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key)))

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

window.icons = require('./icons.js');

const app = new Vue({
    el: '#app',
    data: {
        currentIcon: '',
        currentIconName: '',
        iconGuess: '',
        iconType: 'fal',
        icons: '',
        points: 0,
        goal: 20,
    },
    methods: {
        checkGuess() {
            if (this.currentIconName == this.iconGuess) {
                this.iconGuess = '';
                this.getRandomIcon();
                this.points++;
            }
        },
        getRandomIcon() {
            let type, icon, iconNr;
            let icons = this.icons;

            if (Math.random() < 0.3) {
                iconNr = Math.floor(Math.random() * icons.length) + 1
                icon = icons[iconNr]

                this.currentIcon = "fab fa-" + icon.class;
            } else {
                iconNr = Math.floor(Math.random() * icons.length) + 1
                icon = icons[iconNr]

                this.currentIcon = this.iconType + " fa-" + icon.class;
            }

            this.currentIconName = icon.name;
        },
    },
    mounted() {
        let iconClass = window.icons;
        this.icons = new iconClass.IconSet;
        this.getRandomIcon();
    }
});