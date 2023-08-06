import Button from "./Button";

export default class ButtonsStructure {
    private _buttons: Button[];

    constructor(buttons: Button[]) {
        this._buttons = buttons;
    }


    get buttons(): Button[] {
        return this._buttons;
    }

    set buttons(value: Button[]) {
        this._buttons = value;
    }
}
