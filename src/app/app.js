import header_section from "../components/main/header/header.vue";
import content_section from "../components/main/content/content.vue";
import footer_section from "../components/main/footer/footer.vue";

import {mapGetters, mapActions} from "vuex"

export default {
    name: 'app',
    components: {
        header_section,
        content_section,
        footer_section,
    },
    data() {
        return {
            toggle: '',
        }
    },
    methods: {
        ...mapActions([
            'TOGGLE_DROPDOWN'
        ]),
        onBtn() {
            this.TOGGLE_DROPDOWN()
        }
    },
    computed: {
        ...mapGetters([
            'DROPDOWN_STATE'
        ])
    },
    mounted() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    },
}