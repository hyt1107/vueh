<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import AppMenuItem from './AppMenuItem.vue';
import ConfirmPopup from 'primevue/confirmpopup'; // Import ConfirmPopup

const store = useStore();
const router = useRouter();

const model = ref([
    {
        label: 'Home',
        items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' }]
    },
    {
        label: 'Data',
        items: [
            { label: 'Table', icon: 'pi pi-fw pi-table', to: '/uikit/table' },
            { label: 'List', icon: 'pi pi-fw pi-list', to: '/uikit/list' },
            { label: 'Overlay', icon: 'pi pi-fw pi-clone', to: '/uikit/overlay' },
            { label: 'Message', icon: 'pi pi-fw pi-comment', to: '/uikit/message' },
            { label: 'Upload', icon: 'pi pi-fw pi-file', to: '/uikit/file' },
            { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', to: '/uikit/charts' },
        ]
    },
    {
        label: 'Auth',
        icon: 'pi pi-fw pi-briefcase',
        to: '/pages',
        items: [
            {
                label: 'Person',
                icon: 'pi pi-fw pi-user',
                to: '/pages/person'
            },
            {
                label: 'Logout',
                icon: 'pi pi-fw pi-sign-in',
                command: () => {
                    store.dispatch('logout');
                    router.push('/auth/login');
                }
            }
        ]
    }
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item.label">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
        <ConfirmPopup /> <!-- Ensure ConfirmPopup is included -->
    </ul>
</template>

<style lang="scss" scoped></style>
