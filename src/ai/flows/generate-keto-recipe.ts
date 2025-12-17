'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating ketogenic recipes based on user preferences and available ingredients.
 *
 * The flow takes user preferences and available ingredients as input and returns a ketogenic recipe.
 * The recipe includes the ingredients and the instruction for preparation.
 *
 * @interface GenerateKetoRecipeInput - The input type for the generateKetoRecipe function.
 * @interface GenerateKetoRecipeOutput - The output type for the generateKetoRecipe function.
 * @function generateKetoRecipe - The function that triggers the recipe generation flow.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateKetoRecipeInputSchema = z.object({
  preferences: z
    .string()
    .describe('Dietary preferences of the user, e.g., allergies, preferred meats, etc.'),
  ingredients: z
    .string()
    .describe('Available ingredients the user wants to use in the recipe.'),
});

export type GenerateKetoRecipeInput = z.infer<typeof GenerateKetoRecipeInputSchema>;

const GenerateKetoRecipeOutputSchema = z.object({
  recipeName: z.string().describe('The name of the generated keto recipe.'),
  ingredients: z.string().describe('A list of ingredients required for the recipe.'),
  instructions: z.string().describe('Step-by-step instructions to prepare the recipe.'),
  nutritionData: z
    .string()
    .optional()
    .describe('Nutrition data for the recipe, including macros and calories.'),
});

export type GenerateKetoRecipeOutput = z.infer<typeof GenerateKetoRecipeOutputSchema>;

export async function generateKetoRecipe(input: GenerateKetoRecipeInput): Promise<GenerateKetoRecipeOutput> {
  return generateKetoRecipeFlow(input);
}

const generateKetoRecipePrompt = ai.definePrompt({
  name: 'generateKetoRecipePrompt',
  input: {schema: GenerateKetoRecipeInputSchema},
  output: {schema: GenerateKetoRecipeOutputSchema},
  prompt: `You are an expert ketogenic recipe generator. Generate a delicious ketogenic recipe based on the user's preferences and available ingredients.

  Dietary Preferences: {{{preferences}}}
  Available Ingredients: {{{ingredients}}}

  Recipe should include:
  - A creative and descriptive recipe name.
  - A list of ingredients with quantities.
  - Clear and concise step-by-step instructions.
  - Nutritional data (macros, calories).

  Ensure the recipe is strictly ketogenic (high-fat, moderate-protein, very-low-carb).
`,
});

const generateKetoRecipeFlow = ai.defineFlow(
  {
    name: 'generateKetoRecipeFlow',
    inputSchema: GenerateKetoRecipeInputSchema,
    outputSchema: GenerateKetoRecipeOutputSchema,
  },
  async input => {
    const {output} = await generateKetoRecipePrompt(input);
    return output!;
  }
);
