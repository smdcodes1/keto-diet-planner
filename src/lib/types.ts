export interface UserProfile {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  // Keto specific settings
  goals?: {
    calories: number;
    protein: number; // in grams
    fat: number; // in grams
    carbs: number; // in grams
  };
}

export interface Recipe {
  id?: string;
  name: string;
  ingredients: string[];
  instructions: string[];
  nutrition: {
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
  };
  imageUrl?: string;
  createdBy: string; // User UID
}

export interface Meal {
  id?: string;
  date: string; // YYYY-MM-DD
  type: "breakfast" | "lunch" | "dinner" | "snack";
  recipeId: string;
  userId: string;
}
