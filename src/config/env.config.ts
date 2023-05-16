export interface IEnvConfig {
  baseUrl: string
}

function getEnv(key:string,defaultValue=''){
return process.env[key]||defaultValue
}

export const envConfig:IEnvConfig={
  baseUrl:getEnv('BASE_URL')
}