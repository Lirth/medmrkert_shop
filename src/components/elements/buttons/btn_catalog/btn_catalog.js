import {mapGetters, mapActions} from "vuex"

export default {
    name: "btn_catalog",
    data() {
        return {
        }
    },

    computed: {
        ...mapGetters([
            'DROPDOWN_STATE'
        ])
    },
    methods: {
        ...mapActions([
           'TOGGLE_DROPDOWN'
        ]),
        onBtn() {
            this.TOGGLE_DROPDOWN()
        }
    },
}