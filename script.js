function myFunction(x) {
  if (x.matches) {
    let layer1 = document.getElementById("bottom-cloud");
    scroll = window.pageYOffset;
    document.addEventListener("scroll", function (e) {
      let offset = window.pageYOffset;
      scroll = offset;
      layer1.style.left = 3 + scroll / 30 + "%";
    });

    let layer2 = document.getElementById("top-cloud");
    scroll = window.pageYOffset;
    document.addEventListener("scroll", function (e) {
      let offset = window.pageYOffset;
      scroll = offset;
      layer2.style.left = 70 + scroll / 30 + "%";
    });

    let layer3 = document.getElementById("mountain");
    scroll = window.pageYOffset;
    document.addEventListener("scroll", function (e) {
      let offset = window.pageYOffset;
      scroll = offset;
      layer3.style.top = 55 + scroll / 30 + "%";
    });
  } else {
    let layer1 = document.getElementById("bottom-cloud");
    scroll = window.pageYOffset;
    document.addEventListener("scroll", function (e) {
      let offset = window.pageYOffset;
      scroll = offset;
      layer1.style.left = 15 + scroll / 30 + "%";
    });

    let layer2 = document.getElementById("top-cloud");
    scroll = window.pageYOffset;
    document.addEventListener("scroll", function (e) {
      let offset = window.pageYOffset;
      scroll = offset;
      layer2.style.left = 75 + scroll / 30 + "%";
    });

    let layer3 = document.getElementById("mountain");
    scroll = window.pageYOffset;
    document.addEventListener("scroll", function (e) {
      let offset = window.pageYOffset;
      scroll = offset;
      layer3.style.top = 41 + scroll / 10 + "%";
    });
  }
}
if (matchMedia) {
  const x = window.matchMedia("(max-width: 1050px)");
  x.addListener(myFunction);
  myFunction(x);
}

const videos = document.querySelectorAll(".video");

videos.forEach((video) => {
  video.addEventListener("mouseover", () => {
    video.play();
  });
  video.addEventListener("mouseout", () => {
    video.pause();
  });
});
