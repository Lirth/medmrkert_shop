import logo from "../../elements/svg-template/logo.vue";
import btn_catalog from "../../elements/buttons/btn_catalog/btn_catalog.vue";

export default {
    name: "header_section",
    components: {
        logo,
        btn_catalog,
    },
    data() {
        return {
            items: [
                {text: 'Пн-Пт 10:00-17:00', class: 'schedule'},
                {
                    text: 'Краснодар ул. Рашпилевская 146',
                    class: 'address',
                    target: '_blank',
                    href: 'https://yandex.ru/maps/35/krasnodar/house/rashpilevskaya_ulitsa_144/Z0EYfwBmQUcFQFpvfXx1eH9hZg==/?ll=38.978111%2C45.046575&z=15'
                },
                {text: 'medmarket.rf@mail.ru', class: 'mail', href: 'mailto:medmarket.rf@mail.ru'},
                {text: 'Мы в Instagram', class: 'instagram', target: '_blank', href: 'https://instagram.com/'},
                {text: 'Написать в Telegram', class: 'telegram', target: '_blank', href: 'https://tlgrm.ru/channels/'},
                {text: '8 (903) 411-42-55', class: 'phone', href: 'tel:89034114255'},
            ],
            navbar: [
                {text: 'Акции', href: '/promotion'},
                {text: 'О компании', href: '/about'},
                {text: 'Доставка и оплата', href: '/delivery'},
                {text: 'Сертификаты и лицензии', target: '_blank', href: ''},
                {text: 'Контакты', href: '/contact'},
            ]
        }
    },
}