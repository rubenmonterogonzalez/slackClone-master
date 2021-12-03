export default class User {
    name = '';
    username = '';
    id = null;

    constructor({ name, username, id } = {}) {
        this.name = name
        this.username = username
        this.id = id
    }
}