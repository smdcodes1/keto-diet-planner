import { Flame } from "lucide-react";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/dashboard" className="flex items-center gap-2">
      <div className="p-2 bg-primary/20 rounded-lg">
        <Flame className="size-5 text-primary" />
      </div>
      <span className="text-lg font-semibold font-headline">KetoPilot</span>
    </Link>
  );
}
