import { defineConfig, type UserConfig } from 'vite'

export const buildConfig = defineConfig({
	build: {
		// 指定生成静态资源的存放路径
		assetsDir: './static',
		// 最小化压缩
		minify: true,
		// 启用 CSS 代码拆分，CSS 单一文件
		cssCodeSplit: true,
		// 规定触发警告的 chunk 大小
		chunkSizeWarningLimit: 500,
		// terser 设置项
		terserOptions: {
			compress: {
				// 删除 console.* 函数
				drop_console: true,
				// 删除debugger;语句
				drop_debugger: true
			},
			format: {
				// 省略输出中的注释
				comments: false
			}
		},
		rollupOptions: {
			output: {
				manualChunks: (id: any) => {
					// 依赖资源拆分打包
					if (id.includes('node_modules')) {
						return id.toString().split('node_modules/')[1].split('/')[0].toString()
					}
				},
				entryFileNames: 'js/[name].[hash].js',
				chunkFileNames: 'js/[name].[hash].js',
				assetFileNames: '[ext]/[name].[hash].[ext]'
			}
		}
	}
}) as UserConfig
