const express      = require("express"),
      path         = require("path"),
      cookieparser = require("cookie-parser"),
      bodyParser   = require("body-parser"),
      session      = require("express-session"),
      app          = express(),
      port         = process.env.NODE_PORT || 3000,
      {
        PublishNew,
        PublishFeedBack,
        getAllDataes,
        sortDataes,
        delData,
        delFeedBack,
        voteUp
      }            = require("./model/model.js")

app.use(session({
    url: "localhost:5000/",
    secret: "KuoLun secret",
    resave: true,
    saveUninitialized: true,
    cookie: {maxAge: 60 * 1000}
}))

app.use(cookieparser());

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static(path.join(__dirname, "/test")));
app.use(express.static(path.join(__dirname, "/dist")));
app.use(express.static(path.join(__dirname, "/public")));

// session 定义用户对象
let users = {}

// 分页页码限制 前后端都需要统一
const PaginationLimit = 6;

const Ok = (res, meg) => {
    res
      .status(200)
      .end(meg)
}

app.get("/", (req, res) => {
    res.sendFile(`${__dirname + "/test/test.html"}`);
    console.log(req.cookies)
})

app.post("/setSession", (req, res) => {
    let {
        newInfo
    } = req.body;

    let key = decodeURIComponent(req.cookies["connect.sid"]);
    console.log(req.cookies)

    users[key] = JSON.parse(newInfo);
    Ok(res,"建立session 对话成功");
})

app.post("/resDataes", (req, res) => {
    let { whichpage, SortState } = req.body;        
        // user[key].userEmail, 
    getAllDataes((result) => {
        let box = []

        box = sortDataes(result, SortState);

        let mul = whichpage * PaginationLimit;
        res.json(JSON.stringify({
            allLen: box.length,
            Data: box.slice(mul, mul + PaginationLimit)
        }))

    },(err) => {
        console.log(err);

        res
          .status(500)
          .end("数据库查询出现错误");
    })
})

app.post("/delData", (req, res) => {
    let {
        whichpage,
        SortState,
        index,
        ParentIndex
    } = req.body;

    if (ParentIndex == -1) {
        delData(index, (result) => {
            Ok(res, "删除成功");
        }, (err) => {
            res
              .status(500)
              .end("删除失败")
        })
    } else {
        delFeedBack( index, ParentIndex, (result) => {
            // result -> { ok: 1, nModified: 1, n: 1 }
            Ok(res,"删除回复成功");  
        },() => {
            res
              .status(500)
              .end("删除回复失败")
        })
    }
})

app.post("/saveData", (req,res) => {
    let {
        whichpage,
        SortState,
        newContent,
        FBIndex
    } = req.body;

    let newData = JSON.parse(newContent);

    // 如果没有FBIndex 说明是普通评论
    if (FBIndex != -1) {
        PublishFeedBack(FBIndex,
        (result) => {
            result.FeedBack.push(newData);
            result
              .save()
              .then(() => {
                Ok(res, "存储成功");

              })
              .catch(() => {
                res
                  .status(500)
                  .end("存储失败")
              })
        }) 
    } else {
        newData.index = parseInt(newData.index)
        PublishNew(newData, 
            () => {
               Ok(res, "存储成功");
            },(err) => {
                console.error(err);
                res
                  .status(500)
                  .end("存储失败")
            })    
    }
})

app.post("/VoteUpSomeItem", (req, res) => {
    let {
        index
    } = req.body,
    key = decodeURIComponent(req.cookies["connect.sid"]);
    
    voteUp(index, users[key].userEmail, () => {
        Ok(res, "点赞成功")
    }, () => {
        res
          .status(500)
          .end("点赞失败")
    })

})


app.listen(port, () => {
    console.log(`监听${port}端口`)
})