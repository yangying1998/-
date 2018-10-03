   function animate (obj1,obj2,obj3,obj4,obj5,obj6){
     var i=0;
    function imgTab(){
            obj6[i%9].style.display="none";
            i++;
            obj6[i%9].style.display="block";
            for(var k=0;k<9;k++){
                 obj2[k].style.background="white";
                }
                obj2[i%9].style.background="blue";
        }
       var timer=setInterval(imgTab,2000)
      obj5.onmouseover=function(){
           clearInterval(timer);
       }
       obj5.onmouseout=function(){
            timer=setInterval(imgTab,2000);
        }
        obj3.onclick=function(){
            obj6[i%9].style.display="none";
            i--;
            if(i<0){
                i=8;
            }
            for(var k=0;k<9;k++){
                obj2[k].style.background="white";
                }
             obj2[i%9].style.background="blue";
            obj6[i%9].style.display="block";
        }
        obj4.onclick=function(){
            imgTab();
        }
        for(var j=0;j<numList.length;j++){
            obj2[j].index=j;
            obj2[j].onclick=function(){
                for(var k=0;k<9;k++){
                    obj6[k].style.display="none";
                    obj2[k].style.background="white";
                }
                obj6[this.index].style.display="block";
                i=this.index;
                this.style.background="blue";
            }
        }
   }