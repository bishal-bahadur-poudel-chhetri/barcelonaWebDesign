var hover_image=document.querySelectorAll('.image');
var hover_image_desc=document.querySelectorAll('.active .image .description .images')
for(i=0;i<hover_image.length;i++){
    hover_image[i].addEventListener('mouseover',function(){
        var recentActive=document.getElementsByClassName('active')
        recentActive[0].className=recentActive[0].className.replace('active','');
        console.log(recentActive)
        this.className += " active";
    

    })
}