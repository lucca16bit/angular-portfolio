import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { ContactForm } from '../../interfaces/form.interface';
import { FormService } from '../../services/form.service';
import { InputForm } from '../input-form/input-form';
import { Svg } from '../svg/svg';

@Component({
    selector: 'contact',
    imports: [InputForm, Svg, ReactiveFormsModule],
    templateUrl: './contact.html',
    styleUrl: './contact.css'
})
export class Contact implements OnInit {
    contactForm!: FormGroup<ContactForm>;
    @Input() contactTitle: string = '';
    @Input() contactSubTitle: string = '';
    @Input() contactDescription: string = '';
    @Input() myEmail: string = '';
    @Input() myPhone: string = '';

    constructor(private formBuilder: FormBuilder, private formService: FormService) {}

    ngOnInit(): void {
        this.contactForm = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            description: ['', Validators.required]
        }) as FormGroup<ContactForm>;
    }

    submit() {
    if (this.contactForm.invalid) return;

    const { name, email, description } = this.contactForm.value;
    this.formService.send(name, email, description).subscribe({
        next: (res) => {
            this.contactForm.reset();
        }
    });
}
}
