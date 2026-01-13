export function validateText(text: string): boolean {
  return text.trim().length === 0;
}

export function findFormField(form: HTMLFormElement, name: string) {
  return form.elements.namedItem(name);
}

export function findFormSubmit(form: HTMLFormElement) {
  return form.querySelector('[type="submit"]');
}
