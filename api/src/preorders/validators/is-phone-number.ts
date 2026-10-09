import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'phoneDigits', async: false })
export class PhoneDigitsConstraint implements ValidatorConstraintInterface {
  validate(value: unknown): boolean {
    if (typeof value !== 'string') {
      return false;
    }

    const digits = value.replace(/\D/g, '');
    return digits.length >= 10 && digits.length <= 15;
  }

  defaultMessage(): string {
    return 'phone must contain between 10 and 15 digits';
  }
}

export function IsPhoneNumber(validationOptions?: ValidationOptions) {
  return (object: object, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: PhoneDigitsConstraint,
    });
  };
}
