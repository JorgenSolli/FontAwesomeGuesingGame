<template>
    <div id="welcome">
        <button @click="startGame" class="ui huge teal button">Let's go!</button>
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
