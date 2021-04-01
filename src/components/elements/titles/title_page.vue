<template>
    <div class="title_page"><h2 class=""><slot></slot></h2></div>
</template>

<script>
    export default {
        name: "title_page"
    }
</script>

<style scoped lang="scss">
    .title_page {
        margin-bottom: 40px;
        h2 {
            font-family: Ubuntu;
            font-style: normal;
            font-weight: 500;
            font-size: 38px;
            line-height: 130%;
            color: #000000;
        }
        @media (max-width: 768px) {
            margin-bottom: 30px;
            h2 {
                font-size: 26px;
            }
        }
    }
</style>