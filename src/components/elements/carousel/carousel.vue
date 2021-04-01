<template>
    <div class="examples_slides_wrapper">
        <div class="nav_row_carousel">
            <title_section class="title_section_discount">Выгодно со скидкой</title_section>
            <div class="nav_row_focus">
                <a href="/catalog" class="showAll">
                    <span>Просмотреть все предложения</span>
                    <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6.99942L1.71394 0L0 1.64678L5.57576 7.00408L0 12.3532L1.71394 14L9 6.99942Z"
                              fill="#42B1A8"/>
                    </svg>
                </a>
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
        </div>
        <div class="carousel_container">
            <div class="carousel_wrapper" ref="carousel" :key="current">
                <div ref="carousel_item" class="carousel_item" v-for="(item, index) in array"
                     :key="item*1222+index*321">
                    <product_item></product_item>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./carousel.js"></script>
<style src="./carousel.scss" scoped lang="scss"></style>
