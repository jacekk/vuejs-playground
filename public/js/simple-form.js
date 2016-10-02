const RETIREMENT_AGE = 65

new Vue({
    el: '#simple-form',
    data: {
        inputs: {
            firstName: '',
            lastName: '',
            age: 18,
            gender: '-',
            countryCode: '',
        },
        options: {
            gender: ['-', 'Male', 'Female'],
            countries: [
                { code:'PL', label:'Poland' },
                { code:'DE', label:'Germany' },
                { code:'CZ', label:'Czech Republic' },
                { code:'GB', label:'Great Britain' },
            ],
        },
    },
    computed: {
        fullName: function () {
            return [
                this.inputs.firstName,
                this.inputs.lastName,
            ].join(' ').trim()
        },
        tillRetirement: function () {
            if (this.inputs.age > RETIREMENT_AGE) {
                return 'You are old :P';
            }

            return RETIREMENT_AGE - this.inputs.age
        },
    },
    methods: {
        submitForm: function () {
            console.log(this.$options.filters.json.read(this.inputs))
        },
    },
})
