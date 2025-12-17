"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import type { GenerateKetoRecipeOutput } from "@/ai/flows/generate-keto-recipe";
import { handleGenerateRecipe } from "@/app/actions";
import { Loader2, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  preferences: z
    .string()
    .min(10, "Please describe your preferences in a bit more detail."),
  ingredients: z
    .string()
    .min(3, "Please list at least one ingredient."),
});

interface RecipeFormProps {
  setIsLoading: (isLoading: boolean) => void;
  setRecipe: (recipe: GenerateKetoRecipeOutput | null) => void;
}

export function RecipeForm({ setIsLoading, setRecipe }: RecipeFormProps) {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      preferences: "No specific allergies. I enjoy chicken and fish. Looking for a dinner recipe.",
      ingredients: "Chicken breast, broccoli, cheddar cheese, cream cheese",
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setRecipe(null);
    const result = await handleGenerateRecipe(values);
    setIsLoading(false);

    if (result.success && result.data) {
      setRecipe(result.data);
      toast({
        title: "Recipe Generated!",
        description: "Your delicious new keto recipe is ready.",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Generation Failed",
        description:
          result.error ||
          "There was an issue generating your recipe. Please try again.",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="preferences"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Dietary Preferences</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="e.g., allergies, preferred meats, meal type (dinner, lunch)"
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ingredients"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Available Ingredients</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="e.g., chicken, broccoli, avocados, olive oil"
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" disabled={isSubmitting} size="lg">
          {isSubmitting ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Sparkles className="mr-2 h-4 w-4" />
          )}
          Generate Recipe
        </Button>
      </form>
    </Form>
  );
}
