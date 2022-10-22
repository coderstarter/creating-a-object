// creating a backpack object
const laptop = {
    name: 'Macbook Pro',
    screen_size: 16.5,
    color: 'grey',
    resolutions: {
        pixels: 1080,
        pixel_density: 720
    },
    screenwork: false,
    usage: function (useage, functionn) {
        this.resolutions.pixels = useage;
        this.resolutions.pixel_density = functionn;
    },
};

console.log(laptop)
console.log(laptop.name)
laptop.usage(1000, 99);
console.log(laptop)
console.log(laptop.resolutions.pixels)