<template>
    <div class="chat_input rounded">
        <form class="relative flex justify-center" action="">
            <input class="fixed bottom-5 w-4/5 ml-52 border-gray border-2 border-solid rounded p-5" placeholder="Message">
            <button class="absolute bg-purple-700 rounded w-16 mr-2 -top-24 right-40" type="button" @click="addParty({ id: parties.length + 1 })">Add</button>
            <button class="absolute bg-purple-700 rounded w-16 -top-24 right-24" type="button" @click="removeParty({ id: parties.length + 1 })">Remove</button>
        </form>
    </div>
</template>

<script setup>
import useParties from '../composables/useParties';

const { parties, addParty, removeParty } = useParties()

</script>