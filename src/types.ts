export interface Item {
  quantity: number;
  name: string;
  packed: boolean;
}

export type SortBy = "input" | "name" | "packed";
