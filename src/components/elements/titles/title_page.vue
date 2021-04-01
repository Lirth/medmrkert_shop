<template>
    <div><h2 class="title_page"><slot></slot></h2></div>
</template>

<script>
    export default {
        name: "title_page"
    }
</script>

<style scoped lang="scss">
    .title_page {
        font-family: Ubuntu;
        font-style: normal;
        font-weight: 500;
        font-size: 38px;
        line-height: 130%;
        color: #000000;
        @media (max-width: 768px) {
            font-size: 21px;
        }
    }
</style>