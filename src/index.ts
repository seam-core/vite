import { mergeConfig, type UserConfig } from 'vite'
import build from '@/build.ts'
import server from '@/server.ts'

export const lonewolfyx = (config: UserConfig = {}) => {
	return mergeConfig({ server, build }, config)
}

export default lonewolfyx
