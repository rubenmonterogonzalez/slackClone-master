import { ref, reactive, computed } from 'vue'
import Party from '../classes/Party'
import Api from '../api'

const parties = ref([])

export default function useParties() {

    const addParty = (party) => {
        parties.value.push(new Party(party))
        Api.addParty(party)
    }

    const removeParty = ({ id }) => {
        parties.value.splice(parties.value.findIndex(p => p.id === id), 1)
    }

    const updateParty = (party) => {
        return party
    }

    let n = ref(0)
    let m = ref(0)

    let nPlusM = computed(() => n.value + m.value)

    const activeParties = computed(() => parties.value.filter(p => p.active))

    const partiesOfUserID = computed((userId) => parties.value.filter(p => p.users.includes(userId)))

    return {
        parties,
        addParty,
        removeParty,
        updateParty,
        activeParties,
        partiesOfUserID,
    }
}