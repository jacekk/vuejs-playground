new Vue({
    el: '#app',
    data: {
        newTaskTitle: '',
        tasks: [
            {
                title: 'Fix bug #123',
                done: false,
            },
            {
                title: 'Update PHP to 7.1',
                done: false,
            },
            {
                title: 'Update blog CMS',
                done: true,
            },
        ],
    },
    computed: {
        notCompletedAmount: function () {
            return this.tasks.filter(this.isNotCompleted).length
        },
    },
    methods: {
        isCompleted: function (task) {
            return task.done
        },
        isNotCompleted: function (task) {
            return ! task.done
        },
        addNewTask: function () {
            if (this.newTaskTitle === '') {
                return
            }

            this.tasks.unshift({
                title: this.newTaskTitle,
                done: false,
            })

            this.newTaskTitle = ''
        },
        remove: function (task) {
            this.tasks.$remove(task)
        },
        removeCompleted: function () {
            this.tasks = this.tasks.filter(this.isNotCompleted)
        },
    },
})
