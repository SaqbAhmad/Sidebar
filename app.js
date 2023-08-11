const toggle_sidebar=document.querySelector(".sidebar-toggle");
const close_btn=document.querySelector(".close-btn");
const sidebar=document.querySelector(".sidebar");
toggle_sidebar.addEventListener("click",function(){
    sidebar.classList.toggle("show-sidebar");
});
close_btn.addEventListener("click", function(){
    sidebar.classList.remove("show-sidebar");
})
