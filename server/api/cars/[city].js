import cars from "@/data/cars.json"

export default defineEventHandler((event) => {
    const {city} = event.context.params;
    const {make, minPrice, maxPrice} = getQuery(event);
    let filteredCars = cars;
    filteredCars = filteredCars.filter(car => {
       return car.city.toLowerCase() === city.toLowerCase()
    });
    if(make) {
    filteredCars = filteredCars.filter(car => {
        return car.make.toLowerCase() === make.toLowerCase()
        });
    }
    return filteredCars;
})