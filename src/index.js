console.log("Launching script");
const anchors = document.querySelectorAll(".thumbnails-anchor");
const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const mainClass = document.querySelector(".main-class");
const detailsContainer = document.querySelector(".details-container");
const detailsAudio = document.querySelector(".details-audio");
const HIDDEN = "hidden";
const button = document.querySelector(".hide-button");
const IS_POINT = "is-point";
function setDetails(anchor) {
    detailsImage.setAttribute('src', anchor.getAttribute('data-details-image'));
    detailsAudio.setAttribute('src', anchor.getAttribute('data-details-audio'));
    detailsTitle.innerHTML = anchor.getAttribute('data-details-title');
}


for(let i = 0; i<anchors.length; i++) {
    anchors[i].addEventListener("click", function() {
        console.log("event - click on", anchors[i]);
        setDetails(anchors[i]);
        showDetails();
    })
}
button = button.addEventListener("click", function() {
    hideDetails();
})

function showDetails () {
    mainClass.classList.remove(HIDDEN);
    detailsContainer.classList.add(IS_POINT);
    setTimeout(function () {
        detailsContainer.classList.remove(IS_POINT);
    }, 1)
    detailsAudio.play();
    setTimeout(function () {
        detailsAudio.pause();
    }, 10000)

}

function hideDetails() {
    mainClass.classList.add(HIDDEN);
}