const updateHBg=()=>{
    var headerBg = document.querySelector(".header-bg")
    var gradient= document.querySelector(".body-gradient");
    headerBg.style.opacity = 0;
    document.onscroll = function () {
        var height = 2 * gradient.offsetHeight / 3;
        headerBg.style.opacity = window.scrollY / height;
    }
}

export default updateHBg