<template>
    <div>
        <section class="breadcrumbs_margins">
            <div class="container">
                <breadcrumbs>Контакты</breadcrumbs>
            </div>
        </section>
        <section style="margin-bottom: 30px;">
            <div class="container worktime-wrapper">
                <title_page style="margin: 0;">Контактная информация</title_page>
                <p class="worktime"><a>Режим работы:</a> Пн - Пт с 10:00 до 17:00</p>
            </div>
        </section>
        <section style="position: relative">
            <div class="container">
                <div class="content">
                    <div class="map_section" style="z-index: 3;">
                        <div class="contact_wrapper">
                            <div class="adr-wrapper" style="z-index: 2; position: relative">
                                <h6>Адрес</h6>
                                <a href="https://yandex.ru/maps/35/krasnodar/house/rashpilevskaya_ulitsa_144/Z0EYfwBmQUcFQFpvfXx1eH9hZg==/?ll=38.976823%2C45.049322&z=17.05" class="locate main">111250, Россия, г. Краснодар ул. Рашпилевская 146</a>
                            </div>
                            <div class="adr-wrapper">
                                <h6>Контактный телефон</h6>
                                <a href="tel:89183639733"class="phone main">+7 (918) 363-97-33</a>
                            </div>
                            <div class="links_container">
                                <div>
                                    <h6>Написать нам</h6>
                                    <ul>
                                        <li><a href="mailto:medmarket.rf@mail.ru" class="mail notmain">Medmarket.rf@mail.ru</a></li>
                                        <li><a href="https://wa.me/79034114255" class="whatsapp notmain">Whats App</a></li>
                                        <li><a href="https://tlgrm.ru/channels" class="telegram notmain">Telegram</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h6>Социальные сети</h6>
                                    <ul>
                                        <li><a href="https://www.instagram.com/" class="instagram notmain">Instagram</a></li>
                                        <li><a href="https://www.vk.com/" class="vk notmain">Вконтакте</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="map" id="map">

            </div>
        </section>
    </div>
</template>


<div class="map_section" style="z-index: 3;">
    <div class="contact_wrapper">
        <div class="adr-wrapper" style="z-index: 2; position: relative">
            <h6>Адрес</h6>
            <p class="locate main">111250, Россия, г. Краснодар ул. Рашпилевская 146</p>
        </div>
        <div class="adr-wrapper">
            <h6>Контактный телефон</h6>
            <a href="tel:89183639733"class="phone main">+7 (918) 363-97-33</a>
        </div>
        <div class="links_container">
            <div>
                <h6>Написать нам</h6>
                <ul>
                    <li><a href="mailto:medmarket.rf@mail.ru" class="mail notmain">Medmarket.rf@mail.ru</a></li>
                    <li><a href="https://wa.me/79034114255" class="whatsapp notmain">Whats App</a></li>
                    <li><a href="https://tlgrm.ru/channels" class="telegram notmain">Telegram</a></li>
                </ul>
            </div>
            <div>
                <h6>Социальные сети</h6>
                <ul>
                    <li><a href="https://www.instagram.com/" class="instagram notmain">Instagram</a></li>
                    <li><a href="https://www.vk.com/" class="vk notmain">Вконтакте</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>




<script src="./contact.js"></script>
<style scoped src="./contact.scss" lang="scss"></style>