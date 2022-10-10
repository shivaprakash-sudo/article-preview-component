window.onload = () => {
  const iconShareContainer = document.querySelector("#share-icon-container");

  iconShareContainer.addEventListener("click", () => {
    const iconShare = document.querySelector("#share-icon");
    displaySocials();

    toggleClass("bg-blue-100", iconShareContainer);
    toggleClass("bg-blue-300", iconShareContainer);
    toggleClass("fill-blue-400", iconShare);
    toggleClass("fill-white", iconShare);
  });

  function displaySocials() {
    const socialsContainer = document.querySelector("#socials-container");
    const socials = document.querySelector("#socials");
    const profile = document.querySelector("#profile");
    const profileContainer = document.querySelector("#profile-container");

    toggleClass("justify-between", socialsContainer);
    toggleClass("w-full", socialsContainer);

    toggleClass("bg-blue-400", profileContainer);
    toggleClass("py-[1.31rem]", profileContainer);

    toggleClass("hidden", profile);

    toggleClass("hidden", socials);
  }

  function toggleClass(className, element) {
    return element.classList.toggle(className);
  }
};
