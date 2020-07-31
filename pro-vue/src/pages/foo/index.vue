<template>
    <div>
        <h2>Foo Page</h2>
        <input v-model="text" />
        <base-foo>
            <template v-slot:[name]="data">
                {{msg}} view {{data.user}}
            </template>
        </base-foo>
    </div>
</template>

<script>
    import BaseFoo from '@components/base-foo.vue';
    export default {
        components: {
            'base-foo': BaseFoo,
        },
        data: function() {
            return {
                msg: '动态内容',
                text: 'header',
            }
        },
        computed: {
            name: function() {
                const { text } = this;
                if (text === 'header' || text === 'body' || text === 'default' || text === 'footer') {
                    return text;
                }
                return 'default';
            }
        }
    }
</script>

<style lang="less" scoped>

</style>
