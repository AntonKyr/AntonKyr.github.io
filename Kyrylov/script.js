window.onscroll = function() {
    var scrollBtn = document.getElementById("TornaSu");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

function AndareSu() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
