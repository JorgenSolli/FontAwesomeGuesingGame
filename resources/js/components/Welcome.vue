<template>
    <div id="game">
        <button @click="startGame">Let's go!</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {
            startGame() {
                this.$parent.isGaming = true
            }
        }
    }
</script>
