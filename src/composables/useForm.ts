import { inject, reactive } from "vue";

export interface FormState {
  email: string;
  password: string;
  [key: string]: string;
}

export class Form {
  private formData: FormState;

  constructor(data: FormState) {
    this.formData = reactive(data);
  }

  get formValue(): FormState {
    if (this.formData) {
      return this.formData;
    }
    throw new Error("formDate is not found");
  }

  public isExist(key: string): boolean {
    return this.formData[key] !== undefined;
  }

  public setFormValue(k: string, v: string): void {
    this.formData[k] = v;
  }
}

const useForm = (): Form => {
  const _form = inject<Form>("form");
  if (!_form) {
    throw new Error('Did you forgot to call provide "form" ?');
  }
  return _form;
};

export default useForm;
