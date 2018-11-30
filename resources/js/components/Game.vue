<template>
    <div id="start">
        <div id="score">
            Score: {{ score }}
        </div>

        <div id="icon-container">
            <i :class="currentIcon" id="current-icon"></i>
        </div>

        <div id="controllers">
            <div class="ui huge fluid input">
                <input v-on:keyup="checkGuess" v-model="iconGuess" id="icon-guess" type="text" placeholder="Go ahead...">
            </div>
            <button @click="passIcon" class="mt-15 ui huge fluid button">Pass</button>
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
            passIcon() {
                this.getRandomIcon();
            },
            getRandomIcon() {
                let type, icon, iconNr;
                let icons = this.$parent.icons;

                iconNr = Math.floor(Math.random() * icons.length) + 1
                icon = icons[iconNr]

                if (icon.type == "brand") {
                    this.currentIcon = "fab fa-" + icon.class;
                } else {
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
