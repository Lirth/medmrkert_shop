<template>
    <div class="btn_large">
        <a href="/catalog" class="">
            <button class="">
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
        display: flex;
        align-items: center;
        text-align: center;
        padding: 10px 20px;
        height: 44px;
        background: #43B1A8;
        border-radius: 4px;
        cursor: pointer;
        white-space: nowrap;
        justify-content: center;
    }
    button {
        border: 0;
        font-family: Ubuntu;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        background: 0;
        line-height: 24px;
        color: #FFFFFF;
    }
    a:hover {
        text-decoration: none !important;
    }
</style>