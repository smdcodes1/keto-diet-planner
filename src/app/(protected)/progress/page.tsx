import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LineChart } from "lucide-react";

export default function ProgressPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Progress Tracking
        </h1>
        <p className="text-muted-foreground">
          Visualize your weight loss and keto adherence over time.
        </p>
      </div>
      <Card className="flex flex-col items-center justify-center text-center p-12 min-h-[400px]">
        <CardHeader>
          <div className="mx-auto bg-primary/10 p-4 rounded-full mb-4">
            <LineChart className="w-10 h-10 text-primary" />
          </div>
          <CardTitle className="font-headline">Coming Soon!</CardTitle>
          <CardDescription>
            We are building beautiful charts and graphs to help you track your progress.
            <br />
            Soon you'll be able to see your journey unfold.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
