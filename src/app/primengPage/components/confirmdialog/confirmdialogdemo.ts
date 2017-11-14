import { Component } from '@angular/core';
import { ConfirmationService } from 'primeng/components/common/api';
import { Message } from 'primeng/components/common/api';

@Component({
    templateUrl: './confirmdialogdemo.html',
    providers: [ConfirmationService]
})
// tslint:disable-next-line:component-class-suffix
export class ConfirmDialogDemo {

    msgs: Message[] = [];

    constructor(private confirmationService: ConfirmationService) { }

    confirm1() {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'fa-question-circle',
            accept: () => {
                this.msgs = [{ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' }];
            },
            reject: () => {
                this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
            }
        });
    }

    confirm2() {
        this.confirmationService.confirm({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'fa-trash',
            accept: () => {
                this.msgs = [{ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' }];
            },
            reject: () => {
                this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
            }
        });
    }
}
