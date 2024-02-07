const path = require('path')

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
      'PORT': '3000',
      'MYSQL_HOST': '119.3.241.33',
      'MYSQL_PORT': '3306',
      'MYSQL_DATABASE': 'yvrlinlihouse2023old',
      'MYSQL_USER': 'my',
      'MYSQL_PASSWORD': 'Ggfpeitfklkimg@9527',
      'ZOOM_CLIENT_ID': 'b7z0Yv2CR9yFSXmBudTNEw',
      'ZOOM_CLIENT_SECRET': '94Xd35UN4Z3xAkaQw53OEXzhbsjqahhS',
      'DATABASE_URL': '@119.3.241.33:3306/yvrlinlihouse2023old',
      'NEXTAUTH_URL': 'http://119.3.241.33:8005',
      'NEXTAUTH_SECRET': 'Z69OQdAezdJTBbcPtl+QbM/SO7vlb6TMUn9wzw5XcLU=',
      'CHANNEL_ID': "C058FLMD0RH",
      'SLACK_BOT_TOKEN': "xoxb-5268262482099-5268485444018-zDet1quUyI34hbDOp2QhY5wq",
      'SLACK_SIGNIN_SECRET': "84afb42305f2153bcb6ebe47ccf98ce7",
      'SLACK_APP_TOKEN': "xapp-1-A057FR93PSB-5281155487985-68dd4264768087c54c39c092b8c6102f395f5563338f5dd15f8312bf6206fe72",
      'GOOGLE_MAP_API_KEY': 'AIzaSyC1GIAsMtbGdjKOALrEkOYslQ2b01YlLLg',
      'UPLOAD_FILE_BASE': '/images',
      'UPLOAD_URL_BASE': 'http://119.3.241.33:81/images'
    },
    sassOptions:{
      includePaths: [path.join(__dirname, 'styles')]
    }
  }

module.exports = nextConfig