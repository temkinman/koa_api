const Router = require('koa-router');
const router = new Router();

const Task = require('../api/task');


//отправляем post запрос на сервер
router.post('/addTask', async (context) => { //context это то что нам придет от сервера
    // console.log('context', context)
    // console.log('context.requestbody', context.request.body)
    try {
        const result = await Task.addTask(context.request.body);
        context.body = result;
    }
    catch(err) {
        console.error('err', err);
        context.status = 500; //возвращаем статус и тело контекста, что на фронте не было видно реальной ошибки
        context.body = 'Internal error';
    }
})

router.get('/', async(context) => {
    context.body = 'router works';
})

module.exports = router;