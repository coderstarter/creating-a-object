/**
 * Creating the classes:
 * Class declaration : class Name {}
 * Class expression : const Name = class {}
 */

class mac {
    constructor(
        // Defines parameters
        name,
        model,
        color,
        ports,
        length,
        width,
        touch
    ) {
        // Define properties
        this.name = name;
        this.model = model;
        this.color = color;
        this.ports = ports;
        this.specifications = {
            len: length,
            wd: width,
        };
        this.width = width;
        this.touch = touch;
    }
    // Add methods like normal functions
    likeability(touch_able) {
        this.touch = touch_able;
    }
}

export default mac;