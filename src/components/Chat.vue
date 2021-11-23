<template>
    <div class="chat_input rounded">
        <pre>{{ parties }}</pre>

        <button class="absolute top-96 left-80" type="button" @click="addParty({ id: parties.length + 1 })">Add</button>
        <button class="absolute top-96 left-96" type="button" @click="removeParty({ id: parties.length + 1 })">Remove</button>
        <form class="relative flex justify-center" action="">
            <input class="fixed bottom-5 w-4/5 ml-52 border-gray border-2 border-solid rounded p-5" placeholder="Message">{{ parties }}
        </form>
    </div>
</template>

<script setup>
import useParties from '../composables/useParties';

const { parties, addParty, removeParty } = useParties()

</script>