import { defineBuildConfig } from "unbuild"

export default defineBuildConfig({
  // 每次打包时清除dist目录
  clean: true,
  // 生成声明文件
  declaration: true,
  // 打包入口文件
  entries: [
    "src/map/index",
    "src/utils/index"
  ],
})