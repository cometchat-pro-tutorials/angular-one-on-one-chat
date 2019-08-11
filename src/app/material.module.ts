import { NgModule } from '@angular/core';

import {
  MatSnackBarModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule
} from '@angular/material';

@NgModule({
  exports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSnackBarModule
  ]
})
export class MaterialModule {}
