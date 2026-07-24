import { Translation } from '../types';
import { es } from './es';
import { en } from './en';
import { pt, fr, de, it, ru, zh, ja, ko, ar, hi, tr, nl, pl } from './all';

export const translations: Record<string, Translation> = {
  es, en, pt, fr, de, it, ru, zh, ja, ko, ar, hi, tr, nl, pl,
};

export type { Translation } from '../types';
export { es } from './es';
export { en } from './en';
