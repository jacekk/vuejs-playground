new Vue({
    el: '#vue-resource',
    http: {
        root: '/api',
        // headers: {
        //     Authorization: 'Basic YXBpOnBhc3N3b3Jk'
        // }
    },
    data: {
        searchPhrase: '',
        searchWidgetState: 'initial', // initial, loading, empty, loaded
        recentLoadError: null,
        recentNews: [],
        foundedNews: [],
        allNews: []
    },
    ready: function () {
        this.refreshRecentNews()
    },
    computed: {
        doShowSearchInfo: function () {
            return this.searchWidgetState === 'initial'
        },
        doShowSearchWarning: function () {
            return this.searchWidgetState === 'empty'
        },
    },
    methods: {
        getDelay: function () {
            const min = 1e3
            const max = 2e3

            return Math.ceil(Math.random() * max) + min
        },
        loadNewsByPhrase: function () {
            const phrase = this.searchPhrase
            const titleContainsPhrase = function (news) {
                return news.title.toLowerCase().indexOf(phrase) > -1
            }

            this.$http.get('news.json').then(function (response) {
                this.foundedNews.push.apply(this.foundedNews, response.body.filter(titleContainsPhrase))
                this.searchWidgetState = this.foundedNews.length ? 'loaded' : 'empty'
            }, function (response) {
                this.searchWidgetState = 'empty'
                console.error(response.body)
            })
        },
        submitSearch: function () {
            this.foundedNews = []
            this.searchWidgetState = 'loading'

            setTimeout(this.loadNewsByPhrase, this.getDelay())
        },
        refreshRecentNews: function () {
            this.recentNews = []
            setTimeout(this.loadRecentNews, this.getDelay())
        },
        loadRecentNews: function () {
            this.recentNews = []
            this.allNews = []

            this.$http.get('news.json').then(function (response) {
                this.allNews.push.apply(this.allNews, response.body)
                this.recentNews.push.apply(this.recentNews, response.body.splice(0, 3))
            }, function (response) {
                this.recentLoadError = response.body
            })
        },
    },
})
