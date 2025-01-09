document.addEventListener("DOMContentLoaded", function () {
    const photos = [
        "image/photo1.jpg",
        "image/photo2.jpg",
        "image/photo3.jpg",
        "image/photo4.jpg",
        "image/photo5.jpg",
        "image/photo6.jpg",
        "image/photo7.jpg",
        "image/photo8.jpg"
    ];
    let currentPhotoIndex = 0;

    const photoElement = document.getElementById("photo");
    const leftButton = document.querySelector(".leftbutton");
    const rightButton = document.querySelector(".rightbutton");
    const upButton = document.querySelector(".upbutton");

    leftButton.addEventListener("click", function () {
        currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
        photoElement.src = photos[currentPhotoIndex];
    });

    rightButton.addEventListener("click", function () {
        currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
        photoElement.src = photos[currentPhotoIndex];
    });

    // 使用 setInterval 來定期觸發跳動動畫
    setInterval(() => {
        upButton.classList.add("bounce");
        setTimeout(() => {
            upButton.classList.remove("bounce");
        }, 1000); // 動畫持續時間為 1 秒
    }, 3000); // 每 3 秒觸發一次動畫
});

document.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById('background-music');
    audio.play().catch(function (error) {
        console.log('Autoplay was prevented:', error);
    });
});