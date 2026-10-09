export function countPhoneDigits(phone: string): number {
  return phone.replace(/\D/g, "").length;
}

export function isValidPhone(phone: string): boolean {
  const digits = countPhoneDigits(phone);
  return digits >= 10 && digits <= 15;
}
