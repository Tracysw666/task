/**
 * Created by gaogao on 2017/11/21.
 */
//点击登录
function login (username,pwd){
    var user = {username:username,password:pwd};
    $.ajax({url:"/ajax/login",method:"POST",data:user,success:function(result){
        console.log(result);
        if(result.code ==0){
            window.location.href = "index.html";
            localstorage.user = result.data;
        }else{
            bootbox.alert({
                message: "密码或账户填写错误!",
                size: 'small'
            });
        }
    }});
}

//点击注册
$("#register-button").click(function(){

    console.log("注册 ");
    var register = {username:$("#register-username").text(),email:$("#register-email").text(),password:$("#register-pwd").text(),getGoodsName:$("#register-goods-name").text(),
    phone:$("#register-phone").text(),address:$("#register-address").text()};
    console.log(register);
    $.ajax({url:"/ajax/register","Content-Type": "application/x-www-form-urlencoded;charset=utf-8" ,method:"POST",data:register,success:function(result){
        console.log(result);
        if(result.code == 0){
            login(register.username,register.password);
        }else{
            bootbox.alert({
                message: "请完善信息后再次提交!",
                size: 'small'
            });
        }
    }});

});



$("#login-button").click(function(){
    login($('#login-name').text(),$('#login-pwd').text());
});
