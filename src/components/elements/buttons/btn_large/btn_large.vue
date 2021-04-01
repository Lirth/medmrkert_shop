<template>
    <div>
        <a href="/catalog">
            <button class="btn_small">
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
    .btn_small {
        font-family: Ubuntu;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #FFFFFF;
        padding: 10px 20px;
        height: 44px;
        background: #43B1A8;
        border-radius: 4px;
        border: 0;
        cursor: pointer;
        white-space: nowrap;
    }
</style>