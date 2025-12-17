import type { GenerateKetoRecipeOutput } from "@/ai/flows/generate-keto-recipe";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

interface RecipeDisplayProps {
  recipe: GenerateKetoRecipeOutput | null;
  isLoading: boolean;
}

const formatText = (text: string) => {
  return text.split('\n').map((item, index) => (
    item.trim() && <li key={index}>{item.replace(/^-/, '').trim()}</li>
  ));
};

export function RecipeDisplay({ recipe, isLoading }: RecipeDisplayProps) {
  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </CardHeader>
        <CardContent className="space-y-6">
          <Skeleton className="h-48 w-full rounded-lg" />
          <div className="space-y-4">
            <Skeleton className="h-6 w-1/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
          <div className="space-y-4">
            <Skeleton className="h-6 w-1/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!recipe) {
    return null;
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">{recipe.recipeName}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="relative aspect-video w-full">
            <Image 
                src="https://picsum.photos/seed/recipe-display/600/400"
                fill
                alt={recipe.recipeName}
                className="object-cover rounded-lg"
                data-ai-hint="cooked food"
            />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
            <div>
                <h3 className="text-xl font-semibold mb-2 font-headline">Ingredients</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {formatText(recipe.ingredients)}
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-semibold mb-2 font-headline">Nutrition</h3>
                <p className="text-sm text-muted-foreground whitespace-pre-line">
                    {recipe.nutritionData}
                </p>
            </div>
        </div>

        <div>
            <h3 className="text-xl font-semibold mb-2 font-headline">Instructions</h3>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                {formatText(recipe.instructions)}
            </ol>
        </div>
      </CardContent>
    </Card>
  );
}
