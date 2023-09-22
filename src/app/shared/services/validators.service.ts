import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ValidatorsService {
  public isValidField(form: FormGroup, field: string) {
    return form.controls[field].errors && form.controls[field].touched;
  }

  getFieldError(form: FormGroup, field: string): string | null {
    if (!form.controls[field]) return null;
    const errors = form.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido.';

        case 'minlength':
          return `Son ${errors['minlength'].requiredLength} caracteres como mínimo.`;

        case 'maxlength':
          return `Solo ${errors['maxlength'].requiredLength} caracteres como máximo.`;
      }
    }
    return null;
  }
}
