const DAO = require("../database/dao.js");

const {
	db,
	mongoose,
	model,
	schema
} = DAO;

// 测试数据

// let ddata= [];

// function r (min, max) {
// 	return Math.floor(Math.random() * (max - min)) + min + 1;
// }

// for(let i = 0; i< 201; i++) {
// 	let rd = `201${r(1, 6)}-${r(10,12)}-${r(10,12)}`;

// 	ddata.push({
// 		"index": i,
// 		"author_name": "Owen",
// 		"avatar_url": "/img/default-avatar.png",
// 		"author_email": "469564715@qq.com",
// 		"publish_time": `${rd}|${Date.parse(rd)}`,
// 		"publish_content": i,
// 		"FeedBack": [],
// 	    "ForBidFeedBack": false,
// 	    "commentAuthor": "游客",
// 	    "vote_up": Math.floor(Math.random() * 150) + 51
// 	})
// }

// model.collection.insert(ddata, (err, docs) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log("chenggong \n", docs)
// 	}
// })

const PublishNew = (newComment, callback, failback=(err) => console.error(err)) => {
	new model(newComment)
	  .save()
	  .then(callback)
	  .catch(failback) 	
}

const PublishFeedBack = (FBIndex, callback, failback=(err) => console.error(err)) => {
	model
	  .findOne({
	  	index: FBIndex
	  })
	  .then(callback)
	  .catch(failback)
}

const getAllDataes = (callback, failback) => {
	model
	  .find({})
	  .then(callback)
	  .catch(failback)
}

const delData = (index, callback, failback) => {
	model
	  .remove({
	  	index: index
	  })
	  .then(callback)
	  .catch(failback)
}

const delFeedBack = (index, ParentIndex, callback, failback) => {
	model
	  .update( 
	  	{index: ParentIndex},
	  	{ $pull: {
            FeedBack: {
		  			FeedBackIndex: index
		  		}
		  	}
	  	}
	  )
	  .then(callback)
	  .catch(failback)
}

const sortDataes = (arr, sortMethod) => {
	let temp = [];

	// 根据前端页面进行排序
    switch(sortMethod) {
        case "newest":
            temp =  arr
	            .sort((objA, objB) => {
	                let t1 = parseInt(objA["publish_time"].split("|")[1]),
	                    t2 = parseInt(objB["publish_time"].split("|")[1])

	                return t1 - t2;
	            })
	            .reverse()
            break;

        case "hottest": 
            temp =  arr
                .sort((objA, objB) => objA.vote_up - objB.vote_up)
                .reverse()     
            break;
    }

    return temp;
}

const voteUp = (index, callback, failback) => {
	// save 方法会查询是否存在，如果存在调用update 方法更新，如果不存在，新建一个colleciton
	// mongodb 不允许存储 /\. "*<>:|? 等符号

	// 点赞列表更新完成后，执行 点赞数自增
	// 仅仅实现简单的点赞功能 

	// 借口1 mongoose 不支持事务
	// 借口2 使用mongoose 设计点赞表比较复杂繁琐
    	
    model
  	  .update( 
  	  	{"index": index},
	  	{ $inc: { vote_up: 1 } }
  	  )
  	  .then((result) => {
        console.log(">?>?>?>??",result)
  	  	callback && callback();
  	  }) 
  	  .catch((err) => {
  	  	// 如果存储过程中出现错误，将 标志重新设置为false
		console.log(err)
  	  	
  	  	failback && failback(); 
  	  })
}

module.exports = {
	PublishNew,
	PublishFeedBack,
	getAllDataes,
	sortDataes,
	delData,
	delFeedBack,
	voteUp
};