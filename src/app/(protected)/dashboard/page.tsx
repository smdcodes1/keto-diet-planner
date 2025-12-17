import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlusCircle, Utensils } from "lucide-react";
import Link from "next/link";
import { NutritionChart } from "@/components/nutrition-chart";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Dashboard
        </h1>
        <p className="text-muted-foreground">
          Welcome back! Here&apos;s your keto snapshot.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <NutritionChart />

        <Card>
          <CardHeader>
            <CardTitle>Quick Start</CardTitle>
            <CardDescription>
              Ready to cook? Generate a new recipe.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <p className="text-muted-foreground">
              Let our AI create a delicious keto recipe for you based on your
              preferences and available ingredients.
            </p>
            <Button asChild className="w-fit">
              <Link href="/recipes">
                <PlusCircle className="mr-2 h-4 w-4" />
                Generate Recipe
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Today&apos;s Meals</CardTitle>
            <CardDescription>What&apos;s on the menu for today.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4 text-muted-foreground">
              <div className="flex items-center gap-4">
                <Utensils className="w-5 h-5" />
                <span>Breakfast: Avocado & Eggs</span>
              </div>
              <div className="flex items-center gap-4">
                <Utensils className="w-5 h-5" />
                <span>Lunch: Steak Salad</span>
              </div>
              <div className="flex items-center gap-4">
                <Utensils className="w-5 h-5" />
                <span>Dinner: Salmon with Asparagus</span>
              </div>
              <Button variant="outline" className="w-fit mt-2" asChild>
                <Link href="/meal-planner">
                  View Full Plan
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
