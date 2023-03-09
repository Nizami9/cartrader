<template>
        <div 
    class="main
    h-screen
    relative
    w-100
    bg-no-repeat
    bg-cover
    bg-bottom">
  <div class="z-10 absolute w-full h-full flex justify-center items-center">
    <div class="text-center w-1/2">
      <h1 class="text-white text-8xl font-serif mb-10">Find your car</h1>
      <CarSearch />
    </div>
  </div>
  <div class="w-full h-full bg-black bg-opacity-50 z-1 absolute"></div>
</div>
</template>

<style>
.main {
  background-image: url(./assets/images/car.jpg);
} 
</style>