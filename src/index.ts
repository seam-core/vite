import { mergeConfig, type UserConfig } from 'vite'
import { buildConfig } from '@/vite.config.build.ts'

export const lonewolfyx = (config: UserConfig = {}) => {
	return mergeConfig(buildConfig, config)
}

export default lonewolfyx
