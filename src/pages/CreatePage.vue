<template>
    <LayoutMain>
        <div class="w-full h-screen text-center relative">
            <Loading v-if="loading" title="Loading post..." />
            <div class="p-6" v-else>
                <h1 class="text-2xl mb-10">Create new post</h1>
                <form class="flex gap-10" @submit="handleShare">
                    <div class="w-[400px] h-[400px] rounded-md border flex flex-col gap-6 items-center justify-center">
                        <vue-icon class="text-5xl" :icon="['far', 'image']" />
                        <p>Drag photos and videos here</p>
                        <label for="image" class="text-white bg-blue-600 px-2 py-1 rounded-md cursor-pointer"
                            type="button">Select from computer</label>
                        <input type="file" hidden="true" id="image" @change="handleFileUpload">
                    </div>
                    <div class="flex-1 border rounded-md p-6 text-start">
                        <div class="flex items-center justify-between">
                            <div class="flex gap-2 items-center">
                                <img class="w-8 h-8 rounded-full border" :src="user?.avatar" :alt="user?.username">
                                <h6 class="text-sm font-semibold">{{ user?.username }}</h6>
                            </div>
                            <button
                                type="submit"
                                class="text-sm font-semibold text-blue-500 px-2 py-1 border rounded-md">Share</button>
                        </div>
                        <textarea class="w-full outline-none mt-8" placeholder="Write a caption..." v-model="content"
                            cols="30" rows="11"></textarea>
                        <div v-if="errorMessage">
                            <p class="text-red-500 text-sm">{{errorMessage}}</p>
                        </div>
                    </div>
                </form>
                <div class="flex gap-4 mt-6">
                    <div class="relative" v-for="(img, index) in images" :key="index">
                        <vue-icon @click="handleCloseImage(index)"
                        class="absolute top-0 right-0 border bg-gray-200 p-[1px] rounded-full w-4 h-4 cursor-pointer"
                        :icon="['fas', 'xmark']" />
                        <img :src="img" alt="New Image Post" class="w-32 h-32 object-cover rounded-md border">
                    </div>
                    <div v-if="loadingImg" class="w-32 h-32 relative">
                        <Loading />
                    </div>
                </div>
            </div>
        </div>
    </LayoutMain>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { computed, ref } from 'vue';

import LayoutMain from '@/layouts/LayoutMain.vue';
import Loading from '@/components/Loading.vue';
import uploadFile from '@/lib/uploadFIle';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

const user  = store.getters.user;

const images = ref<string[]>([]);
const content = ref("");
const loading = ref(false);
const loadingImg = ref(false);
const errorMessage = ref("");

const handleFileUpload = async (e: Event) => {    
    loadingImg.value = true;
    const input = e.target as HTMLInputElement;
    errorMessage.value = "";
    if (input.files && input.files[0]) {
        const file = input.files[0];
        const urlImage = await uploadFile(file);
        if(urlImage) images.value.push(urlImage);
    }
    loadingImg.value = false;    
};

const handleCloseImage = (index: number) => {
    images.value.splice(index, 1);
}

const handleShare = async (e: Event) => {
    e.preventDefault();
    if(loadingImg.value) {
        errorMessage.value = "Uploading photos, please wait a moment";
        return;
    }
    if(!images.value.length) {
        errorMessage.value = "You must upload at least 1 photo or video";
        return;
    }
    if(content.value.trim() === "") {
        errorMessage.value = "Caption cannot be blank";
        return;
    }
    const data = {
        userId: user.userId,
        content: content.value,
        images: images.value
    }    
    loading.value = true;
    try {
        await store.dispatch("createPost", data);
    } finally {
        loading.value = false;
    }
    return router.push("/profile");
}
</script>