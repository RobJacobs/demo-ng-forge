import { Component, inject, input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { isArray, isDefined } from '@tylertech/forge-core';
import { IconRegistry } from '@tylertech/forge';
import { DialogService, ForgeIconButtonModule, ForgeIconModule, ForgeTooltipModule } from '@tylertech/forge-angular';
import { tylIconMoreHoriz } from '@tylertech/tyler-icons';
import { IFieldHelpConfig } from '../field-help.constants';
import { FieldHelpDialogComponent } from '../field-help-dialog/field-help-dialog.component';

@Component({
  selector: 'app-field-help-button',
  imports: [ForgeIconButtonModule, ForgeIconModule, ForgeTooltipModule],
  templateUrl: './field-help-button.component.html',
  styleUrl: './field-help-button.component.scss'
})
export class FieldHelpButtonComponent {
  private dialogService = inject(DialogService);
  public control = input.required<AbstractControl>();
  public config = input.required<IFieldHelpConfig>();

  public constructor() {
    IconRegistry.define([tylIconMoreHoriz]);
  }

  public onClick() {
    this.dialogService.open(FieldHelpDialogComponent, { data: this.config() }).afterClosed.subscribe((result) => {
      if (isDefined(result)) {
        this.control().setValue(
          this.config().transform ? this.config().transform(result) : isArray(result) ? result.map((r) => r[this.config().key]) : result[this.config().key]
        );
        this.control().markAsDirty();
      }
    });
  }
}
