<template>
    <div>
        <a href="/">
            <button class="btn_small_empty" disabled>
                <slot></slot>
            </button>
        </a>
    </div>
</template>

<script>
    export default {
        name: "btn_small_empty"
    }
</script>

<style scoped>
    .btn_small_empty {
        background: #F3F3F3;
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
        text-align: center;
        color: rgba(24, 24, 24, 0.55);
        cursor: auto;
    }
</style>