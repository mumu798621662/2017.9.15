/*
* @Author: 木木
* @Date:   2017-09-15 17:47:15
* @Last Modified by:   木木
* @Last Modified time: 2017-09-15 18:04:48
*/
let user = document.getElementById('user');
let pass = document.getElementById('pass');
let button = document.getElementById('button');
button.onclick = function(){
	let u = user.value;
	let p = pass.value;
	if (u='zhangsan'&& p='12345') {
       alert('success');
	}else{
		location.replace('location2.html')
	}
}
