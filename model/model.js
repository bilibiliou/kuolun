const DAO = require("../database/dao.js");
const VoteDAO = require("../database/vote_dao.js");

const {
	db,
	mongoose,
	model,
	schema
} = DAO;

const {
    dbVote,
    schemaVote,
    modelVote,
    mongoose : mongooseVote
} = VoteDAO;

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
	  	{
	  		$pull: {
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

const voteUp = (index, userEmail, callback, failback) => {
	//  先更新 vote 表中已经赞！ 然后点赞数自增1
	modelVote
	  .update(
	  	{index},
	  	{
	  		$set: {
	  			hasVote: {
	  				[userEmail] : true	
	  			}
	  		}
	  	}
	  )
	  .then(() => {
	  	model
	  	  .update(
	  	  	{index},
	  	  	{
	  	  		$inc: {
	  	  			vote_up: 1 
	  	  		}
	  	  	}
	  	  )
	  	  .then(() => {
	  	  	callback && callback();
	  	  }) 
	  	  .catch(() => {
	  	  	// 如果存储过程中出现错误，将 标志重新设置为false
	  	  	modelVote
	  	  	  .update(
	  	  	  	{index},
			  	{
			  		$set: {
			  			hasVote: {
			  				[userEmail] : false	
			  			}
			  		}
			  	}
	  	  	  )
	  	  	 .then(() => {
	  	  	 	failback && failback();
	  	  	 }) 
	  	  })
	  })
	  .catch(() => {
	  	failback && failback();
	  })

}

module.exports = {
	PublishNew,
	PublishFeedBack,
	getAllDataes,
	sortDataes,
	delData,
	delFeedBack
};