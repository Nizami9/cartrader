<template>
    <div v-if="car">
                <CarHeroDetails :car="car"/>
                <CarAttributes :features="car.features"/>
                <CarDescription :description="car.description"/>
                <CarDetails/>
    </div>
</template>
<script setup>
const {cars} = useCars()
const route = useRoute();
const { toTitleCase } = useUtilities()
useHead({
    title: toTitleCase(route.params.name)
});

const car = computed(()=>{
    return cars.find((c) => {
        return c.id === parseInt(route.params.id)
    })
})

definePageMeta({
    layout: "custom"
})

</script>