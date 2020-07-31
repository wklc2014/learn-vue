<template>
    <section>
        <div class="common foo-header">
            <slot name="header" v-bind:user="a1"></slot>
        </div>
        <div class="common foo-body">
            <slot name="body"></slot>
        </div>
        <div class="common foo-footer">
            <slot name="footer"></slot>
        </div>
        <div class="common">
            <slot></slot>
        </div>
    </section>
</template>

<script>
    export default {
        data: function() {
            return {
                a1: '111',
                a2: '222',
                a3: '333',
                a4: '444',
            }
        }
    }
</script>

<style lang="less" scoped>
    .common {
        padding: 16px;
    }
    .foo-header {
        color: #f00;
    }
    .foo-body {
        color: #f617c7;
    }
    .foo-footer {
        color: #148c5a;
    }
</style>
