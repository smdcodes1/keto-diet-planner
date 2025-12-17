"use client";

import { useState } from "react";
import { RecipeForm } from "@/components/recipe-form";
import type { GenerateKetoRecipeOutput } from "@/ai/flows/generate-keto-recipe";
import { RecipeDisplay } from "@/components/recipe-display";
import { Separator } from "@/components/ui/separator";

export default function RecipesPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [recipe, setRecipe] = useState<GenerateKetoRecipeOutput | null>(null);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          AI Recipe Generator
        </h1>
        <p className="text-muted-foreground">
          Turn your ingredients into delicious keto meals.
        </p>
      </div>

      <RecipeForm setIsLoading={setIsLoading} setRecipe={setRecipe} />

      {(isLoading || recipe) && <Separator />}

      <RecipeDisplay isLoading={isLoading} recipe={recipe} />
    </div>
  );
}
