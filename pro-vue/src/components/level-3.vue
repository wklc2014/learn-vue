<template>
    <div class="level-3">
        <h3>level-3</h3>
        <p>{{message}}</p>
        <level-4></level-4>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import Level4 from './level-4.vue';
    export default {
        components: {
            Level4,
        },
        computed: mapState({
            message: state => state.cart.message,
        })
    }
</script>

<style scoped>
    .level-3 {
        padding: 16px;
        border: 1px solid #ddd;
    }
</style>
