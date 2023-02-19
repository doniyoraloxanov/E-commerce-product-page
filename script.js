"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const shoppingCart = document.querySelector(".shopping");
const avatar = document.querySelector(".avatar");

const openModel = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

shoppingCart.addEventListener("click", openModel);
avatar.addEventListener("click", openModel);
overlay.addEventListener("click", closeModal);

//1 Hover states
