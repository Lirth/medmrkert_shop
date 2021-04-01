<template>
    <div>
        <title_section class="title_catalog_index">Каталог товаров</title_section>
        <div class="catalog_index_wrapper">
            <div class="catalog_index_item" v-for="item in 4">
                <div class="catalog_index_item_box">
                    <ul>
                        <li>
                            <a href="/catalog/">Мочеточнековые стенты</a>
                        </li>
                        <li>
                            <a href="/catalog/">Нефростомия</a>
                        </li>
                        <li>
                            <a href="/catalog/">Цистостомы мочевого пузыря </a>
                        </li>
                        <li>
                            <a href="/catalog/">Катетеры фолея</a>
                        </li>
                    </ul>
                    <div class="radial_image bg_image_item_1">123</div>
                </div>
                <div class="catalog_index_subrow">
                    <a href="/catalog/">Урология UROTECH</a>
                    <a>23 товаров</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import title_section from "../titles/title_section.vue";

    export default {
        name: "catalog_index",
        components: {
            title_section,
        },
    }
</script>

<style scoped lang="scss" src="./catalog_index.scss"></style>