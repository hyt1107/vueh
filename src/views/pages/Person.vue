<script setup>
import { useToast } from 'primevue/usetoast';
import { useLayout } from '@/layout/composables/layout';
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const { layoutConfig } = useLayout();
const toast = useToast();
const store = useStore();
const router = useRouter();
const onUpload = () => {
    toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
};
const storedUser = computed(() => store.getters.getUser);
const userName = computed(() => storedUser.value?.name);
const storedPassword = computed(() => store.getters.getPassword);
const logoUrl = computed(() => {
    return `/layout/images/holdwelllogo.png`;
});
</script>

<template>
    <div class="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
        <div class="flex flex-column align-items-center justify-content-center">
            <div class="profile-card">
                <div class="w-full surface-card py-8 px-5 sm:px-8 profile-content">
                    <div class="text-center mb-5">
                        <div class="text-1200 text-4xl font-medium mb-3">Profile</div>
                        <img :src="logoUrl" alt="Image" height="50" class="mb-3" />
                        
                    </div>
                    <div>
                        <div class="frame flex">
                            <!-- Other profile content goes here -->
                            <h6 class=test>AccountID</h6>
                            <h4 class="font-medium no-underline ml-2 text-center cursor-pointer">Register</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.profile-card {
    border-radius: 56px;
    padding: 0.3rem;
    background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%);
    width: 40vw; /* Adjust the width as needed */
    max-width: 900px; /* Set a max-width for larger screens */
    height: 80vh; /* Adjust the height as needed */
    max-height: 700px; /* Set a max-height for larger screens */
}

.profile-content {
    border-radius: 53px;
}

.pi-eye {
    transform: scale(1.6);
    margin-right: 1rem;
}

.pi-eye-slash {
    transform: scale(1.6);
    margin-right: 1rem;
}
.frame {
    padding:10px;
    align-items:center; 
    justify-content:center;
    padding-right: 50;
}
</style>
