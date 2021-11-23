export default class Party {
    id = null
    active = false
    users = []
    messages = []

    constructor({ id, users = [], messages = [] } = {}) {
        this.id = id
        this.users = users
        this.messages = messages
    }
}