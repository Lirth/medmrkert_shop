<template>
    <div class="btn_catalog_wrapper">
        <button class="btn_catalog" @click="onBtn">
            <span class="catalog_icon">
                <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.333496" width="16" height="1.52381" fill="white"/>
                </svg>
                <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.333496" width="16" height="1.52381" fill="white"/>
                </svg>
                <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.333496" width="16" height="1.52381" fill="white"/>
                </svg>
            </span>
            <slot></slot>
        </button>
        <transition name="slide-fade">
            <div class="btn_catalog_dropdown" v-if="DROPDOWN_STATE">
                <div class="container">
                    <div>catalog_1</div>
                </div>
            </div>
        </transition>

    </div>
</template>

<script src="./btn_catalog.js"></script>
<style scoped src="./btn_catalog.scss" lang="scss"></style>