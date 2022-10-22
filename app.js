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
    usage: function (uses, functional) {
        this.screenwork = uses;
        this.functional = functional;
    }
};

console.log(laptop)
console.log(laptop.name)
laptop.usage('Used to monitor', 'Computational work')
console.log(laptop)
console.log(laptop.usage)
console.log(laptop.usage.uses)