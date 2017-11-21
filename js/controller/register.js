/**
 * Created by gaogao on 2017/11/21.
 */
//点击注册
$("#register-button").click(function(){
    console.log("注册 ");

});
//点击登录
$("#login-button").click(function(){
    console.log("登录 ");
    var user = {username:$('#login-name').text(),password:$('#login-pwd').text()};
    $.ajax({url:"/login",method:"POST",data:user,success:function(result){
        console.log(result);
    }});
});
