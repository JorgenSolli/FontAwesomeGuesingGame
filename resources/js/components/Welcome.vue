<template>
    <div id="welcome">
        <div id="header">
            <h1>The <strong>Font Awesome</strong> Icon Game</h1>
        </div>

        <div class="content">
            <div class="ui huge fluid input">
                <input v-model="nickname" type="text" placeholder="Nickname...">
            </div>
            <button @click="startGame" class="ui huge fluid teal button mt-15">Let's go!</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                nickname: ''
            }
        },
        methods: {
            startGame() {
                this.$parent.isLoading = 'is-flipped';
                this.$parent.nickname = this.nickname;

                setTimeout(() => {
                    this.$parent.isGaming = true;
                }, 400);
            }
        }
    }
</script>
