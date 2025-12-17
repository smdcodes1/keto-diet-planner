import { Flame } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="p-2 bg-primary/20 rounded-lg">
        <Flame className="size-5 text-primary" />
      </div>
      <span className="text-lg font-semibold font-headline">KetoPilot</span>
    </div>
  );
}
