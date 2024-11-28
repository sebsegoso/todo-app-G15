<template>
    <button @click="login">Inicia sesión con google</button>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    methods: {
        ...mapActions("auth", ["login"])
    }
}
</script>

<style scoped></style>