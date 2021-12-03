export default class Messages {
    id = null;
    body = '';
    user_id = null;
    party_id = null;

    constructor({ id, body = [], user_id, party_id } = {}) {
        this.id = id
        this.body = body
        this.user_id = user_id
        this.party_id = party_id
    }
}