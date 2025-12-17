import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Settings } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Settings
        </h1>
        <p className="text-muted-foreground">
          Manage your account and nutritional preferences.
        </p>
      </div>
      <Card className="flex flex-col items-center justify-center text-center p-12 min-h-[400px]">
        <CardHeader>
          <div className="mx-auto bg-primary/10 p-4 rounded-full mb-4">
            <Settings className="w-10 h-10 text-primary" />
          </div>
          <CardTitle className="font-headline">Coming Soon!</CardTitle>
          <CardDescription>
            This is where you'll be able to manage your profile, set your macro goals,
            <br />
            and customize your KetoPilot experience.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
