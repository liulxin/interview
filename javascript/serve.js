const Koa = require('koa')

const app = new Koa()

app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set(
    'Access-Control-Allow-Headers',
    'Content-Type, Content-Length, Authorization, Accept, X-Requested-With'
  )
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
  ctx.set('Access-Control-Allow-Credentials', true)
  /* 解决OPTIONS请求 */
  if (ctx.method == 'OPTIONS') {
    ctx.body = ''
    ctx.status = 204
  } else {
    await next()
  }
})

app.use(async ctx => {
  ctx.body = {
    msg: 'hello'
  }
})

app.listen(3000)
