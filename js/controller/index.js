/**
 * Created by gaogao on 2017/11/21.
 */
//cookie



/// /查cookie是否有效
function isLogin(cookiename){
    return !!$.cookie(cookiename);
}



var user = JSON.parse(localStorage.user);

if(isLogin("login")){
    $("#login-label").hide();
    $("#username-label").show();
    console.log(user.username);
    $("#username").text(user.username);
    console.log(12)
}else  {
    $("#login-label").show();
    $("#username-label").hide();
    console.log(34)

}
