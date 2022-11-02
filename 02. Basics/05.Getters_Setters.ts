class Example {
    private _name: string;
    constructor(name: string) {
        this._name = name;
    }

    /**
     * What is the use of getters and setters?
     * - To validate the data before setting it
     * - To perform some action before getting and setting the value
     * - To perform some action after getting and setting the value
     * - Provide a way to access private properties
     * - Promote encapsulation
     * 
     */

    get name() {
        return this._name;
    }
    //Setters cannot have a return type that is how typescript knows that it is a setter
    set name(value) {
        if (value.length > 3) {
        this._name = value;
        } else {
            throw new Error("Name is too short");
        }
    }
}