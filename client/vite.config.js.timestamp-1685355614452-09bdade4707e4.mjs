// vite.config.js
import { defineConfig } from "file:///O:/Projects/Jobs%20scrapper/client/node_modules/vite/dist/node/index.js";
import react from "file:///O:/Projects/Jobs%20scrapper/client/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()]
});
module.exports = {
  build: {
    rollupOptions: {
      // Skip emitting error on import when using external packages
      onwarn: (warning, rollupWarn) => {
        if (warning.code !== "MISSING_NAME") {
          rollupWarn(warning);
        }
      }
    }
  }
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJPOlxcXFxQcm9qZWN0c1xcXFxKb2JzIHNjcmFwcGVyXFxcXGNsaWVudFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiTzpcXFxcUHJvamVjdHNcXFxcSm9icyBzY3JhcHBlclxcXFxjbGllbnRcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL086L1Byb2plY3RzL0pvYnMlMjBzY3JhcHBlci9jbGllbnQvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCldLFxufSlcbm1vZHVsZS5leHBvcnRzID0ge1xuICBidWlsZDoge1xuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIC8vIFNraXAgZW1pdHRpbmcgZXJyb3Igb24gaW1wb3J0IHdoZW4gdXNpbmcgZXh0ZXJuYWwgcGFja2FnZXNcbiAgICAgIG9ud2FybjogKHdhcm5pbmcsIHJvbGx1cFdhcm4pID0+IHtcbiAgICAgICAgaWYgKHdhcm5pbmcuY29kZSAhPT0gJ01JU1NJTkdfTkFNRScpIHtcbiAgICAgICAgICByb2xsdXBXYXJuKHdhcm5pbmcpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59O1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE0UixTQUFTLG9CQUFvQjtBQUN6VCxPQUFPLFdBQVc7QUFHbEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUNuQixDQUFDO0FBQ0QsT0FBTyxVQUFVO0FBQUEsRUFDZixPQUFPO0FBQUEsSUFDTCxlQUFlO0FBQUE7QUFBQSxNQUViLFFBQVEsQ0FBQyxTQUFTLGVBQWU7QUFDL0IsWUFBSSxRQUFRLFNBQVMsZ0JBQWdCO0FBQ25DLHFCQUFXLE9BQU87QUFBQSxRQUNwQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGOyIsCiAgIm5hbWVzIjogW10KfQo=
