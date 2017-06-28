const app = {
    init: function(formSelector) {
        document
            .querySelector(formSelector)
            .addEventListener('submit', this.handleSubmit)
    },

    handleSubmit: function(ev) {
        ev.preventDefault()
        const flickName = ev.target.flickName.value
        console.log(flickName)
    },
}



app.init('form#flick-form')