document.getElementById("sendBtn").addEventListener("click", async () => {
  const name = document.getElementById("nameInput").value.trim();
  const responseEl = document.getElementById("response");

  if (!name) {
    responseEl.textContent = "Please enter your name first.";
    return;
  }

  try {
    const res = await fetch(`/api/echo?name=${encodeURIComponent(name)}`);
    if (!res.ok) {
      responseEl.textContent = "Error calling API.";
      return;
    }
    const data = await res.json();
    responseEl.textContent = data.message;
  } catch (err) {
    responseEl.textContent = "Network error.";
  }
});

