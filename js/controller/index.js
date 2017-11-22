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

/*搜索按钮*/
$("#search-button").click(function(){
    var proname = $("#search-text").val();
    if(proname.length==0){
       return bootbox.alert({
            message: "请在搜索框中输入内容",
            size: 'small'
        });
    }
    window.location.href = "product.html?proname="+ proname;
})