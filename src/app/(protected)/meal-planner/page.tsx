import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays } from "lucide-react";

export default function MealPlannerPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Meal Planner
        </h1>
        <p className="text-muted-foreground">
          Organize your weekly keto meals with ease.
        </p>
      </div>
      <Card className="flex flex-col items-center justify-center text-center p-12 min-h-[400px]">
        <CardHeader>
          <div className="mx-auto bg-primary/10 p-4 rounded-full mb-4">
            <CalendarDays className="w-10 h-10 text-primary" />
          </div>
          <CardTitle className="font-headline">Coming Soon!</CardTitle>
          <CardDescription>
            Our interactive meal planner is currently in the works.
            <br />
            Soon you'll be able to drag and drop recipes to build your perfect keto week.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
