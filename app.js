const app = {
  init(selectors) {
    this.flicks = []
    this.max = 0
    this.list = document.querySelector(selectors.listSelector)

    document
      .querySelector(selectors.formSelector)
      .addEventListener(
        'submit', 
        this.handleSubmit.bind(this)
      )
  },

  renderListItem(flick) {
    const item = document.createElement('li')
    item.textContent = flick.name
    favButton = document.createElement('button')
    favButton.textContent = "Favorite"
    favButton.setAttribute("class", "favButton")
    favButton.style.position = 'absolute'
    favButton.style.right = '300px'

    item.appendChild(favButton)
    favButton.addEventListener('click', this.favButtonChanger)

    deleteButton = document.createElement('button')
    deleteButton.textContent = "Delete"
    deleteButton.setAttribute("class", "deleteButton")
    deleteButton.style.position = 'absolute'
    deleteButton.style.right = '200px'
    item.appendChild(deleteButton)
    deleteButton.addEventListener('click', this.favButtonDeleter)
    item.style.paddingBottom = '20px'
    return item
  },

  handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    const flick = {
      id: this.max + 1,
      name: f.flickName.value,
    }
    const listItem = this.renderListItem(flick)
    this.list.appendChild(listItem)
    let i = flick.id - 1
    this.flicks[i] = flick.name
    console.log(this.flicks)

    this.max ++
  },

  favButtonChanger(ev) {
    f = ev.target.parentElement
    f.style.backgroundColor = "#e7d5d5"
  },

  favButtonDeleter(ev) {
    f = ev.target.parentElement
    f.remove(f)
  },

}

app.init({
  formSelector:       'form#flick-form',
  listSelector:       '#flick-list',
  favButtonSelector:  '.favButton',
})