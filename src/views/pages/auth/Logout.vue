<template>
    <button @click="logout">Logout</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    methods: {
        ...mapActions(['logout']),
        logout() {
            this.logout().then(() => {
                this.$router.push('/auth/login');
            });
        }
    }
};
</script>
