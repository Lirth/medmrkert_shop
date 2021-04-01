<template>
    <div class="wrapper" style="margin-bottom: 30px; border-bottom: 1px solid #EDEDED;">
        <header class="header_link_wrapper">
            <div class="container">
                <ul class="upper_link_wrapper">
                    <li :class="item.class" v-for="(item, index) in items" :key="index">
                        <a :href="item.href" :target="item.target">{{ item.text }}</a>
                    </li>
                </ul>
            </div>
        </header>
        <div class="container">
            <ul class="navbar_wrapper">
                <li v-for="(item, index) in navbar" :key="index">
                    <router-link :to="item.href" :target="item.target">{{ item.text }}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script src="./header.js"></script>
<style scoped src="./header.scss" lang="scss"></style>