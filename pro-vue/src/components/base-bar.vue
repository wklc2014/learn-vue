<template>
    <section
        class="child1 child2"
        style="border: 1px solid #ddd;"
        text="子组件text属性"
    >
        一些内容！！！
    </section>
</template>

<script>
    export default {
        inheritAttrs: false,
        props: ['name'],
        data: function() {
            return {
                a1: '111',
                a2: '222',
                a3: '333',
                a4: '444',
            }
        },
        created: function() {
            console.error('this>>>', this.$attrs);
        }
    }
</script>

<style lang="less" scoped>

</style>
