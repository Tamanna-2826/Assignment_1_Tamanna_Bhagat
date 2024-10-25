import fetch from "node-fetch";

async function fetchGooglePage() {
  try {
    const response = await fetch("https://www.google.com");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.text();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

fetchGooglePage();
