<template>
    <div id="start">
        <div id="score">
            Score: {{ score }}
        </div>

        <div id="icon-container">
            <i :class="currentIcon" id="current-icon"></i>
        </div>

        <div id="controllers">
            <div v-model="answer" class="answer"></div>
            <div class="ui huge fluid input">
                <input v-on:keyup="checkGuess" :disabled="didPass" v-model="iconGuess" id="icon-guess" type="text" placeholder="Go ahead...">
            </div>
            <button @click="passIcon" :class="passIconClass" class="mt-15 ui huge fluid button">
                <span v-if="didPass">The answer was {{ answer }}</span>
                <span v-else>Pass</span>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                passIconClass: '',
                currentIcon: '',
                currentIconName: '',
                iconGuess: '',
                iconType: 'fal',
                didPass: false,
                answer: null,
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
                if (!this.didPass) {
                    this.iconGuess = '';
                    this.answer = this.currentIconName;
                    this.passIconClass = "negative";
                    this.showAnswer();
                    this.getRandomIcon();
                }
            },
            showAnswer() {
                this.didPass = true;

                setTimeout(() => {
                    this.didPass = false;
                    this.passIconClass = '';
                }, 3000);
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
            window.addEventListener("keypress", (e) => {
                if (e.key == "P") {
                    e.preventDefault()
                    this.passIcon()
                }
            });
        }
    }
</script>
