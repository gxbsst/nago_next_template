# 部署

## 设置 frontend/.env

// frontend/.env
``` 
GRAPHQL_ENDPOINT=http://nago_next_template.home/wp/graphql
FRONTEND_URL=http://localhost:3000
SITE_NAME='Store Demo'
SESSION_TOKEN_LS_KEY='woo-session-token'
REFRESH_TOKEN_LS_KEY='woo-refresh-token'
AUTH_TOKEN_SS_KEY='woo-auth-token'
CLIENT_SESSION_SS_KEY='woo-client-session'
CLIENT_SESSION_EXP_SS_KEY='woo-client-session-exp'
NONCE_KEY=
NONCE_SALT=
```

## 设置 backend/.env

// backend/.env
DB_HOST=127.0.0.1:3306
DB_USER=root
DB_PASSWORD=""
DB_NAME=nago_next_template
WP_HOME=http://nago_next_template.home
WP_SITEURL="${WP_HOME}/wp"
#WP_DEBUG_LOG='debug.log'
WP_ENV='development'
WP_DEBUG=false

AUTH_KEY=
SECURE_AUTH_KEY=
LOGGED_IN_KEY=
NONCE_KEY=
AUTH_SALT=
SECURE_AUTH_SALT=
LOGGED_IN_SALT=
NONCE_SALT=
GRAPHQL_JWT_AUTH_SECRET_KEY=AAAA
```

## 手动安装wordpress

``` base
wp core install --url=nago_next_template.home --title="Nago Tech" --admin_user=gxbsst --admin_password=51448888 --admin_email=gxbsst@gmail.com
```

## 1. 安装依赖

```bash
  cd && frontend && npm install
```

## 2. 编译

```bash
  npm run deploy:prod
```

## 启动

```bash
  pm2 start ecosystem.config.js # 如果没有安装pm2 可以npm install -g pm2
```

## 设置nginx 代理

```nginx
# 参考nginx.conf
  ```