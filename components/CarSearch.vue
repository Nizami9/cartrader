<template>
    <div class="font-serif w-[1000px] text-2xl rounded-full bg-white flex justify-between overflow-hidden drop-shadow-2xl mx-auto">
        <input :class="SearchError ? 'border-red-500 border' : ''" v-model="city" type="text" class="py-3 px-5 w-full text-2xl rounded-full focus:outline-none" placeholder="Search by city...">
        <button @click="handleSearch" class="bg-sky-500 px-10 text-white">Search</button>
    </div>
</template>
<script setup>
const city = ref('');
const router = useRouter();
const SearchError = ref(true)

const handleSearch = () => {
    if(!city.value) {
        return SearchError = true
    }
    navigateTo(`city/${city.value}/car`)
} 


</script>