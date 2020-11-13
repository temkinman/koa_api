// router.post('/addTask', async (context) => {
//  exports.addTask здесь это router.post('/addTask'  в файле router


/*id, description это то что мы передаем в 
router.post('./addTask/', async (content) => {
  context.request.body  // {id, description} поля объекта
})*/

exports.addTask = ({id, description}) =>
  new Promise(async (resolve, reject) => {
    console.log('id', id);
    console.log('description', description);
    try {
      resolve({
        success: true,
      });
    } catch (err) {
      reject(err);
    }
  });

  exports.addChannel = ({title}) => {
    // new Promise
  } 

  