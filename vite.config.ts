import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/ComicConPortfolio/",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      "vaul@1.1.2": "vaul",
      "sonner@2.0.3": "sonner",
      "recharts@2.15.2": "recharts",
      "react-resizable-panels@2.1.7": "react-resizable-panels",
      "react-hook-form@7.55.0": "react-hook-form",
      "react-day-picker@8.10.1": "react-day-picker",
      "next-themes@0.4.6": "next-themes",
      "lucide-react@0.487.0": "lucide-react",
      "input-otp@1.4.2": "input-otp",
      "figma:asset/ef4554dfbd1a51364a70bcb5d2a2c060bb881c85.png": path.resolve(
        __dirname,
        "./src/assets/ef4554dfbd1a51364a70bcb5d2a2c060bb881c85.png"
      ),
      "figma:asset/c7c670d18fbb15f09a09d6a05707afa3f1fde522.png": path.resolve(
        __dirname,
        "./src/assets/c7c670d18fbb15f09a09d6a05707afa3f1fde522.png"
      ),
      "figma:asset/bf64dfae35d85180aab80a27868c546624c651da.png": path.resolve(
        __dirname,
        "./src/assets/bf64dfae35d85180aab80a27868c546624c651da.png"
      ),
      "figma:asset/ab7e27bd0ebefe3d90f5b7e9708ca654bb85f91f.png": path.resolve(
        __dirname,
        "./src/assets/ab7e27bd0ebefe3d90f5b7e9708ca654bb85f91f.png"
      ),
      "figma:asset/871547358e81935296eca092ff5df46d8eacdf3c.png": path.resolve(
        __dirname,
        "./src/assets/871547358e81935296eca092ff5df46d8eacdf3c.png"
      ),
      "figma:asset/79635a88d0c83b551ebfc1efbae4c1d6b8266278.png": path.resolve(
        __dirname,
        "./src/assets/79635a88d0c83b551ebfc1efbae4c1d6b8266278.png"
      ),
      "figma:asset/794d55b561b0c7ef4b3640dab716f870c369f47a.png": path.resolve(
        __dirname,
        "./src/assets/794d55b561b0c7ef4b3640dab716f870c369f47a.png"
      ),
      "figma:asset/785dd521e7f0e390ff4cc6cdc10add582ee53505.png": path.resolve(
        __dirname,
        "./src/assets/785dd521e7f0e390ff4cc6cdc10add582ee53505.png"
      ),
      "figma:asset/6554fc67aa9e90b2fe30fefa85066f5bb5eb1982.png": path.resolve(
        __dirname,
        "./src/assets/6554fc67aa9e90b2fe30fefa85066f5bb5eb1982.png"
      ),
      "figma:asset/60379d370239f608e885fd23c859f45640d8f77d.png": path.resolve(
        __dirname,
        "./src/assets/60379d370239f608e885fd23c859f45640d8f77d.png"
      ),
      "figma:asset/5199a7a26562ef7762c5c9afd41fafd8a5d8b826.png": path.resolve(
        __dirname,
        "./src/assets/5199a7a26562ef7762c5c9afd41fafd8a5d8b826.png"
      ),
      "figma:asset/1cd05aa94fc7333af7622ec3533064a914750213.png": path.resolve(
        __dirname,
        "./src/assets/1cd05aa94fc7333af7622ec3533064a914750213.png"
      ),
      "figma:asset/1896aef51e8c4cd8ac345be190f21f7c2aef0ba4.png": path.resolve(
        __dirname,
        "./src/assets/1896aef51e8c4cd8ac345be190f21f7c2aef0ba4.png"
      ),
      "figma:asset/13db314b16dbca6934491802f5828d9abb489e2a.png": path.resolve(
        __dirname,
        "./src/assets/13db314b16dbca6934491802f5828d9abb489e2a.png"
      ),
      "embla-carousel-react@8.6.0": "embla-carousel-react",
      "cmdk@1.1.1": "cmdk",
      "class-variance-authority@0.7.1": "class-variance-authority",
      "@radix-ui/react-tooltip@1.1.8": "@radix-ui/react-tooltip",
      "@radix-ui/react-toggle@1.1.2": "@radix-ui/react-toggle",
      "@radix-ui/react-toggle-group@1.1.2": "@radix-ui/react-toggle-group",
      "@radix-ui/react-tabs@1.1.3": "@radix-ui/react-tabs",
      "@radix-ui/react-switch@1.1.3": "@radix-ui/react-switch",
      "@radix-ui/react-slot@1.1.2": "@radix-ui/react-slot",
      "@radix-ui/react-slider@1.2.3": "@radix-ui/react-slider",
      "@radix-ui/react-separator@1.1.2": "@radix-ui/react-separator",
      "@radix-ui/react-select@2.1.6": "@radix-ui/react-select",
      "@radix-ui/react-scroll-area@1.2.3": "@radix-ui/react-scroll-area",
      "@radix-ui/react-radio-group@1.2.3": "@radix-ui/react-radio-group",
      "@radix-ui/react-progress@1.1.2": "@radix-ui/react-progress",
      "@radix-ui/react-popover@1.1.6": "@radix-ui/react-popover",
      "@radix-ui/react-navigation-menu@1.2.5":
        "@radix-ui/react-navigation-menu",
      "@radix-ui/react-menubar@1.1.6": "@radix-ui/react-menubar",
      "@radix-ui/react-label@2.1.2": "@radix-ui/react-label",
      "@radix-ui/react-hover-card@1.1.6": "@radix-ui/react-hover-card",
      "@radix-ui/react-dropdown-menu@2.1.6": "@radix-ui/react-dropdown-menu",
      "@radix-ui/react-dialog@1.1.6": "@radix-ui/react-dialog",
      "@radix-ui/react-context-menu@2.2.6": "@radix-ui/react-context-menu",
      "@radix-ui/react-collapsible@1.1.3": "@radix-ui/react-collapsible",
      "@radix-ui/react-checkbox@1.1.4": "@radix-ui/react-checkbox",
      "@radix-ui/react-avatar@1.1.3": "@radix-ui/react-avatar",
      "@radix-ui/react-aspect-ratio@1.1.2": "@radix-ui/react-aspect-ratio",
      "@radix-ui/react-alert-dialog@1.1.6": "@radix-ui/react-alert-dialog",
      "@radix-ui/react-accordion@1.2.3": "@radix-ui/react-accordion",
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "esnext",
    outDir: "build",
  },
  server: {
    port: 3000,
    open: true,
  },
});
