import ButtonsStructure from "./ButtonsStructure";
import Button from "./Button";

export default class Calculator {
    private _firstOperand: number;
    private _secondOperand: number;
    private _operation: string;
    private _result: number;
    private _buttonsStructure: ButtonsStructure
    private _content: string;
    constructor() {
        this._firstOperand = 0;
        this._secondOperand = 0;
        this._operation = '';
        this._result = 0;
        this._buttonsStructure = new ButtonsStructure(this.buildSimpleButtonStructure());
        this._content = '';
    }

    execute() {
        this._result = 0;
        switch (this._operation) {
            case '+': {
                this._result = this._firstOperand + this._secondOperand;
                break;
            }
            case '-': {
                this._result = this._firstOperand - this._secondOperand;
                break;
            }
            case '/': {
                this._result = this._firstOperand / this._secondOperand;
                if (this._result.toString().length > 10)
                    this._result = +(this._result.toString().slice(0,10));
                break;
            }
            case '*': {
                this._result = this._firstOperand * this._secondOperand;
                break;
            }
        }
        this._firstOperand = this._result;
        this._secondOperand = 0;
        return this._result;
    }

    clear() {
        this._firstOperand = 0;
        this._result = 0;
        this._secondOperand = 0;
        this._operation = '';
    }

    private buildSimpleButtonStructure() {
        let numsButtons = [1,2,3,4,5,6,7,8,9,0].map((_num) => new Button(_num.toString(), _num, null,
            (_e: React.MouseEvent<HTMLButtonElement>) => {
            if ((this._firstOperand === this._result) && (this._operation == '')) {
                this._content = '';
                this._firstOperand = 0;
            }
            if (this._operation === '') {
                this._firstOperand = this._firstOperand * 10 + _num;
            }
            else {
                this._secondOperand = this._secondOperand * 10 + _num;
            }

            if (this._content == '' && _num == 0) return;
            if ((this._operation !== '') && (this._firstOperand === this._result) && (this._secondOperand === 0))
                this._content = '';
            this._content += _num;
        }));
        
        let equalsButton = new Button('=', null, '=',
            (_e: React.MouseEvent<HTMLButtonElement>) => {
                let res = this.execute();
                this._operation = '';
                this._content = res === undefined ? '' : res.toString();
            });
        
        

        let clearButton = new Button('C', null, 'C',
            (_e: React.MouseEvent<HTMLButtonElement>) => {
                this._content = '';
                this.clear();
            });
        
        let operationsButtons = ['+', '-', '/', '*'].map((_oper) => new Button(_oper, null, _oper,
            (_e: React.MouseEvent<HTMLButtonElement>) => {
                this._operation = _oper;
                if (this._secondOperand != 0) {
                    let res = this.execute();
                    this._content = res === undefined ? '' : res.toString();
                } else {
                    this._content = '';
                }
            }));

        return [...numsButtons, clearButton, equalsButton, ...operationsButtons];
    }

    get firstOperand(): number {
        return this._firstOperand;
    }

    set firstOperand(value: number) {
        this._firstOperand = value;
    }

    get secondOperand(): number {
        return this._secondOperand;
    }

    set secondOperand(value: number) {
        this._secondOperand = value;
    }

    get operation(): string {
        return this._operation;
    }

    set operation(value: string) {
        this._operation = value;
    }

    get result(): number {
        return this._result;
    }

    set result(value: number) {
        this._result = value;
    }

    get buttonsStructure(): ButtonsStructure {
        return this._buttonsStructure;
    }

    set buttonsStructure(value: ButtonsStructure) {
        this._buttonsStructure = value;
    }


    get content(): string {
        return this._content;
    }
}