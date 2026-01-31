
export enum Category {
  NEURO = 'Neurologia',
  BURN = 'Queimados',
  PEDIATRIC = 'Pediatria',
  NURSING_CARE = 'Cuidados de Enfermagem',
  MEDICATION = 'Medicamentos & Protocolos',
  CRITICAL = 'UTI & Emergência'
}

export interface ScaleItem {
  id: string;
  name: string;
  category: Category;
  description: string;
  icon: string;
}

export interface Option {
  label: string;
  value: number;
}

export interface MultiSelectOption {
  title: string;
  options: Option[];
}

export interface ScoreGuidance {
  min: number;
  max: number;
  pearls: string[];
  pitfalls: string[];
  nursingCare: string[];
}

export interface ClinicalPearls {
  static?: {
    pearls: string[];
    pitfalls: string[];
    nursingCare: string[];
  };
  dynamic?: ScoreGuidance[];
}
