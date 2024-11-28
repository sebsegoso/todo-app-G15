<template>
    <button @click="logout">Cerrar sesión</button>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    methods: {
        ...mapActions("auth", ["logout"])
    }
}
</script>

<style scoped></style>