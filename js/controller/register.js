/**
 * Created by gaogao on 2017/11/21.
 */
//点击注册
$("#register-button").click(function(){

    console.log("注册 ");
    var register = {username:$("#register-username"),email:$("#register-email"),password:$("#register-pwd"),getGoodsName:$("#register-goods-name"),
    phone:$("#register-phone"),address:$("#register-address")};
    console.log(register);
    $.ajax({url:"/ajax/register",method:"POST",data:register,success:function(result){
        console.log(result);
        if(result.code ==0){

        }else{

        }
    }});

});
//点击登录
$("#login-button").click(function(){
    console.log("登录");
    var user = {username:$('#login-name').text(),password:$('#login-pwd').text()};
    $.ajax({url:"/ajax/login",method:"POST",data:user,success:function(result){
        console.log(result);
        if(result.code ==0){

        }else{

        }
    }});
});
