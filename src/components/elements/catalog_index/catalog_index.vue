<template>
    <div>
        <title_section>Каталог товаров</title_section>
        <div class="catalog_index_wrapper">
            <div class="catalog_index_item" v-for="item in 4">
                <div class="catalog_index_item_box">
                    <ul>
                        <li><a href="/catalog">Мочеточнековые стенты</a></li>
                        <li><a href="/catalog">Нефростомия</a></li>
                        <li><a href="/catalog">Цистостомы мочевого пузыря</a></li>
                        <li><a href="/catalog">Катетеры фолея</a></li>
                    </ul>
                    <div class="bg_image_item_1"></div>
                </div>
                <div class="title_item_row">
                    <h4>Урология UROTECH</h4>
                    <p>23 товаров</p>
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
        }
    }
</script>

<style scoped lang="scss">
    .catalog_index_item_box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        overflow: hidden;
        max-height: 221px;
        box-shadow: 0px 4px 12px rgba(51, 51, 51, 0.06);
        background: #FFFFFF;
        border-radius: 6px;
        @media (max-width: 768px) {
            max-height: 141px;
        }
    }

    .catalog_index_wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 20px;
        grid-row-gap: 41px;
        margin-top: 30px;
        @media (max-width: 1200px) {
            grid-template-columns: 1fr;
        }
        @media (max-width: 768px) {
            margin-top: 12px;
            grid-row-gap: 21px;
        }
    }

    .catalog_index_item {
        overflow: hidden;
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;

        ul {
            display: flex;
            flex-direction: column;
            row-gap: 12px;
            margin-left: 52px;
            min-width: 253px;
            @media (max-width: 768px) {
                margin-left: 12px;
                min-width: 163px;
                row-gap: 8px;
            }
        }

        li {
            list-style: none;

            a {
                font-family: Ubuntu;
                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                line-height: 16px;
                color: #181818;
                @media (max-width: 768px) {
                    font-size: 12px;
                    line-height: 12px;
                }
            }
        }
    }

    .bg_image_item_1 {
        min-width: 513px;
        min-height: 513px;
        background: url('../../../../public/images/catalog1.png');
        background-size: 100%;
        background-position: left;
        background-repeat: no-repeat;
        border-radius: 100% 0 0 100%;
        @media (max-width: 576px) {
            min-width: 373px;
            min-height: 373px;
        }
    }

    .bg_image_item_2 {
        min-width: 513px;
        min-height: 513px;
        background: url('../../../../public/images/catalog2.png');
        background-size: 100%;
        background-position: left;
        background-repeat: no-repeat;
        border-radius: 100% 0 0 100%;
        @media (max-width: 576px) {
            min-width: 253px;
            min-height: 253px;
        }
    }

    .bg_image_item_3 {
        min-width: 513px;
        min-height: 513px;
        background: url('../../../../public/images/catalog3.png');
        background-size: 100%;
        background-position: left;
        background-repeat: no-repeat;
        border-radius: 100% 0 0 100%;
        @media (max-width: 576px) {
            min-width: 253px;
            min-height: 253px;
        }
    }

    .bg_image_item_4 {
        min-width: 513px;
        min-height: 513px;
        background: url('../../../../public/images/catalog4.png');
        background-size: 100%;
        background-position: left;
        background-repeat: no-repeat;
        border-radius: 100% 0 0 100%;
        @media (max-width: 576px) {
            min-width: 253px;
            min-height: 253px;
        }
    }

    .title_item_row {
        display: grid;
        grid-template-columns: 1fr 195px;
        grid-gap: 20px;
        @media (max-width: 768px) {
            display: flex;
            justify-content: space-between;
        }

        h4 {
            font-family: Ubuntu;
            font-style: normal;
            font-weight: normal;
            font-size: 27px;
            line-height: 31px;
            color: #181818;
            height: 93px;
            display: flex;
            align-items: center;
            white-space: nowrap;
            @media (max-width: 768px) {
                font-size: 18px;
                height: 43px;
            }
        }

        p {
            font-family: Ubuntu;
            font-style: normal;
            font-weight: 300;
            font-size: 18px;
            line-height: 21px;
            display: flex;
            align-items: center;
            color: #7E7979;
            white-space: nowrap;
            @media (max-width: 768px) {
                font-size: 12px;
            }
        }

    }
</style>