import { FormControl } from '@angular/forms';

export const fullnamePattern: RegExp =
  /([^0-9\.\,\"\?\!\;\:\#\$\%\&\(\)\*\+\-\/\<\>\=\@\[\]\\\^\_\{\}\|\~]+) ([^0-9\.\,\"\?\!\;\:\#\$\%\&\(\)\*\+\-\/\<\>\=\@\[\]\\\^\_\{\}\|\~]+)/;

export const emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

export const cantBeDaguttt = (control: FormControl) => {
  const value: string = control.value?.trim().toLowerCase();
  if (value === 'daguttt') return { daguttt: true };
  return null;
};
