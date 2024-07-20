// vite.config.js
import { VitePWA } from "file:///C:/Users/Gideon/Desktop/AdventPrime/AdventPrime/node_modules/vite-plugin-pwa/dist/index.js";
import { defineConfig } from "file:///C:/Users/Gideon/Desktop/AdventPrime/AdventPrime/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Gideon/Desktop/AdventPrime/AdventPrime/node_modules/@vitejs/plugin-react/dist/index.mjs";
import viteBasicSslPlugin from "file:///C:/Users/Gideon/Desktop/AdventPrime/AdventPrime/node_modules/@vitejs/plugin-basic-ssl/dist/index.mjs";
var vite_config_default = defineConfig({
  base: "./",
  plugins: [react(), viteBasicSslPlugin(), VitePWA({
    registerType: "prompt",
    injectRegister: "auto",
    pwaAssets: {
      disabled: false,
      config: true
    },
    manifest: {
      name: "AdventPrime",
      short_name: "AdventPrime",
      description: "An application to manage event bookings for educational institutions",
      theme_color: "#000000"
    },
    workbox: {
      globPatterns: ["**/*.{js,jsx,css,html,svg,png,ico}"],
      cleanupOutdatedCaches: true,
      clientsClaim: true
    },
    devOptions: {
      enabled: true,
      navigateFallback: "index.html",
      suppressWarnings: true,
      type: "module"
    }
  })]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxHaWRlb25cXFxcRGVza3RvcFxcXFxBZHZlbnRQcmltZVxcXFxBZHZlbnRQcmltZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcR2lkZW9uXFxcXERlc2t0b3BcXFxcQWR2ZW50UHJpbWVcXFxcQWR2ZW50UHJpbWVcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0dpZGVvbi9EZXNrdG9wL0FkdmVudFByaW1lL0FkdmVudFByaW1lL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXB3YSc7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IHZpdGVCYXNpY1NzbFBsdWdpbiBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tYmFzaWMtc3NsXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBiYXNlOiBcIi4vXCIsXG4gIHBsdWdpbnM6IFtyZWFjdCgpLCB2aXRlQmFzaWNTc2xQbHVnaW4oKSwgVml0ZVBXQSh7XG4gICAgcmVnaXN0ZXJUeXBlOiAncHJvbXB0JyxcbiAgICBpbmplY3RSZWdpc3RlcjogJ2F1dG8nLFxuICAgIHB3YUFzc2V0czoge1xuICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgY29uZmlnOiB0cnVlLFxuICAgIH0sXG4gICAgbWFuaWZlc3Q6IHtcbiAgICAgIG5hbWU6ICdBZHZlbnRQcmltZScsXG4gICAgICBzaG9ydF9uYW1lOiAnQWR2ZW50UHJpbWUnLFxuICAgICAgZGVzY3JpcHRpb246ICdBbiBhcHBsaWNhdGlvbiB0byBtYW5hZ2UgZXZlbnQgYm9va2luZ3MgZm9yIGVkdWNhdGlvbmFsIGluc3RpdHV0aW9ucycsXG4gICAgICB0aGVtZV9jb2xvcjogJyMwMDAwMDAnLFxuICAgIH0sXG4gICAgd29ya2JveDoge1xuICAgICAgZ2xvYlBhdHRlcm5zOiBbJyoqLyoue2pzLGpzeCxjc3MsaHRtbCxzdmcscG5nLGljb30nXSxcbiAgICAgIGNsZWFudXBPdXRkYXRlZENhY2hlczogdHJ1ZSxcbiAgICAgIGNsaWVudHNDbGFpbTogdHJ1ZSxcbiAgICB9LFxuICAgIGRldk9wdGlvbnM6IHtcbiAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICBuYXZpZ2F0ZUZhbGxiYWNrOiAnaW5kZXguaHRtbCcsXG4gICAgICBzdXBwcmVzc1dhcm5pbmdzOiB0cnVlLFxuICAgICAgdHlwZTogJ21vZHVsZScsXG4gICAgfSxcbiAgfSldLFxufSkiXSwKICAibWFwcGluZ3MiOiAiO0FBQTJVLFNBQVMsZUFBZTtBQUNuVyxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFdBQVc7QUFDbEIsT0FBTyx3QkFBd0I7QUFHL0IsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTTtBQUFBLEVBQ04sU0FBUyxDQUFDLE1BQU0sR0FBRyxtQkFBbUIsR0FBRyxRQUFRO0FBQUEsSUFDL0MsY0FBYztBQUFBLElBQ2QsZ0JBQWdCO0FBQUEsSUFDaEIsV0FBVztBQUFBLE1BQ1QsVUFBVTtBQUFBLE1BQ1YsUUFBUTtBQUFBLElBQ1Y7QUFBQSxJQUNBLFVBQVU7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLFlBQVk7QUFBQSxNQUNaLGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxjQUFjLENBQUMsb0NBQW9DO0FBQUEsTUFDbkQsdUJBQXVCO0FBQUEsTUFDdkIsY0FBYztBQUFBLElBQ2hCO0FBQUEsSUFDQSxZQUFZO0FBQUEsTUFDVixTQUFTO0FBQUEsTUFDVCxrQkFBa0I7QUFBQSxNQUNsQixrQkFBa0I7QUFBQSxNQUNsQixNQUFNO0FBQUEsSUFDUjtBQUFBLEVBQ0YsQ0FBQyxDQUFDO0FBQ0osQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
