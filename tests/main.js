Vue.component('product', {
    props:{
        message: {
            type: String,
            required: true,
            default: "Hi"
        }
    },
    template: `<div>{{ message }}</div>`,
    data() { … }
})