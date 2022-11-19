import {defineConfig} from "vite";
import vuePlugin from "@vitejs/plugin-vue";
import vitePluginIKun from '../src'

export default defineConfig({
  plugins:[vuePlugin(), vitePluginIKun()]
})
