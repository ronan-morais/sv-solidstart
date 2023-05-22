import solid from "solid-start/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [solid({adapter: vercel()})],
});

function vercel(): string | import("solid-start/vite").Adapter | undefined {
  throw new Error("Function not implemented.");
}

