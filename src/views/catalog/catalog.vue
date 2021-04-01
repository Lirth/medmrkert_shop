<template>
    <div>
        <section>
            <div class="container title_row">
                <title_page>Шовный материал</title_page>
                <p>19 товаров</p>
            </div>
            <div class="container catalog_box">
                <div class="sidebar_wrapper">
                    <div class="sidebar_title">
                        <h6>Фильтр</h6>
                        <button>
                            <svg style="margin-right: 3px;" width="18" height="18" viewBox="0 0 18 18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.1925 3.75L9 7.9425L4.8075 3.75L3.75 4.8075L7.9425 9L3.75 13.1925L4.8075 14.25L9 10.0575L13.1925 14.25L14.25 13.1925L10.0575 9L14.25 4.8075L13.1925 3.75Z"
                                      fill="#A8A8A8"/>
                            </svg>
                            Очистить фильтр
                        </button>
                    </div>
                    <div class="sidebar_item" :class="{ 'active' : isActive }">
                        <div class="sidebar_item_showsettings"  @click="showFilter">
                            <h6>Категория товара</h6>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 13V19H11V13H5V11H11V5H13V11H19V13H13Z"/>
                            </svg>
                        </div>
                        <div class="sidebar_filter_settings">
                            <div class="input_group">
                                <input type="text" placeholder="от 100">
                                <input type="text" placeholder="от 16999">
                            </div>
                            <div class="checkbox" v-for="items in 1">
                                <input class="custom-checkbox" type="checkbox" id="color-1" name="color-1" value="indigo">
                                <label for="color-1">Пункт №1</label>
                            </div>
                        </div>
                    </div>
                    <div class="sidebar_apply"  :class="{ 'active' : isActive }">
                        <btn_large class="btn_apply">Применить</btn_large>
                    </div>
                </div>
                <div class="catalog_container">
                    <div class="carousel_container" v-for="item in 10">
                        <div class="carousel_wrapper" ref="carousel">
                            <div ref="carousel_item" class="carousel_item">
                                <product_item></product_item>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script src="./catalog.js"></script>
<style src="./catalog.scss" lang="scss" scoped></style>
<style src="../../components/elements/carousel/carousel.scss" lang="scss"></style>