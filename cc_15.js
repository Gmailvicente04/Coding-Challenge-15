document.addEventListener("DOMContentLoaded", function () {
    console.log("Risk Dashboard Loaded");

    // Task 1: Select the riskDashboard container
    const riskDashboard = document.getElementById("riskDashboard");
    const riskForm = document.getElementById("riskForm");
    const increaseRiskBtn = document.getElementById("increaseRiskLevels");

    // 2. Handle form submission to add risk items
    riskForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const riskName = document.getElementById("riskName").value;
        const riskLevel = document.getElementById("riskLevel").value;
        const department = document.getElementById("department").value;
        addRiskItem(riskName, riskLevel, department);
        riskForm.reset();
    });

    // 3. Bulk update risk levels
    increaseRiskBtn.addEventListener("click", function () {
        document.querySelectorAll(".riskCard").forEach(card => {
            let riskLevelElement = card.querySelector(".riskLevel");
            let currentLevel = riskLevelElement.textContent;
            let newLevel = currentLevel === "Low" ? "Medium" : currentLevel === "Medium" ? "High" : "High";
            riskLevelElement.textContent = newLevel;
            updateRiskCardColor(card, newLevel);
        });
    });
});

 // 4. Function to add risk items dynamically
 function addRiskItem(riskName, riskLevel, department) {
    const riskCard = document.createElement("div");
    riskCard.classList.add("riskCard");
    updateRiskCardColor(riskCard, riskLevel);
    
    riskCard.innerHTML = `
        <strong>${riskName}</strong>
        <p class="riskLevel">${riskLevel}</p>
        <p>Department: ${department}</p>
        <button class="resolveBtn">Resolve</button>
    `;
 }

 