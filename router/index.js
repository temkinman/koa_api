const Router = require("koa-router");
const router = new Router();

const Task = require("../api/task");

let state = {
  users: {
    1: {
      id: "1",
      nickName: "Alex",
      avatar: "img",
      chatIds: ["111", "777"],
    },
    2: {
      id: "2",
      nickName: "Mikle",
      avatar: "img",
      chatIds: ["888", "777"],
    },
  },
  chats: {
    111: {
      title: "onliner",
      id: "111",
      messages: [
        {
          time: "2020-07-20T14:12",
          from: "onliner",
          text: "Hello Belarus",
          messageId: "-1",
        },
      ],
      draft: "",
    },
    777: {
      title: "nexta",
      id: "777",
      messages: [
        {
          time: "2020-09-30T20:00",
          from: "nexta",
          text: "Hello",
          messageId: "-2",
        },
      ],
      draft: "",
    },
    888: {
      title: "tutby",
      id: "888",
      messages: [
        {
          time: "2020-08-30T24:00",
          from: "tutBY",
          text: "Hi",
          messageId: "-3",
        },
      ],
      draft: "",
    },
  },
};

//отправляем post запрос на сервер
router.post("/addTask", async (context) => {
  //context это то что нам придет от сервера
  // console.log('context', context)
  // console.log('context.requestbody', context.request.body)
  try {
    const result = await Task.addTask(context.request.body);
    context.body = result;
  } catch (err) {
    console.error("err", err);
    context.status = 500; //возвращаем статус и тело контекста, что на фронте не было видно реальной ошибки
    context.body = "Internal error";
  }
});

router.get("/", async (ctx) => {
  try {
    ctx.body = state;
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
    ctx.app.emit("error", err, ctx);
  }
});

router.get("/:id", async (ctx) => {
  try {
    ctx.body = state.users[ctx.params.id];
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
    ctx.app.emit("error", err, ctx);
  }
});

router.post("/", async (ctx) => {
  const type = ctx.request.body.type;

  switch (type) {
    case "ADD_CHAT":
      const { chatId, chatTitle } = ctx.request.body;

      const newChat = {
        id: chatId,
        title: chatTitle,
        messages: [],
        draft: "",
      };

      state = { ...state, chats: { ...state.chats, [chatId]: newChat } };
      ctx.body = state;
      break;

    case "DELETE_CHAT":
      const chatIdDelete = ctx.request.body.id;
      delete state.chats[chatIdDelete];
      ctx.body = state;
  }
});

module.exports = router;
