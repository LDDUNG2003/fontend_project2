var headerProduct = document.getElementsByClassName("product__header")[0]
var imageDisplay = document.getElementById("product-image")
var nextBtn = document.getElementsByClassName('next-image')[0]
var returnBtn = document.getElementsByClassName('return-image')[0]
var refil = document.getElementsByClassName('circle-item')
var circle = document.getElementById('circle--list')
var linkBTN = document.getElementById('product__link')
var imageList = ['banner.png','banner1.png','banner2.png','banner3.png','banner4.png','banner2.png']
var linkList =['/index.html','/introduce.html','/product.html','/help.html']
var navBarLists = document.getElementsByClassName("navbar__list-item")
linkBTN.href = linkList[1]
var i=0
var checkMouse = true

imageDisplay.addEventListener("mouseover",function(){
    checkMouse = false
})

headerProduct.addEventListener("mouseout",function(){
    checkMouse = true
})

time = 5000
function refilImage(i){
    var j=0
    for(j;j<imageList.length;j++){
        if(j==i){
            if(j<refil.length--){
                refil[j].innerHTML='<i style="color: #ffffff;" class="fa-solid fa-circle"></i>'
            }
        }
        else{
            if(j<refil.length){
            refil[j].innerHTML='<i style="color: #ffffff;" class="fa-regular fa-circle"></i>'
            }
        }
    }
}
imageDisplay.style.backgroundImage = "url(./style/image/" + imageList[0] +")"
refilImage(i)
// refilImage()
function nextBtnEvent(){
    if(checkMouse){
        if(i<imageList.length-1){
            i++
            imageDisplay.style.backgroundImage = "url(./style/image/" + imageList[i] +")"
        }
        else{
            i=0
            imageDisplay.style.backgroundImage = "url(./style/image/" + imageList[i] +")"
            // refilImage()
        }
    }
    time = 5000
    refilImage(i)
}

function returnBtnEvent(){
    if(i>0){
        i--
        imageDisplay.style.backgroundImage = "url(./style/image/" + imageList[i] +")"
    }
    else{
        i = imageList.length
        i--
        imageDisplay.style.backgroundImage = "url(./style/image/" + imageList[i] +")"
    }
    time = 5000
    refilImage(i)
}
setInterval(nextBtnEvent, time)
returnBtn.addEventListener('click',returnBtnEvent)
nextBtn.addEventListener('click',nextBtnEvent)
// nextBtn addEventListener(onclick,)