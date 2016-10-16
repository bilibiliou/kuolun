const express      = require("express"),
      path         = require("path"),
      fs           = require("fs"),
      cookieparser = require("cookie-parser"),
      bodyParser   = require("body-parser"),
      session      = require("express-session"),
      uuid         = require("node-uuid"),
      app          = express(),
      port         = process.env.NODE_PORT || 3000,
      ImageStorage = path.join(__dirname,"/database/img-storage"),
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
    url: "localhost:5000",
    name: "kuolun_Id",
    secret: "KuoLun secret",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 1000 * 60 * 24 * 7 }
}))

app.use(bodyParser.json());
app.use(bodyParser.text({limit: "50mb"}))
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cookieparser());

app.use(express.static(path.join(__dirname, "/test")));
app.use(express.static(path.join(__dirname, "/dist")));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.static(path.join(__dirname, "/database")));
// 分页页码限制 前后端都需要统一
const PaginationLimit = 6;

const Ok = (res, meg) => {
    res
      .status(200)
      .end(meg)
}

app.listen(port, () => {
    console.log(`监听${port}端口`)
})

app.get("/", (req, res) => {
    res.sendFile(`${__dirname + "/test/test.html"}`);
})

// 用户访问时候，查询Session是否已经登录，如果登录，修改View层登录状态
app.post("/checkLogin", (req, res) => {
    let key = decodeURIComponent(req.cookies["kuolun_Id"]),
        value = req.session[key] || {};
    
    res.json(JSON.stringify(value));
})

// 登出时 清除用户信息
app.post("/delSession", (req, res) => {
  let key = decodeURIComponent(req.cookies["kuolun_Id"]);
  delete req.session[key]
  Ok(res,"中断session 对话成功");
})

// 登录的时候设置用户信息在Session中
app.post("/setSession", (req, res) => {    
    let key = decodeURIComponent(req.cookies["kuolun_Id"]);

    req.session[key] = req.body;
    Ok(res,"建立session 对话成功");
})

app.post("/resDataes", (req, res) => {
    let { whichpage, SortState } = req.body;
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

// 存储被上传的图片
app.post("/upLoadImage", (req, res) => {
  let reg = /^(\d+)data\:image\/(png|jpg|webp|gif|jpeg|svg)\;base64\,(.+)/,
        match = req.body.match(reg),
        order = match[1],
        type  = match[2],
        content = match[3];

    const saveImage = () => {
         let id = uuid.v1({
            node: [0x01, 0x23, 0x45, 0x67, 0x89, 0xab],
            clockseq: 0x1234,
            msecs: new Date().getTime(),
            nsecs: 5678
        }),
        url = `${ImageStorage}/${id}.${type}`

        let stream = fs.createWriteStream(url)
            stream.end(content, "base64")
            stream.on("error", (err) => {
              console.log(err);
              res.status(500).end("存储失败")
            })
            stream.on("finish", () => {
              res.status(200).end(JSON.stringify({order,url: `/img-storage/${id}.${type}`}));
            })
    }

    if(reg.test(req.body)) {
        fs.exists(ImageStorage, (isexist) => {
            if(isexist) {
                saveImage();
            } else {
                fs.mkdir(ImageStorage, (err) => {
                    if(err) {
                       console.log(err);
                       res.status(500).end("存储失败")
                    } else {
                       saveImage();
                    }
                })
            }            
        })
    } else {
        res.status(400).end("数据类型非图片")
    }
})

app.get("/img-storage", (req,res) => {
  res.status(403).end("403")  
})

// 图片服务器
// app.get("/img-storage/:imagename", (req, res) => {
//     let key = req.params["imagename"],
//         url = path.join(req.originalUrl,"/database/img-storage/",key);

//     fs.exists(url, (isexist) => {
//         if(!isexist) {
//             res.redirect("*")
//         } else {
//             res.sendFile(url);
//         }
//     })
// })

app.post("/saveData", (req,res) => {
    let oData = req.body.newContent,
        FBIndex = req.body.FBIndex

    // 如果没有FBIndex 说明是普通评论
    if (FBIndex != -1) {
        PublishFeedBack(FBIndex,
        (result) => {
            result.FeedBack.push(oData);
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
        oData.index = parseInt(oData.index)
        PublishNew(oData, 
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
    } = req.body

    voteUp(parseInt(index), () => {
        Ok(res, "点赞成功")
    }, () => {
        res
          .status(500)
          .end("点赞失败")
    })

})

app.get("*", (req, res) => {
  res.end("404!!!!");
})