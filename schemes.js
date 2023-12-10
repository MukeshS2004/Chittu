
    document.addEventListener("DOMContentLoaded", function () {
        const searchInput = document.querySelector(".searchInput");
        const tableRows = document.querySelectorAll("tbody tr");

        function filterTable() {
            const searchTerm = searchInput.value.toLowerCase();

            tableRows.forEach((row) => {
                const schemeName = row.querySelector("td:nth-child(1)").textContent.toLowerCase();

                if (schemeName.includes(searchTerm)) {
                    row.style.display = "";
                } else {
                    row.style.display = "none";
                }
            });
        }

        searchInput.addEventListener("input", filterTable);
    });
