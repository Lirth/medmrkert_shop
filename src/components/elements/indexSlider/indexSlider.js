import btn_large from "../buttons/btn_large/btn_large.vue";

export default {
    name: 'slider',
    components: {
        btn_large,
    },
    data() {
        return {
            array: [1, 2],
            current: 1,
            disabled: false,
            ind: [1, 2],
            i: 0,
        }
    },
    methods: {
        next() {
            this.disabled = true;
            let wid = this.$refs.carousel_item[0].offsetWidth;
            this.array.push(this.current);
            this.$refs.carousel.style.setProperty('--element-width', (wid + 25) * -1 + 'px')
            this.$refs.carousel.classList.add('next');
            if (this.current < this.array.length - 1) {
                setTimeout(() => {
                    this.current++;
                    this.array.shift();
                    this.$refs.carousel.classList.remove('next');
                    this.disabled = false;
                }, 300)
            } else {
                setTimeout(() => {
                    this.current = 1;
                    this.array.shift();
                    this.$refs.carousel.classList.remove('next');
                    this.disabled = false;
                }, 300)
            }
        },
        prev() {
            this.disabled = true;
            let wid = this.$refs.carousel_item[0].offsetWidth;
            if (this.current > 1) {
                this.array.unshift(this.current - 1);
                this.$refs.carousel.style.setProperty('--element-width', (wid + 25) * -1 + 'px')
                this.$refs.carousel.classList.add('prev');
                setTimeout(() => {
                    this.array.pop();
                    this.current--;
                    this.$refs.carousel.classList.remove('prev');
                    this.disabled = false;
                }, 300)
            } else {
                this.array.unshift(this.array.length);
                this.$refs.carousel.style.setProperty('--element-width', (wid + 25) * -1 + 'px')
                this.$refs.carousel.classList.add('prev');
                setTimeout(() => {
                    this.array.pop();
                    this.current = this.array.length;
                    this.$refs.carousel.classList.remove('prev');
                    this.disabled = false;
                }, 300)
            }
        },
    },
}
