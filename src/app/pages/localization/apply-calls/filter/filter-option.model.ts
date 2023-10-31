export interface FilterOption {
    id: number;
    name: string;
    options: Option[];
  }
  
  export interface Option {
    id: number;
    name: string;
    value: number;
    category: string;
  }
  