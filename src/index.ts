import type { PluginOption } from 'vite';
import basketball from "./assets/basketball";

export default function vitePluginIKun():PluginOption{
  const print =  (t)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          console.log(t)
          resolve(t)
        },1000)
    })
  }

  return {
    name: 'vite-plugin-ikun',
    enforce: 'pre',
    apply: 'serve',
    config: async function(config, { command }) {
        for(let i of basketball){
          await print(i)
        }
    },

  }
}
