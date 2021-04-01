<template>
    <div>
        <h5 class="title_section">
            <slot></slot>
        </h5>
    </div>
</template>

<script>
    export default {
        name: "title_section"
    }
</script>

<style scoped>
    .title_section {
        font-family: Ubuntu;
        font-style: normal;
        font-weight: normal;
        font-size: 21px;
        line-height: 24px;
        display: flex;
        align-items: center;
        color: #181818;
    }
</style>