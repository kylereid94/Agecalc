
  function calculateDateDifference(event) {
    event.preventDefault(); // Prevent form submission
    const month = parseInt(document.getElementById("mt").value, 10) - 1; // JavaScript months are 0-based
    const day = parseInt(document.getElementById("dy").value, 10);
    const year = parseInt(document.getElementById("yr").value, 10);

    const enteredDate = new Date(year, month, day);
    const today = new Date();

    if (enteredDate > today) {
      document.getElementById("out_year").textContent = "N/A";
      document.getElementById("out_month").textContent = "N/A";
      document.getElementById("out_day").textContent = "N/A";
      alert("The entered date is in the future.");
      return;
    }

    // Calculate the difference in years, months, and days
    let years = today.getFullYear() - enteredDate.getFullYear();
    let months = today.getMonth() - enteredDate.getMonth();
    let days = today.getDate() - enteredDate.getDate();

    if (days < 0) {
      months -= 1;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate(); // Days in the previous month
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    // Output the results to the spans
    document.getElementById("out_year").textContent = years;
    document.getElementById("out_month").textContent = months;
    document.getElementById("out_day").textContent = days;
  }