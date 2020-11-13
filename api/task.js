// router.post('/addTask', async (context) => {
//  exports.addTask здесь это router.post('/addTask'  в файле router

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
