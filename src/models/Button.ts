export default class Button {
    private _title: string
    private _value: number | null;
    private _operation: string | null;
    private _onClick: (_action: any) => void;


    constructor(title: string, value: number | null, operation: string | null, onClick: (_action: any) => void) {
        this._title = title;
        this._value = value;
        this._operation = operation;
        this._onClick = onClick;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get value(): number | null {
        return this._value;
    }

    set value(value: number | null) {
        this._value = value;
    }

    get operation(): string | null {
        return this._operation;
    }

    set operation(value: string | null) {
        this._operation = value;
    }

    get onClick(): (_action: any) => void {
        return this._onClick;
    }

    set onClick(value: (_action: any) => void) {
        this._onClick = value;
    }
}
