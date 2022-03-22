window.onload = function () {
    let underline = document.querySelector("#underline");
    let typewriter = document.querySelector("#typewriter");
    let role = "Full Stack Developer";
    let len = 0;

    setInterval(() => {
        if (len < role.length+1){
            underline.innerText = role.substring(0, len);
            len += 1;
        }
        else {
            setTimeout(() => {
                len = 0;
            }, 2000);
        }
    }, 150);

    setInterval(() => {
        if (typewriter.style.display == "none") {
            typewriter.style.display = "";
        }
        else {
            typewriter.style.display = "none";
        }
    }, 300);

    function toggleClass() {
        if (document.querySelector("#content").className === "contentActive"){
            document.querySelector("#content").className = "content";
            document.querySelector("#sidebar").className = "sidebar";
        }
        else{
            document.querySelector("#content").className = "contentActive";
            document.querySelector("#sidebar").className = "sidebarActive";
        }
    }

    document.querySelector("#menu-btn").addEventListener('click', toggleClass);
    document.querySelector("#content").addEventListener('click', ()=>{
        if (window.innerWidth < 751){
            document.querySelector("#content").className = "content";
            document.querySelector("#sidebar").className = "sidebar";
        }
    })

    const progressBar = document.getElementById("progressBar");
    const content = document.getElementById("content");

    const animateProgressBar = () => {
        let scrollDistance = -content.getBoundingClientRect().top;
        let progressWidth = ( (scrollDistance / (content.getBoundingClientRect().height - document.documentElement.clientHeight) ) * 100 );
        let widthValue = Math.floor(progressWidth);

        progressBar.style.width = widthValue + "%";

        if (widthValue < 0) {
            progressBar.style.width = "0%";
        }
    }

    window.addEventListener('scroll', animateProgressBar);
}