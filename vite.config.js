import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

//https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});

// export default defineConfig({
//   resolve: {
//     alias: {
//       // แก้ไขพาธที่ต้องการเพื่อให้เหมาะกับเบราว์เซอร์
//       path: "path-browserify",
//       buffer: "buffer/",
//       // เพิ่มการตั้งค่าอื่นๆ ตามที่ต้องการ
//     },
//   },
//   define: {
//     "process.env": {},
//   },
// });
