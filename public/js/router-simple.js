Vue.use(VueRouter)

const Home = {
    template: 'This is the home page, so ... <b>welcome :)</b>',
}

const About = {
    template: '#about-template',
}

const NewsPage = {
    template: '#news-template',
    data: function () {
        return {
            slugOnRouteChange: '',
            slugOnComponentReady: '',
        }
    },
    ready: function () {
        this.slugOnComponentReady = this.$route.params.slug
    },
    watch: {
        '$route': 'onRouteChange'
    },
    methods: {
        onRouteChange: function () {
            this.slugOnRouteChange = this.$route.params.slug
        },
    },
}

var App = {}
var router = new VueRouter({
    linkActiveClass: 'active',
})

router.map({
    '/': {
        component: Home,
    },
    '/about': {
        component: About,
    },
    '/contact': {
        component: {
            template: '#contact-template',
        },
    },
    '/news/*slug': {
        component: NewsPage,
    },
})

router.start(App, '#router-simple')
