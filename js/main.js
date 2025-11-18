function checkEligibility(){
    const address = document.getElementById("walletInput").value.trim();

    if(address === ""){
        alert("Please enter a wallet address!");
        return;
    }

    window.location.href = `result.html?address=${encodeURIComponent(address)}`;
}
