<template>
    <div class="level-1">
        <h1>level-1</h1>
        <level-2></level-2>
    </div>
</template>

<script>
    import Level2 from './level-2.vue';
    export default {
        components: {
            Level2,
        },
        created: function() {
            // console.log('this.$store>>>', this.$store);
        }
    }
</script>

<style scoped>
    .level-1 {
        padding: 16px;
        border: 1px solid #ddd;
    }
</style>
