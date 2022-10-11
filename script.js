window.onload = () => {
  const iconShareContainer = document.querySelector("#share-icon-container");
  const iconShareClickedContainer = document.querySelector(
    "#share-icon-clicked-container"
  );
  const socialsContainer = document.querySelector("#socials-container");

  toggleContainerOnClick(socialsContainer, iconShareContainer);
  toggleContainerOnClick(socialsContainer, iconShareClickedContainer);

  function toggleClass(className, element) {
    return element.classList.toggle(className);
  }

  function toggleContainerOnClick(container, clickableContainer) {
    return clickableContainer.addEventListener("click", () => {
      toggleClass("hidden", container);
    });
  }
};
