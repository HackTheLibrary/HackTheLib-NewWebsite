// var howItWorksElement = document.getElementById("content-container"),
//     grabbersElement = document.getElementById("grabbers"),
//     Utility = {
//         shuffle: function (e) {
//             for (var a, s, n = e.length; n; a = parseInt(Math.random() * n), s = e[--n], e[n] = e[a], e[a] = s);
//             return e;
//         },
//         easeInQuad: function (e, a, s, n) {
//             return s * (e /= n) * e + a;
//         },
//         easeOutQuad: function (e, a, s, n) {
//             return -s * (e /= n) * (e - 2) + a;
//         },
//     },
//     ScrollIntoViewOptions = { behavior: "smooth", block: "start" },
//     Customers = [
//         { asset: "images/ajmal.jpg", name: "ajmal" },
//         { asset: "images/alan.jpg", name: "alan" },
//         { asset: "images/allan.jpg", name: "allan" },
//         { asset: "images/april.jpg", name: "april" },
//         { asset: "images/ashu.jpg", name: "ashu" },
//         { asset: "images/avi.jpg", name: "avi" },
//         { asset: "images/bani.jpg", name: "bani" },
//         { asset: "images/caroline.png", name: "caroline" },
//         { asset: "images/chandan.jpg", name: "chandan" },
//         { asset: "images/edward.png", name: "edward" },
//         { asset: "images/florence.jpg", name: "florence" },
//         { asset: "images/germain.jpg", name: "germain" },
//         { asset: "images/grace.png", name: "grace" },
//         { asset: "images/gwen.png", name: "gwen" },
//         { asset: "images/hao.png", name: "hao" },
//         { asset: "images/hashim.png", name: "hashim" },
//         { asset: "images/helen.jpg", name: "helen" },
//         { asset: "images/huiqing.jpg", name: "huiqing" },
//         { asset: "images/jay.jpg", name: "jay" },
//         { asset: "images/jerald.jpg", name: "jerald" },
//         { asset: "images/jina.png", name: "jina" },
//         { asset: "images/joseph.jpg", name: "joseph" },
//         { asset: "images/kaia.jpg", name: "kaia" },
//         { asset: "images/khairul.png", name: "khairul" },
//         { asset: "images/kishore.jpg", name: "kishore" },
//         { asset: "images/kowee.png", name: "kowee" },
//         { asset: "images/liane.png", name: "liane" },
//         { asset: "images/linda.jpg", name: "linda" },
//         { asset: "images/matthew.jpg", name: "matthew" },
//         { asset: "images/mj.png", name: "Min Jee" },
//         { asset: "images/philip.jpg", name: "philip" },
//         { asset: "images/prashant.jpg", name: "prashant" },
//         { asset: "images/preeti.jpg", name: "preeti" },
//         { asset: "images/russell.png", name: "russell" },
//         { asset: "images/sabri.jpg", name: "sabri" },
//         { asset: "images/samir.png", name: "samir" },
//         { asset: "images/sandhya.png", name: "sandhya" },
//         { asset: "images/sheriz.png", name: "sherizan" },
//         { asset: "images/shrey.jpg", name: "shrey" },
//         { asset: "images/sonny.jpg", name: "sonny" },
//         { asset: "images/syahir.jpg", name: "syahir" },
//         { asset: "images/vaughn.png", name: "vaughn" },
//         { asset: "images/victoria.jpg", name: "victoria" },
//         { asset: "images/vince.jpg", name: "vince" },
//         { asset: "images/viviane.jpg", name: "viviane" },
//         { asset: "images/xian.jpg", name: "xian" },
//         { asset: "images/yiru.jpg", name: "yiru" },
//         { asset: "images/zive.jpg", name: "zive" },
//     ],
    // slideshow = {
    //     getCustomers: function () {
    //         for (var e = 0; e < 49; e++) {
    //             var a = document.createElement("div"),
    //                 s = document.createElement("img"),
    //                 n = document.createElement("span");
    //             a.classList.add("icon-item"),
    //                 a.classList.add("icon-item" + e),
    //                 (s.src = Customers[e].asset),
    //                 s.classList.add("icon"),
    //                 s.classList.add("icon-img" + e),
    //                 s.setAttribute("draggable", "false"),
    //                 (n.innerText = Customers[e].name),
    //                 a.appendChild(s),
    //                 a.appendChild(n),
    //                 grabbersElement.appendChild(a);
    //         }
    //     },
    // };
// Utility.shuffle(Customers), slideshow.getCustomers();

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "2vh 1vh";
        document.getElementById("logo").style.height = "7vh";
    } else {
        document.getElementById("navbar").style.padding = "5vh 1vh";
        document.getElementById("logo").style.height = "9vh";
    }
}

document.body.addEventListener('scroll', () => {
    scrollFunction();
})