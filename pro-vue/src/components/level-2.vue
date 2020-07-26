<template>
    <div class="level-2">
        <h2>level-2</h2>
        <button class="btn" @click="increase(5)">+ {{amount}}</button>
        <button class="btn" @click="decrease(2)">- {{amount}}</button>
        <p>{{message}}</p>
        <level-3></level-3>
    </div>
</template>

<script>
    import { mapState, mapGetters, mapMutations } from 'vuex';
    import Level3 from './level-3.vue';
    export default {
        components: {
            Level3,
        },
        computed: {
            ...mapState({
                amount: state => state.cart.amount,
            }),
            ...mapGetters('cart', {
                message: 'getMessage',
            })
        },
        methods: {
            ...mapMutations('cart', {
                increase: 'AMOUNT_INCREASE',
                decrease: 'AMOUNT_DECREASE',
            })
        },
        created: function() {
            this.$store.commit('cart/AMOUNT_DECREASE');
            // console.log('>>>', mapMutations('cart', {}));
        }
    }
</script>

<style scoped>
    .level-2 {
        padding: 16px;
        border: 1px solid #ddd;
    }
    .btn {
        padding: 8px 32px;
        margin-right: 8px;
    }
</style>
