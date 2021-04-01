<template>
    <div class="examples_slides_wrapper">
        <div class="carousel_container">
            <div class="carousel_wrapper" ref="carousel" :key="current">
                <div ref="carousel_item" class="carousel_item bg_image_1" v-for="(item, index) in array"
                     :key="item*1222+index*321">
                    <template v-if="item === 1">
                        <h1>ETHICON</h1>
                        <h2>Шовный материал</h2>
                        <div class="bg_placeholder">
                            <a href="">VICRYL</a> •
                            <a href="">MONOCRYL</a> •
                            <a href="">PDS II</a> •
                            <a href="">VICRYL PLUS</a> •
                            <a href="">VICRYL RAPIDE</a> •
                            <a href="">MONOCRYL PLUS</a> •
                            <a href="">PDS PLUS</a> •
                            <a href="">PROLENE</a> •
                            <a href="">ETHIBOND EXCEL</a> •
                            <a href="">ETHILON</a> •
                            <a href="">NUROLON</a> •
                            <a href="">PRONOVA</a> •
                            <a href="">MERSILENE</a>
                        </div>
                        <btn_large class="btn_slideinfo">Открыть каталог</btn_large>
                    </template>
                </div>
            </div>
        </div>
        <div class="nav_slider_button_group">
            <button :disabled="disabled" @click="prev" class="btn_prev" ref="btn_prev">
                <svg width="15" height="26" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.4658 0.210936L0.0764286 12.9999L12.4658 25.7889L14.5319 23.6577L4.20572 12.9999L14.5319 2.34218L12.4658 0.210936Z"/>
                </svg>
            </button>
            <button :disabled="disabled" @click="next" class="btn_next" ref="btn_next">
                <svg width="15" height="26" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.53425 25.7891L14.9236 13.0001L2.53425 0.211092L0.468147 2.34234L10.7943 13.0001L0.468147 23.6578L2.53425 25.7891Z"/>
                </svg>
            </button>
        </div>
    </div>
</template>

<script src="./indexSlider.js"></script>
<style src="./indexSlider.scss" scoped lang="scss"></style>
