# 开发启动脚本

# 首次启动时删除之前构建出的“dist”文件夹
rm -rf dist

# babel 编译
babel src --out-dir dist

# 生成命令  ast 语法树 命令配置
muniz --mode=pro --type=desc

# 提示打包成功
echo 'Muniz 脚手架 插件 项目打包成功'
