const form = document.getElementById("bookForm");
const requestDate = document.getElementById("requestDate");
const confirmation = document.getElementById("confirmation");

function getTodayDate() {
    const d = new Date();
    return d.getFullYear() + "-" +
        String(d.getMonth() + 1).padStart(2, "0") + "-" +
        String(d.getDate()).padStart(2, "0");
}


requestDate.min = getTodayDate();
requestDate.value = getTodayDate();

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("studentName").value.trim();
    const book = document.getElementById("bookName").value;
    const date = new Date(requestDate.value + "T00:00:00");

    if (name.length < 3) {
        alert("Please enter a valid name.");
        return;
    }

    if (date < new Date(getTodayDate() + "T00:00:00")) {
        alert("Please select today or a future date.");
        return;
    }

    
    date.setDate(date.getDate() + 14);

    confirmation.style.display = "block";
    confirmation.textContent =
        `Hello ${name}! Your request for ${book} has been recorded. Due date: ${date.toLocaleDateString("en-IN")}. Please confirm availability with the librarian.`;
});


function toggleFAQ(id) {
    const answer = document.getElementById(id);
    answer.style.display =
        answer.style.display === "block" ? "none" : "block";
}
