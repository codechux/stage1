document.addEventListener("DOMContentLoaded", function () {
  const personalData = {
    name: "Oguh Chukwuka Erasmus",
    pictureUrl: "/images/IMG_4930.JPG",
    track: "Frontend Development",
    githubUrl: "https://github.com/codechux",
  };

  document.getElementById("name").textContent = personalData.name;
  document.getElementById("picture").src = personalData.pictureUrl;
  document.getElementById("githubUrl").href = personalData.githubUrl;
  document.getElementById("githubUrl").textContent = personalData.githubUrl;
  document.getElementById("track").textContent = personalData.track;
  document.getElementById("dayOfWeek").textContent =
    new Date().toLocaleDateString("en-US", { weekday: "long" });
  document.getElementById("currentTime").textContent =
    new Date().toLocaleTimeString();
});
