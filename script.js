 document.getElementById("internal-hour").innerHTML = new Date().toISOString();

const url_string = window.location.href.toLowerCase();
const url = new URL(url_string);
const externalHour = url.searchParams.get("hour");
document.getElementById("external-hour").innerHTML = externalHour;
