<template>
    <div id="start">
        <div id="score">{{ score }}</div>

        <div id="icon-container">
            <i :class="currentIcon" id="current-icon"></i>
        </div>

        <div id="controllers">
            <div class="ui huge input">
                <input v-on:keyup="checkGuess" v-model="iconGuess" id="icon-guess" type="text" placeholder="Go ahead...">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                currentIcon: '',
                currentIconName: '',
                iconGuess: '',
                iconType: 'fal',
                score: 0,
                goal: 20,
            }
        },
        methods: {
            checkGuess() {
                if (this.currentIconName == this.iconGuess) {
                    this.iconGuess = '';
                    this.getRandomIcon();
                    this.score++;
                }
            },
            getRandomIcon() {
                let type, icon, iconNr;
                let icons = this.$parent.icons;

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
            this.getRandomIcon();
        }
    }
</script>
