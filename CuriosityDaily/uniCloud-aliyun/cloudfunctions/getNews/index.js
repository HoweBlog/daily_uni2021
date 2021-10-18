'use strict';
// wx小程序 
// const db = wx.cloud.database(); // 获取数据库的集合

// uni-app
const db = uniCloud.database(); // 获取数据库的集合
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)	
	// 获取 news的集合
	return db.collection("news").get().then(res=>{
		console.log(res);
		return res
	})
};
