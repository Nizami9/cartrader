<template>
     <div class="relative shadow border w-full overflow-hidden mb-5 cursor-pointer h-[200px]">
      <img class="absolute w-7 right-5 top-2 z-20" :src="favored ? heartFilled : heartOutline" @click="emit('favor', car.id)">
      <div class="flex h-full" @click="navigateTo(`/car/${car.name}-${car.id}`)">
        <NuxtImg :src="car.url" class="w-[300px] h-full" alt="car1"></NuxtImg>
        <div class="p-4 flex flex-col">
          <div>
            <h1 class="text-2xl text-blue-700">{{ car.name }}</h1>
            <p class="text-gray-7"> {{ car.description }}</p>
          </div>
          <h1 class="mt-auto text-xl">{{ car.price }}</h1>
        </div>
      </div>
    </div>
</template>

<script setup>
import heartFilled from "@/assets/images/heartFilled.png"
import heartOutline from "@/assets/images/heartOutline.png"

// const favored = useState(`favored-${props.car.id}`, () => {
//   return false;
// })

const props = defineProps({
  car: Object
}) 

const emit = defineEmits(['favor'])
</script>