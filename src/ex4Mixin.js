export const ex4 = {
    data() {
        return {
            ex4_1: '',
            ex4_2: ''
        };
    },
    computed: {
        ex4_1_filtered() {
            return this.ex4_1.split('').reverse().join('');
        },
        ex4_2_filtered() {
            return this.ex4_2 + ' (' + this.ex4_2.length + ')';
        }
    }
};