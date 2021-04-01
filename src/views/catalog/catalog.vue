<template>
    <div>
        <section class="breadcrumbs_margins">
            <div class="container">
                <breadcrumbs>Каталог</breadcrumbs>
            </div>
        </section>
        <section>
            <button @click="showFilterMobile" class="filtBtnMobile">Фильтры</button>
            <div class="container catalog_box" >
                <div class="sidebar_wrapper" style="overflow: auto" :class="{ 'active' : isActive2 }">
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
                    <div class="sidebar_item" v-for="item in 5" :class="{ 'active' : isActive }">
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
                <div style="">
                    <div class="container title_row">
                        <title_page class="title_page_this">Шовный материал</title_page>
                        <p>19 товаров</p>
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
                    <div>
                        <div class="pagination_container">
                            <button class="prev-page">
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.76087" y="0.76087" width="34.4783" height="34.4783" rx="3.80435" stroke-width="1.52174"/>
                                    <path d="M20.3995 9.146L11.8223 17.9999L20.3995 26.8538L21.8299 25.3783L14.681 17.9999L21.8299 10.6215L20.3995 9.146Z"/>
                                </svg>
                            </button>
                            <div style="display:flex; grid-gap: 6px; align-items: flex-end">
                                <button class="page-count" v-for="(item, index) in 2">{{index + 1}}</button>
                                <button class="page-count page-count-mobile" v-for="(item, index) in 4">{{index + 4}}</button>
                                <svg style="margin: 0 11px;" width="17" height="3" viewBox="0 0 17 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="1.375" cy="1.375" r="1.375" fill="#181818" fill-opacity="0.55"/>
                                    <circle cx="8.125" cy="1.375" r="1.375" fill="#181818" fill-opacity="0.55"/>
                                    <circle cx="14.875" cy="1.375" r="1.375" fill="#181818" fill-opacity="0.55"/>
                                </svg>
                                <button class="page-count active">284</button>
                            </div>
                            <button class="next-page" disabled>
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.76087" y="0.76087" width="34.4783" height="34.4783" rx="3.80435" stroke-width="1.52174"/>
                                    <path d="M20.3995 9.146L11.8223 17.9999L20.3995 26.8538L21.8299 25.3783L14.681 17.9999L21.8299 10.6215L20.3995 9.146Z"/>
                                </svg>
                            </button>
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