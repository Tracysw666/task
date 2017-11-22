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
            localStorage.user = JSON.stringify(result.data);
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
    var register = {username:$("#register-username").val(),email:$("#register-email").val(),password:$("#register-pwd").val(),getGoodsName:$("#register-goods-name").val(),
    phone:$("#register-phone").val(),address:$("#register-address").val()};
    console.log(register);
    if(register.password != $("#register-pwdagain").val()){
     return bootbox.alert({
            message: "两次密码输入不一致!",
            size: 'small'
        });
    }

    $.ajax({url:"/ajax/register",method:"POST",data:register,success:function(result){
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
    login($('#login-name').val(),$('#login-pwd').val());
});
