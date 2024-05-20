<script setup>
import { useToast } from 'primevue/usetoast';
import { useLayout } from '@/layout/composables/layout';
import { ref, computed } from 'vue';
import { useStore  } from 'vuex'; 
import { useRouter } from 'vue-router'; 
//import { mapGetters } from 'vuex';

const { layoutConfig } = useLayout();
const toast = useToast();
const store = useStore(); 
const router = useRouter(); 
const onUpload = () => {
    toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
};
const storedUser = computed(() => store.getters.getUser);
const storedPassword = computed(() => store.getters.getPassword);
</script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h5>Advanced</h5>
                <FileUpload name="demo[]" @uploader="onUpload" :multiple="true" accept="image/*" :maxFileSize="1000000" customUpload />

                <h5>Basic</h5>
                <FileUpload mode="basic" name="demo[]" accept="image/*" :maxFileSize="1000000" @uploader="onUpload" customUpload />
            </div>
            <div v-if="storedUser">
                <p>Stored User: {{ storedUser }}</p>
                <p>Stored Password: {{ storedPassword }}</p>
            </div>
        </div>
    </div>
</template>
