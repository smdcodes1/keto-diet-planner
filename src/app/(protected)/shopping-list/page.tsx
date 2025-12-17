import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

export default function ShoppingListPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Shopping List
        </h1>
        <p className="text-muted-foreground">
          Automatically generate shopping lists from your meal plans.
        </p>
      </div>
      <Card className="flex flex-col items-center justify-center text-center p-12 min-h-[400px]">
        <CardHeader>
          <div className="mx-auto bg-primary/10 p-4 rounded-full mb-4">
            <ShoppingCart className="w-10 h-10 text-primary" />
          </div>
          <CardTitle className="font-headline">Coming Soon!</CardTitle>
          <CardDescription>
            The automated shopping list feature is on its way.
            <br />
            It will compile all ingredients from your meal plan into one convenient list.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
