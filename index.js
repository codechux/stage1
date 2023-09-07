document.addEventListener("DOMContentLoaded", function () {
  const personalData = {
    slackDisplayName: "Chux",
    slackDisplayPicture: "/images/IMG_4930.JPG",
    track: "Frontend",
    githubUrl: "https://github.com/codechux",
    githubTextContent: "Click here",
  };

  document.getElementById("name").textContent = personalData.slackDisplayName;
  document.getElementById("picture").src = personalData.slackDisplayPicture;
  document.getElementById("githubUrl").href = personalData.githubUrl;
  document.getElementById("githubUrl").textContent =
    personalData.githubTextContent;
  document.getElementById("track").textContent = personalData.track;
  document.getElementById("dayOfWeek").textContent =
    new Date().toLocaleDateString("en-US", { weekday: "long" });
  document.getElementById("currentTime").textContent = new Date().getTime();
});
