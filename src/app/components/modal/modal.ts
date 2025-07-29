import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'modal',
    imports: [CommonModule],
    templateUrl: './modal.html'
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
