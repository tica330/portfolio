window.addEventListener("load",function(){

    var bt = document.getElementsByClassName("pg_button")[0];
    var btch = bt.children[0];
    var picture = document.getElementsByClassName('site')[0];
    var pictureUl = picture.children[0];
    var liList = btch.children;
    var n=0;
    var targetx = 0;

    for(var i=0; i<liList.length; i++){
        liList[i].index=i;

        liList[i].addEventListener("click", function(e){
            e.preventDefault();
            n = e.currentTarget.index;
            targetx = n * 960 * (-1);
            pictureUl.style.left = targetx + "px";
        
            for(var j=0; j<liList.length; j++){
                if(j == n){
                    liList[j].classList.add("on");
                }else{
                    liList[j].classList.remove("on");
               }
            }
        });
    }
});