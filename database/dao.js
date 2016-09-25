let mongoose = require("mongoose");

let db,
	modelName = "comment_system";

mongoose.Promise = global.Promise; // 修改mongoose 默认的Promise  方法

// collection 名可以重新设置
mongoose.connect("mongodb://localhost:27017/test");

db = mongoose.connection;

db
  .on("error", (err)=> {
  	console.log(">>>>>> DataBase Connect Error !!! <<<<<<")
  	console.log(">>>>>>>>\n %s",err);
  })
  .once("open" , ()=> {
  	console.log(">>>>>> DataBase Connect Successfully !!! <<<<<<");
  })

let schema = mongoose.Schema({
  "index": {
      type: Number,
      require: true
  },
	"author_name": {
		type: String,
		require: true
	},
	"avatar_url": {
        type: String,
        require: true,
        default: "/img/default-avatar.png"
    },
	"author_email": {
        type: String,
        require: true
    },
	"publish_time": String,
	"publish_content": String,  // 评论内容
	"FeedBack": [{
    "FeedBackIndex" : {       // 回复的索引
      type: Number,
      require: true
    },
    "BeFeedIndex" : {         // 被回复的索引值  分两种 如是-1 即 回复的是父级评论， 如不是-1 则回复的是回复的评论
      type: Number,
      require: true
    },
    "author_name": {
      type: String,
      require: true
    },
    "avatar_url": {
          type: String,
          require: true,
          default: "/img/default-avatar.png"
      },
    "author_email": {
          type: String,
          require: true
      },
    "publish_time": String,
    "publish_content": String,
    "ForBidFeedBack": Boolean,  
    "commentAuthor": String
  }],
  "ForBidFeedBack": Boolean,  // 是否禁止继续评论了，如 自己无法回复自己 回复评论的回复禁止评论
  "commentAuthor": String,    // 评论身份，默认是游客
  "vote_up": {                // 点赞
      type: Number,
      require: true,
      default: 0
  }       
})

schema.pre("save", (next)=> {
	if (this.commentAuthor === "游客") {
		this.this["avatar_url"] = "/public/default_avatar.png";
		this.this["author_email"] = "";
	}
    next();  // 一定要调用next 函数！！！！
})

let model = mongoose.model(modelName, schema);

// 后端验证数据
model.schema.path("author_name").validate((value) => {
    return /^\w{4,12}$/.test(value);
},"非法用户名")

model.schema.path("author_email").validate((value) => {
    return /^\w+@\w+\.\w{2,4}$/.test(value);
}, "非法邮箱地址")

module.exports = {
	db,
	model,
	schema,
	mongoose
}