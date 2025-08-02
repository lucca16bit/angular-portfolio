import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'modal',
    imports: [CommonModule],
    templateUrl: './modal.html',
    animations: [
    trigger('overlay', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('250ms', style({ opacity: .3 })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 }))
      ])
    ]),
    trigger('modal', [
      transition(':enter', [
        style({ top: -999 }),
        animate('500ms', style({ top: '50%' })),
      ]),
      transition(':leave', [
        animate('250ms', style({ top: -999 }))
      ])
    ]),
  ]
})
export class Modal {
    @Input() show: boolean = false;
    @Output() showChange = new EventEmitter<boolean>();

    toggle() {
        this.show = !this.show;
        this.showChange.emit(this.show);
    }

    close() {
        this.show = false;
        this.showChange.emit(this.show);
    }
}
