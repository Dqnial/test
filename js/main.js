const swiperEventSchedule = new Swiper(".event-schedule-slider", {
  direction: "horizontal",
  slidesPerView: "auto",
  spaceBetween: 10,
  loop: false,
  resizeObserver: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // breakpoints: {
  //   320: {
  //     slidesPerView: 2,
  //   },
  //   640: {
  //     slidesPerView: 4,
  //   },
  //   792: {
  //     slidesPerView: 4.5,
  //   },
  //   1171: {
  //     slidesPerView: 6,
  //   },
  // },
});

function showDay(buttonNumber) {
  let textContainers = document.querySelectorAll(".event-card-list");
  textContainers.forEach((container) => {
    container.classList.remove("active");
  });

  let listId = "day" + buttonNumber;
  let textElement = document.getElementById(listId);
  textElement.classList.add("active");

  let buttons = document.querySelectorAll(".event-schedule-slide-item");
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
  buttons[buttonNumber - 1].classList.add("active");
}
