export interface PerfumeItem {
  brand: string;
  name: string;
  price: string; // Display string with currency
  image: string; // URL
}

export interface ComparisonData {
  id: string;
  luxury: PerfumeItem;
  dupe: PerfumeItem;
  notes: string; // Scent description
  similarity: number; // Percentage 0-100
  description: string; // Short analysis
}