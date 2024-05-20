<script setup>
import { useLayout } from '@/layout/composables/layout';
import { ref, computed } from 'vue';
import { useStore  } from 'vuex'; 
import { useRouter } from 'vue-router'; 
import AppConfig from '@/layout/AppConfig.vue';

const { layoutConfig } = useLayout();
const account = ref('');
const password = ref('');
const checked = ref(false);
const store = useStore(); 
const router = useRouter(); 

const longlog = computed(() => {
    return `/layout/images/holdwelllong.png`;
});

const logoUrl = computed(() => {
    return `/layout/images/holdwelllogo.png`;
});

const handleLogin = async () => {
    const presetAccount = '123';
    const presetPassword = '123';
    if (account.value === presetAccount && password.value === presetPassword) {
        const user = { name: account.value };
        await store.dispatch('login', user);
        router.push('/');
    } else {
        alert('Invalid account or password.');
    }
};

//test
const storedUser = computed(() => store.getters.getUser);
const storedPassword = computed(() => store.getters.getPassword);
console.log("storedUser",storedUser)
//test

</script>

<template>
    <div class="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
        <div class="flex flex-column align-items-center justify-content-center">
            <!-- <img :src="longlog" alt="Sakai logo" class="mb-5 w-6rem flex-shrink-0" /> -->
            <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
                <div class="w-full surface-card py-8 px-5 sm:px-8" style="border-radius: 53px">
                    <div class="text-center mb-5">
                        <img :src="logoUrl" alt="Image" height="50" class="mb-3" />
                        <div class="text-900 text-3xl font-medium mb-3">Welcome to Holdwell !</div>
                        <span class="text-600 font-medium">Sign in to continue</span>
                    </div>

                    <div>
                        <label for="email1" class="block text-900 text-xl font-medium mb-2">Account</label>
                        <InputText id="email1" type="text" placeholder="AccountID" class="w-full md:w-30rem mb-5" style="padding: 1rem" v-model="account" />

                        <label for="password1" class="block text-900 font-medium text-xl mb-2">Password</label>
                        <InputText id="password1" type="text" placeholder="Password" class="w-full md:w-30rem mb-5" style="padding: 1rem" v-model="password" />
                        

                        <div class="flex align-items-center justify-content-between mb-5 gap-5">
                            <div class="flex align-items-center">
                                <Checkbox v-model="checked" id="rememberme1" binary class="mr-2"></Checkbox>
                                <label for="rememberme1">Remember me</label>
                            </div>
                            <div class="flex align-items-center">
                                
                                <a class="font-medium no-underline ml-2 text-right cursor-pointer" style="color: var(--primary-color)">Forgot password?</a>
                                <a class="font-medium no-underline ml-2 text-right cursor-pointer">Register</a>
                            </div>
                        </div>
                        <Button label="Sign In" class="w-full p-3 text-xl" @click="handleLogin"></Button>
                        <div>
                            <p>Stored User: {{ storedUser }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         
    </div>
    <AppConfig simple />
</template>

<style scoped>
.pi-eye {
    transform: scale(1.6);
    margin-right: 1rem;
}

.pi-eye-slash {
    transform: scale(1.6);
    margin-right: 1rem;
}
</style>
