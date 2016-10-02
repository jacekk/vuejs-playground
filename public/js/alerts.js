Vue.component('alert', {
    template: '#alert-template',
    props: {
        type: {
            default: 'info',
        },
        timeout: {
            type: Number,
            default: 0,
        },
    },
    data: function () {
        return {
            show: true,
        }
    },
    ready: function () {
        if (this.timeout) {
            setTimeout(this.hide, this.timeout)
        }
    },
    methods: {
        hide: function () {
            this.show = false
        },
    },
})

new Vue({
    el: '#alerts',
})
