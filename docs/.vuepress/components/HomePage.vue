<template>
    <div class="is-center">
        <a class="doc-img" data-fancybox title="这是组件图片" href="/bg.png">
            <img src="/bg.png" alt="这是组件图片">
        </a>
    </div>
</template>
<script>
export default {
    name: 'HomePage',
    data() {
        return {};
    },
    mounted() {},
    components: {},
    methods: {},
    computed: {},
    watch: {},
};
</script>
<style scoped>
.is-center {
    width: 100%;
    margin-top: 50px;
    text-align: center;
    padding-top: 50px;
    cursor: pointer;
}
</style>