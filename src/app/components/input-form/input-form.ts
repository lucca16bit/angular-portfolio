import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

type InputTypes = 'name' | 'email' | 'text';

@Component({
    selector: 'input-form',
    imports: [ReactiveFormsModule, CommonModule],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputForm),
            multi: true
        }
    ],
    templateUrl: './input-form.html',
    styleUrl: './input-form.css'
})
export class InputForm implements ControlValueAccessor {
    @Input() inputName: string = '';
    @Input() placeholder: string = '';
    @Input() type: InputTypes = 'text';
    @Input() errorMessage: string = '';
    @Input() showError: boolean = false;

    value: string = '';
    onChange: any = () => {};
    onTouched: any = () => {};

    onInput(e: Event) {
        const value = (e.target as HTMLInputElement).value;
        this.onChange(value);
    }

    onBlur() {
        this.onTouched();
    }

    writeValue(value: any): void {
        this.value = value;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {}
}
