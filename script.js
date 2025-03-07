// ✅ Fetch price & quantity from backend API (Include Cookies)
fetch("https://secure-backend-product-preview-production.up.railway.app/api/get-secret", {
  method: "GET",
  credentials: "include" // ✅ Ensure cookies are sent with the request
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Backend Response:", data);
    document.querySelector(".price").textContent = `$${data.totalPrice}`;
    document.querySelector(".quantity").textContent = data.quantity;
  })
  .catch((error) => console.error("Error fetching data:", error));

// ✅ Fetch & Execute Hidden JavaScript Logic
fetch("https://secure-backend-product-preview-production.up.railway.app/api/get-hidden-js", {
  method: "GET",
  credentials: "include" // ✅ Ensure cookies are sent
})
  .then((response) => response.text())
  .then((jsCode) => {
    const scriptElement = document.createElement("script");
    scriptElement.textContent = jsCode;
    document.body.appendChild(scriptElement);
  })
  .catch((error) => console.error("Error loading hidden script:", error));

// ✅ Handle Quantity Updates (Include Cookies)
document.querySelector(".increase").addEventListener("click", async () => {
  try {
    const response = await fetch("https://secure-backend-product-preview-production.up.railway.app/api/update-quantity", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "increase" }),
      credentials: "include" // ✅ Ensure cookies are sent
    });

    const data = await response.json();
    
    // ✅ Update UI only after receiving the correct value from backend
    document.querySelector(".price").textContent = `$${data.totalPrice}`;
    document.querySelector(".quantity").textContent = data.quantity;
    
  } catch (error) {
    console.error("Error updating quantity:", error);
  }
});

document.querySelector(".decrease").addEventListener("click", async () => {
  try {
    const response = await fetch("https://secure-backend-product-preview-production.up.railway.app/api/update-quantity", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "decrease" }),
      credentials: "include" // ✅ Ensure cookies are sent
    });

    const data = await response.json();

    // ✅ Update UI only after receiving the correct value from backend
    document.querySelector(".price").textContent = `$${data.totalPrice}`;
    document.querySelector(".quantity").textContent = data.quantity;

  } catch (error) {
    console.error("Error updating quantity:", error);
  }
});

