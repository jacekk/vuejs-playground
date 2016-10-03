/**
 * @param  {integer} length default to 10
 * @return {string}
 */
const randomStringGenerator = function (length) {
    const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 "
    let out = []
    length = length || 10

    for (let i = length; i >= 0; i--) {
        let randomIndex = Math.floor(
            Math.random() * CHARS.length
        )
        out.push(CHARS.charAt(randomIndex))
    }

    return out.join('')
}

new Vue({
    el: '#basic-usage',
    data: {
        msg: '',
    },
    methods: {
        alert: function () {
            alert(this.msg || 'Input is empty :(')
        },
        clearInput: function () {
            this.msg = ''
        },
        randomNumber: function () {
            this.msg = Math.random()
        },
        randomString: function () {
            this.msg = randomStringGenerator()
        },
        randomLongString: function () {
            this.msg = randomStringGenerator(25)
        },
    },
})
