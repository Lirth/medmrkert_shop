import product_item from "../../components/elements/product_item/product_item.vue";
import title_page from "../../components/elements/titles/title_page.vue";
import btn_large from "../../components/elements/buttons/btn_large/btn_large.vue";
export default {
    name: 'catalog',
    components: {
        product_item,
        title_page,
        btn_large
    },
    data() {
        return {
            isActive: false,
        }
    },
    methods: {
        showFilter() {
            this.isActive = !this.isActive;
        }
    }
}