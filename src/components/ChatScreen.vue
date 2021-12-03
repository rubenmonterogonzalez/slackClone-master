<template>
    <div class="chatscreen absolute top-32 left-64 w-auto h-screen">
        {{ parties }}
    </div>
</template>

<script setup>
import useParties from '../composables/useParties';

const { parties, addParty, removeParty } = useParties()

</script>