// ==UserScript==
// @name dbadalert
// @description 提示并帮助举报豆瓣小组话题中的广告贴
// @include http://www.douban.com/group*
// @require http://userscript-autoupdate-helper.googlecode.com/svn/trunk/autoupdatehelper.js
// @author peakgg
// @version 1.0.0.10
/* @reason  
2010年2月28日
1.0.0.10  增加关键词
   @end*/
// ==/UserScript==

var thisScript = {
	name: "dbadalert",
	id: "51771",
	version:"1.0.0.10"
}
var updater = new Updater(thisScript);
updater.setHoursToCheck(1)
updater.check();

function douban(){
	
	var getElementsByClassName = function(theName){
		var j = 0;
		var array = [];
		for(var i = 0;(e = document.getElementsByTagName("*")[i]); i++){
			if(e.className == theName){
				array[j] = e;
				j++;
			}
		}
	return array;
	}
	var getADElements = function(clss){
		var all = getElementsByClassName(clss)[0].rows;
		var ADReg = /女生就应该穿这样的衣服|BF发给我的，确实很强|真是一大损失啊|淘宝.*ＴＯＰ|淘宝.*[tT][oO][pP]|taobao.*ＴＯＰ|taobao.*[tT][oO][pP]|淘宝好店|淘宝好的店|淘宝.*排名|排名.*淘宝|向大家推荐几个不错的淘宝店铺|淘宝男装类|淘宝珠宝饰品店|taobao好店大全|淘宝.*值得收藏|爱吃零食的JM有口福了|TB零食店铺|哇塞！！这里的东西好好吃啊！！！|一姐妹发给我的|据说超过５００万人收藏|刚在瑞丽看到|减肥|最牛逼的|暴减|天瘦了|減肥|taobao.*美食|看到美食流口水的人请进|掏宝美食|好吃不贵|相当诱人的一些美食店铺|相当震撼的一些淘宝网站|淘宝好店前100强|值得收藏.*淘宝|我是怎么在淘宝|喜欢淘宝购物的朋友不要错过|淘宝男人购物必备汇总珍藏|淘宝秒杀店|MM不得不逛的100家名店|淘宝上那些女人名店|淘宝品牌服饰好店大分享|脸上的红血丝有救|实用的淘宝贴|好评皇冠女装|我09年见过得最牛逼的淘宝网站 /;
		var people = /href="\/people\/\w+\/"/
		var j = 0;
		var array = [];
		for(var i=0;i<all.length;i++){
			if (ADReg.test(all[i].cells[0].innerHTML)){
				array[j] = all[i];//alert(i);alert(all[i].cells[0].innerHTML);
				array[j].cells[0].innerHTML = array[j].cells[0].innerHTML + "---疑似广告帖 "
				if (people.test(all[i].cells[1].innerHTML)){
					var topic = array[j].cells[0].getElementsByTagName("A")[0].href
					var user = array[j].cells[1].getElementsByTagName("A")[0].href
					array[j].cells[1].innerHTML = array[j].cells[1].innerHTML + " <form name='comment_form' method='post' style='float:right;' action='http://www.douban.com/group/topic/5443392/add_comment'><div style='display:none;'><input type='hidden' name='ck' value='mr24'/> <textarea id='last' name='rv_comment' > " +array[j].cells[0].getElementsByTagName("A")[0].innerHTML + "\n" + topic + "\n" + "\n发贴人: " + array[j].cells[1].getElementsByTagName("A")[0].innerHTML + "\n" + user + "</textarea> </div> <input type='submit' value='举报'/> </form> "
				};
				j++;
			};	
		}
	return array;
	};
	getADElements('olt');
}
addEventListener('load',douban,true)
