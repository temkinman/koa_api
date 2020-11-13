const Koa = require('koa'); //подкючаем KOA
const app = new Koa();

const koaBody = require('koa-body');
const router = require('../router');

/*app.use(async (context, next) => {
    console.log('1: Middleware');
    context.body = '1: Hello KOA Server!!!';
    next(); // без этой записи след. запрос не отработает
})*/


// важно сперва app.use(koaBody()); а потом роуты иначе правильно работать не будет
app.use(koaBody());
app.use(router.routes());
app.use(router.allowedMethods());

//next - promise
app.use(async (context, next) => {
    context.body = '2: Hello KOA Server!!!';
    console.log('2: Middleware');
})



app.listen(3000, () => {
    console.log('http://localhost:3000');
});