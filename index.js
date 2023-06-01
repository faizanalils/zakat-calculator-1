function calculateZakat(assets, liabilities) {
    var nisab = 40184; // 
    var totalAssets = assets.reduce((a, b) => a + b, 0);
    var totalLiabilities = liabilities.reduce((a, b) => a + b, 0);
    var netAssets = totalAssets - totalLiabilities;
  
    if (netAssets < nisab) {
      return "You are not required to pay Zakat.";
    } else {
      var zakatAmount = 0.025 * netAssets;
      return "Zakat amount: " + zakatAmount.toFixed(2);
    }
  }
  

  var assets = [50000, 100000, 200000]; 
  var liabilities = [25000, 50000]; 
  
  console.log(calculateZakat(assets, liabilities));
  