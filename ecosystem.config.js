module.exports = {
  apps : [{
    name: 'linli-matchresult',
    script: 'npm',
    args: 'start',
    instances: '1',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    reactStrictMode: false,
    swcMinify: true,
    env_production : {
      "NODE_ENV": "production",
      'PORT': 8005,
      'MYSQL_HOST': '119.3.241.33',
      'MYSQL_PORT': '3306',
      'MYSQL_DATABASE': 'yvrlinlihouse2023old',
      'MYSQL_USER': 'my',
      'MYSQL_PASSWORD': 'Ggfpeitfklkimg@9527',
      'DATABASE_URL': '@119.3.241.33/yvrlinlihouse2023old',
      'NEXTAUTH_URL': 'http://119.3.241.33:8005',
      'NEXTAUTH_SECRET': 'Z69OQdAezdJTBbcPtl+QbM/SO7vlb6TMUn9wzw5XcLU=',
    }
  }],
}