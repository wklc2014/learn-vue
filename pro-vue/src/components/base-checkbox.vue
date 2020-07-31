<template>
    <label class="form-label">
        <input
            class="form-control"
            type="checkbox"
            v-bind:checked="checked"
            v-on:input="onChange"
        />
        <slot></slot>
    </label>
</template>

<script>
    export default {
        model: {
            prop: 'checked',
            event: 'change',
        },
        props: ['checked'],
        data: function() {
            return {

            }
        },
        methods: {
            onChange: function(e) {
                console.error('e>>>', e.target.checked);
                this.$emit('input', e.target.checked);
                const msg = this.$parent.msg
                console.error('msg>>>', msg);
            }
        }
    }
</script>

<style lang="less" scoped>
.form-label {

}

.form-control {
    margin-right: 5px;
    position: relative;
    top: 1px;
}
</style>
