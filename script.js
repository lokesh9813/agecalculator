function calculateAge() {
  const dob = document.getElementById("dob").value;
  if (!dob) return;

  const birthDate = new Date(dob);
  const today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  document.getElementById("years").textContent = padZero(years);
  document.getElementById("months").textContent = padZero(months);
  document.getElementById("days").textContent = padZero(days);
}

function padZero(num) {
  return num < 10 ? `0${num}` : num;
}
