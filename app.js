const input = document.getElementById("videoInput");
const title = document.getElementById("uploadTitle");
const hint = document.getElementById("uploadHint");
const button = document.getElementById("generateBtn");
const notice = document.getElementById("notice");

input.addEventListener("change", () => {
  const file = input.files && input.files[0];
  if (!file) return;
  const allowed = /\.(mp4|mov)$/i.test(file.name);
  if (!allowed) {
    title.textContent = "Unsupported file type";
    hint.textContent = "Please choose an MP4 or MOV file.";
    button.disabled = true;
    return;
  }
  title.textContent = file.name;
  hint.textContent = `${(file.size / (1024 * 1024)).toFixed(1)} MB · Selected locally`;
  button.disabled = false;
  notice.textContent = "File selected. This prototype does not upload or process the video yet.";
});

button.addEventListener("click", () => {
  const file = input.files && input.files[0];
  if (!file) return;
  notice.textContent = `Project settings saved locally: ${document.getElementById("ratio").value}, ${document.getElementById("duration").value}, ${document.getElementById("count").value}. AI processing is not connected yet.`;
  button.textContent = "Project prepared ✓";
});