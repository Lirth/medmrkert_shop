import product_item from "../../components/elements/product_item/product_item.vue";
import title_page from "../../components/elements/titles/title_page.vue";
import btn_large from "../../components/elements/buttons/btn_large/btn_large.vue";
import breadcrumbs from "../../components/elements/breadcrumbs/breadcrumbs.vue";
export default {
    name: 'catalog',
    components: {
        product_item,
        title_page,
        btn_large,
        breadcrumbs,
    },
    data() {
        return {
            isActive: false,
            isActive2: false,
        }
    },
    methods: {
        showFilter() {
            this.isActive = !this.isActive;
        },
        showFilterMobile() {
            this.isActive2 = !this.isActive2;
            if (this.isActive2 === true) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        }
    }
}