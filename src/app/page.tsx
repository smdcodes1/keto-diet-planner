import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChefHat, List, Target, TrendingUp } from "lucide-react";
import { Logo } from "@/components/logo";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link href="/" className="flex items-center justify-center">
          <Logo />
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Button asChild variant="ghost">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Get Started</Link>
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                    Navigate Your Keto Journey with AI
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    KetoPilot is your intelligent partner for mastering the
                    ketogenic diet. Generate recipes, plan your meals, track
                    your macros, and watch your progress soar.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/signup">Start Your Journey Free</Link>
                  </Button>
                </div>
              </div>
              <div className="w-full h-auto rounded-xl overflow-hidden">
                <img
                  src="https://picsum.photos/seed/keto-hero/600/400"
                  width={600}
                  height={400}
                  alt="Hero"
                  data-ai-hint="healthy food"
                  className="aspect-video object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-card">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                  Everything You Need to Succeed
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From AI-powered tools to detailed tracking, KetoPilot provides a comprehensive suite of features to support your health goals.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-2 lg:max-w-none">
              <div className="grid gap-4">
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                       <ChefHat className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>AI Recipe Generation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Stuck in a recipe rut? Our AI generates delicious, keto-compliant recipes based on your tastes and the ingredients you have on hand.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                     <div className="bg-primary/10 p-3 rounded-full">
                       <List className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>Meal Planning & Shopping Lists</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Plan your week with ease. KetoPilot helps you build meal plans that fit your macros and automatically generates a shopping list for you.</p>
                  </CardContent>
                </Card>
              </div>
               <div className="grid gap-4">
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                       <Target className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>Nutritional Tracking</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Stay on target. Log your meals and instantly see your daily breakdown of fat, protein, and carbs to ensure you're in ketosis.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                     <div className="bg-primary/10 p-3 rounded-full">
                       <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>Progress Visualization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Celebrate your success. Visually track your weight loss and keto adherence over time with intuitive charts and graphs.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 KetoPilot. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
