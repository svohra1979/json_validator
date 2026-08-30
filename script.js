
const validate=document.querySelector("#validateBtn");
validate.addEventListener("click",() => {
    const jsoninput=document.querySelector("#jsonInput").value;
    const resultMessage=document.querySelector("#resultMessage");
    const formattedOutput=document.querySelector("#formattedOutput");
    
    try {
        JSON.parse(jsoninput);
        const jsonData = JSON.parse(jsoninput);
        
        resultMessage.textContent = "✓ Valid JSON";
        resultMessage.className = "success";
        
        formattedOutput.textContent = JSON.stringify(jsonData, null, 2);
    }
    catch(e) {
        resultMessage.textContent = "✗ Invalid JSON: " + e.message;
        resultMessage.className = "error";
        
        formattedOutput.textContent = "";
    }
})