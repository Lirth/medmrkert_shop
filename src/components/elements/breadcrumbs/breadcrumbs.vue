<template>
    <div class="breadcrumbs_container">
        <a href="/" class="main-link">Главная</a>
        <span class="child-link">-</span>
        <a href="" class="child-link">
            <slot></slot>
        </a>
    </div>
</template>

<script>
    export default {
        name: "breadcrumbs"
    }
</script>

<style scoped lang="scss">
    .breadcrumbs_container {
        display: flex;
        align-items: center;
        grid-gap: 6px;

        .main-link {
            font-family: Ubuntu;
            font-style: normal;
            font-weight: normal;
            font-size: 13px;
            line-height: 15px;
            text-decoration-line: underline;
            color: #42B1A8;
        }

        .child-link {
            font-family: Ubuntu;
            font-style: normal;
            font-weight: normal;
            font-size: 13px;
            line-height: 15px;
            color: #181818;
        }
    }
</style>