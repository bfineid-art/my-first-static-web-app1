document.getElementById("sendBtn").addEventListener("click", async () => {
  const name = document.getElementById("nameInput").value;
  const responseEl = document.getElementById("response");

  const res = await fetch(`/api/echo?name=${encodeURIComponent(name)}`);
  const data = await res.json();

  responseEl.textContent = data.message;
});
