//namespace

// var magicText = {};

// magicText.replaceSpace = function(a,b){
// 	return b = b.replace(/\s+/g, a);
// };

// magicText.upperCase = function (a) {
// 	return a.toUpperCase();
// };

// magicText.render = function(a,b){
// 	document.getElementById(a).innerHTML = b;
// };

// magicText.replaceSpace('-', text);

//namespace closure
//closure實現私有成員、保護私有成員不被任意取用
var magicText = (function() {

    //私有成員建立
    var Text = '';

    return {
        replaceSpace: function(a,b) {
            Text = b.replace(/\s+/g, a);
            return Text;
        },
        upperCase: function(a) {
            Text = a.toUpperCase();
            return Text;
        },
        render: function(a,b){
            document.getElementById(a).innerHTML = b;
        },
        value: function() {
            return Text;
        }
    };   
})();

//Constructor

// var MagicText = function(text){

// 	this.replaceSpace = function(a,text){
// 		return text = text.replace(/\s+/g, a);
// 	};

// 	this.upperCase = function (text) {
// 		return text.toUpperCase();
// 	}

// 	this.render = function(a,text){
// 		document.getElementById(a).innerHTML = text;
// 	}
// };

//chaining

// var MagicText = function(text) {
// 	this.text = text;
// };

// MagicText.prototype.replaceSpace = function(a) {
// 	this.text = this.text.replace(/\s+/g, a);
// 	return this; 
// };

// MagicText.prototype.upperCase = function() {
// 	this.text = this.text.toUpperCase();
// 	return this;
// };

// MagicText.prototype.render = function(a) {
// 	document.getElementById(a).innerHTML = this.text;
// };

//comeback design
/*
設計概念：
1. 透過jQuery加載demo.html進入index.html的head tag 
2. $('head h1').html()取得其內容'Hello Kitty'
3. 將'Hello Kitty'存入變數demo
4. 傳進cb(demo)也就是myRender(demo)並且alert出內容
*/

/*
MagicText.prototype.load = function(html_file,cb) {
	//insert html.file's tag content into index.html's head tag
	$('head').load(html_file);//html_file = 'demo.html'

	$(document).ready(function () {
		//get h1 tag's text from html.file
        var demo = $('head h1').html();

        //callback to cb()
        cb(demo);
    })
	
};
*/

//jQuery Deferred
// var MagicText = function(text) {
// 	this.text = text;
// };

// MagicText.prototype.load = function(html_file) {
//     //引用jQuert Deferred()
//     var dfd = $.Deferred();

//     $('head').load(html_file);

//     $.when($.ajax("/cross_test/"+html_file))
//         .then(load,load_fail);

//     function load(html_file){
//     	//檔案加載成功，改變jQuert Deferred()
//         dfd.resolve();
//         console.log('順利讀取檔案');
//     }

//     function load_fail(){
//     	//檔案加載失敗，改變jQuert Deferred()
//         dfd.reject();
//         console.log('讀取檔案失敗');      
//     }

//     return this;
//     // return dfd.promise();
    
// };

// MagicText.prototype.then = function(cb){
//     $(document).ready(function () {
//         var demo = $('head h1').html();

//         cb(demo);
//     });
// };

//AMD

// define(function(){
// 	function MagicText(text){
// 		this.text = text;
// 	}
// 	MagicText.prototype.replaceSpace = function(a) {
// 		this.text = this.text.replace(/\s+/g, a);
// 		return this; 
// 	};
// 	MagicText.prototype.upperCase = function() {
// 		this.text = this.text.toUpperCase();
// 		return this;
// 	};
// 	MagicText.prototype.render = function(a) {
// 		document.getElementById(a).innerHTML = this.text;
// 	};
// 	return { 
// 　　　　MagicText:MagicText
// 　　};
//     // return MagicText;
// });









