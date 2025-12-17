"use server";
import { generateKetoRecipe, type GenerateKetoRecipeInput } from '@/ai/flows/generate-keto-recipe';

export async function handleGenerateRecipe(input: GenerateKetoRecipeInput) {
    try {
        const result = await generateKetoRecipe(input);
        return { success: true, data: result };
    } catch (error) {
        console.error(error);
        const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred.";
        return { success: false, error: errorMessage };
    }
}
