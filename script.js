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
      const body = document.body;

      toggleClass("hidden", container);

      if (
        clickableContainer === iconShareContainer &&
        body.clientWidth > 1024
      ) {
        const iconShare = document.querySelector("#share-icon");
        toggleClass("bg-blue-300", clickableContainer);
        toggleClass("fill-blue-400", iconShare);
        toggleClass("fill-white", iconShare);
      }
    });
  }
};
