<template>
    <div class="wrapper">
        <header class="header_link_wrapper">
            <div class="container">
                <ul class="upper_link_wrapper">
                    <li :class="item.class" v-for="(item, index) in items" :key="index">
                        <a :href="item.href" :target="item.target">{{ item.text }}</a>
                    </li>
                </ul>
            </div>
        </header>
        <header style="position: relative">
            <div class="container" style="z-index: 2;">
                <div class="search_row">
                    <logo></logo>
                    <btn_catalog>Каталог</btn_catalog>
                </div>
            </div>
        </header>
        <header class="header_nav_wrapper">
            <div class="container">
                <ul class="navbar_wrapper">
                    <li v-for="(item, index) in navbar" :key="index">
                        <router-link :to="item.href" :target="item.target">{{ item.text }}</router-link>
                    </li>
                </ul>
            </div>
        </header>
    </div>
</template>

<script src="./header.js"></script>
<style scoped src="./header.scss" lang="scss"></style>