<template>
    <div id="welcome">
        <div id="header">
            <h1>The <strong>Font Awesome</strong> Icon Game</h1>
        </div>

        <button @click="startGame" class="ui huge teal button">Let's go!</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            startGame() {
                this.$parent.isLoading = 'is-flipped';

                setTimeout(() => {
                    this.$parent.isGaming = true;
                }, 400);
            }
        }
    }
</script>
