<template>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <template v-if="user">
            <RouterLink :to="{ name: 'pending' }">Tareas pendientes</RouterLink>
            <RouterLink :to="{ name: 'completed' }">Tareas completadas</RouterLink>
            <LogoutButton />
        </template>
        <template v-else>
            <LoginWithGoogleButton />
        </template>
    </nav>
</template>

<script>
import LoginWithGoogleButton from './buttons/LoginWithGoogleButton.vue'
import LogoutButton from './buttons/LogoutButton.vue'
import { mapState } from 'vuex'

export default {
    components: { LoginWithGoogleButton, LogoutButton },
    computed: {
        ...mapState("auth", ["user"])
    },
    mounted() {
        console.log(this.user)
    }
}
</script>

<style scoped>
nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}
</style>