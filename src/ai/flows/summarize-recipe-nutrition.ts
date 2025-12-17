'use server';
/**
 * @fileOverview Summarizes a recipe's nutritional content, including macro and micronutrient breakdowns.
 *
 * - summarizeRecipeNutrition - A function that handles the recipe summarization process.
 * - SummarizeRecipeNutritionInput - The input type for the summarizeRecipeNutrition function.
 * - SummarizeRecipeNutritionOutput - The return type for the summarizeRecipeNutrition function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeRecipeNutritionInputSchema = z.object({
  recipe: z.string().describe('The full text of the recipe to summarize.'),
});
export type SummarizeRecipeNutritionInput = z.infer<typeof SummarizeRecipeNutritionInputSchema>;

const SummarizeRecipeNutritionOutputSchema = z.object({
  summary: z.string().describe('A summary of the recipe, including macro and micronutrient information.'),
});
export type SummarizeRecipeNutritionOutput = z.infer<typeof SummarizeRecipeNutritionOutputSchema>;

export async function summarizeRecipeNutrition(input: SummarizeRecipeNutritionInput): Promise<SummarizeRecipeNutritionOutput> {
  return summarizeRecipeNutritionFlow(input);
}

const summarizeRecipeNutritionPrompt = ai.definePrompt({
  name: 'summarizeRecipeNutritionPrompt',
  input: {schema: SummarizeRecipeNutritionInputSchema},
  output: {schema: SummarizeRecipeNutritionOutputSchema},
  prompt: `You are a nutritional expert.  Summarize the following recipe in terms of its nutritional content, including macro and micronutrient breakdowns, and any potential health benefits or drawbacks.  Make the summary concise and easy to understand.  Use markdown formatting.\n\nRecipe:\n{{{recipe}}}`,
});

const summarizeRecipeNutritionFlow = ai.defineFlow(
  {
    name: 'summarizeRecipeNutritionFlow',
    inputSchema: SummarizeRecipeNutritionInputSchema,
    outputSchema: SummarizeRecipeNutritionOutputSchema,
  },
  async input => {
    const {output} = await summarizeRecipeNutritionPrompt(input);
    return output!;
  }
);
