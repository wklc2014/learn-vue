<template>
    <div class="level-4">
        <h4>level-4</h4>
        <p>{{message}}</p>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        computed: mapState({
            message: function(state) {
                return state.cart.amount;
            }
        })
    }
</script>

<style scoped>
    .level-4 {
        padding: 16px;
        border: 1px solid #ddd;
    }
</style>
