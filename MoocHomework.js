document.body.appendChild(document.createElement('script')).src='//code.jquery.com/jquery-1.9.1.min.js';
setTimeout(function(){
    $(".s label:last-child").each(
        function(){
            $(this).click();
        });
    $(".j-textarea").each(
        function(){
            $(this).val("Good."); //这里是点评的内容
        });
},1000)
setTimeout(function(){
    document.getElementsByClassName('j-submitbtn')[0].click();
},1000)
setTimeout(function(){
    document.getElementsByClassName('j-gotonext')[0].click();
},1000)
