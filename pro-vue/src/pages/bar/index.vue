<template>
    <div>
        <h2>Bar Page</h2>
        <div class="box">
            <base-checkbox v-model="msg">是否定居</base-checkbox>
        </div>
        <div class="box">
            <button v-on:click="getUser">user {{amount}}</button>
        </div>
    </div>
</template>

<script>
    import BaseBar from '@components/base-bar.vue';
    import BaseCheckbox from '@components/base-checkbox.vue';
    import { mapState } from 'vuex';
    export default {
        components: {
            'base-bar': BaseBar,
            'base-checkbox': BaseCheckbox,
        },
        data: function() {
            return {
                msg: true,
                text: 'header',
            }
        },
        computed: {
            ...mapState('cart', {
                amount: state => state.amount,
            })
        },
        methods: {
            getUser: async function() {
                this.$store.dispatch('cart/addAmount');
            }
        }
    }
</script>

<style lang="less" scoped>
.box {
    padding: 16px;
}
</style>
