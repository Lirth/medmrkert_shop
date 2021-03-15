<template>
    <div id="app" class="window">
        <transition name="slide-fade2">
            <button @click="onBtn" class="modal-background" v-if="DROPDOWN_STATE"></button>
        </transition>

        <header style="z-index: 2">
            <header_section style="background: #ffffff;"></header_section>
        </header>
        <content_section>
            <router-view/>
        </content_section>
        <footer>
            <footer_section></footer_section>
        </footer>
    </div>
</template>

<style src="./app.scss" lang="scss"></style>
<style src="./app_grid.scss" lang="scss"></style>
<script src="./app.js"></script>
