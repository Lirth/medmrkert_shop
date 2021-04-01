<template>
    <div>
        <a href="/">
            <button class="btn_large">
                <slot></slot>
            </button>
        </a>
    </div>
</template>

<script>
    export default {
        name: "btn_large"
    }
</script>

<style scoped>
    .btn_large {
        background: #42B1A8;
        border-radius: 4px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 7.58969px 19.3959px;
        border: 0;
        font-family: Ubuntu;
        font-style: normal;
        font-weight: 500;
        font-size: 13.4928px;
        line-height: 20px;
        color: #FFFFFF;
        grid-gap: 8.43px;
    }
</style>