import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { ContactForm } from '../../interfaces/form.interface';
import { FormService } from '../../services/form.service';
import { InputForm } from '../input-form/input-form';
import { Svg } from '../svg/svg';

@Component({
    selector: 'contact',
    imports: [InputForm, Svg, ReactiveFormsModule, CommonModule, TranslateModule],
    templateUrl: './contact.html',
    styleUrl: './contact.css'
})
export class Contact implements OnInit {
    contactForm!: FormGroup<ContactForm>;
    @Input() myEmail: string = '';
    @Input() myPhone: string = '';

    showErrorInTextArea: boolean = false;
    isBtnDisabled: boolean = true;
    isLoading: boolean = false;
    textAreaErrorMessage: string = '';
    charCount: number = 0;
    maxLength: number = 2000;

    constructor(
        private formBuilder: FormBuilder,
        private formService: FormService,
        private translate: TranslateService
    ) {}

    ngOnInit(): void {
        this.contactForm = this.formBuilder.group({
            name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
            email: ['', [Validators.required, Validators.email, Validators.minLength(2), Validators.maxLength(150)]],
            description: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2000)]]
        }) as FormGroup<ContactForm>;

        this.contactForm.get('description')?.valueChanges.subscribe(value => {
            this.updateCharCount(value);
        });

        this.contactForm.valueChanges.subscribe(() => {
            this.isBtnDisabled = !this.contactForm.valid;
        });
    }

    isValid(fieldName: string): boolean {
        const field = this.contactForm.get(fieldName);

        if (!field) {
            return false;
        }

        return field.invalid && (field.dirty || field.touched);
    }

    getErrorMessage(fieldName: string): string {
        const field = this.contactForm.get(fieldName);

        if (field && field.errors && (field.dirty || field.touched)) {
            const displayNames: { [key: string]: string } = {
                'name': this.translate.instant('contact.errors.name'),
                'email': this.translate.instant('contact.errors.email'),
                'description': this.translate.instant('contact.errors.description')
            };

            if (field.errors['required']) {
                return this.translate.instant('contact.errors.required', { field: displayNames[fieldName] });
            }
            if (field.errors['minlength']) {
                return this.translate.instant('contact.errors.minlength', { field: displayNames[fieldName], min: field.errors['minlength'].requiredLength });
            }
            if (field.errors['maxlength']) {
                return this.translate.instant('contact.errors.maxlength', { field: displayNames[fieldName], max: field.errors['maxlength'].requiredLength });
            }
            if (field.errors['email']) {
                return this.translate.instant('contact.errors.invalidMail');
            }
        }
        return '';
    }

    updateCharCount(value: string): void {
        const text = value || '';
        this.charCount = text.length;
    }

    get isFormValid(): boolean {
        return this.contactForm.valid;
    }

    submit() {
        this.contactForm.markAllAsTouched();

        if (!this.contactForm.valid) {
            return;
        }

        this.isLoading = true;
        this.contactForm.disable();

        this.formService.send(
            this.contactForm.value.name,
            this.contactForm.value.email,
            this.contactForm.value.description
        ).subscribe({
            next: () => {
                alert('Contato enviado! Aguarde o retorno');
                this.contactForm.enable();
                this.charCount = 0;
                this.isLoading = false;
                this.contactForm.reset();
            }
        });

    }
}


