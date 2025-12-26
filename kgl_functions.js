// Part A

// 1) calculateProcurementCost: multiply tonnage by price, validate inputs
function calculateProcurementCost(tonnageInKg, pricePerKg) {
  const isValidNumber =
    typeof tonnageInKg === "number" &&
    typeof pricePerKg === "number" &&
    !Number.isNaN(tonnageInKg) &&
    !Number.isNaN(pricePerKg);

  if (!isValidNumber || tonnageInKg < 0 || pricePerKg < 0) {
    return "Invalid input";
  }
  return tonnageInKg * pricePerKg;
}

// Console logs to test
console.log("Cost test (1000kg @ 5000):", calculateProcurementCost(1000, 5000));
console.log("Cost test invalid:", calculateProcurementCost("1000", 5000));

// 2) validateBuyerName: arrow function
const validateBuyerName = (buyerName) => {
  if (typeof buyerName !== "string") return false;
  const cleaned = buyerName.trim();
  return cleaned.length >= 2 && cleaned !== "";
};

console.log("Validate buyer 'AB':", validateBuyerName("AB"));
console.log("Validate buyer ' ':", validateBuyerName(" "));

// 3) checkUserAuthorization with switch
function checkUserAuthorization(role) {
  switch (role) {
    case "Manager":
      return "procurement_and_sales";
    case "Sales Agent":
      return "sales_only";
    case "Director":
      return "view_aggregations";
    default:
      return "unauthorized";
  }
}

console.log("Auth Manager:", checkUserAuthorization("Manager"));
console.log("Auth Unknown:", checkUserAuthorization("Intern"));

// Part B
// 4) createSalesRecord function
function createSalesRecord(produceName, tonnage, buyerName, amountPaid) {
  // Generate random id between 1000 and 9999
  const id = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
  return {
    id: id,
    produceName: produceName,
    tonnageInKgs: tonnage,
    buyerName: buyerName,
    amountPaid: amountPaid,
    saleDate: new Date(),
    isCreditSale: false,
  };
}

// 5) Create object and manipulate
const testSale = createSalesRecord("Beans", 1200, "James Bond", 6500000);

// Add new property branch (dot notation)
testSale.branch = "Maganjo";

// Modify isCreditSale to true
testSale.isCreditSale = true;

// Add dueDate using bracket notation
testSale["dueDate"] = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days later

// Log property names using Object.keys()
const propNames = Object.keys(testSale);
console.log("Sales record property names:", propNames);

// 6) for...in loop to log each property
for (const prop in testSale) {
  console.log(`Property: ${prop}, Value: ${testSale[prop]}`);
}

// Part C

// 7) Weekly tonnage calculations
let weeklyTonnage = [1200, 1500, 980, 2000, 1100, 1800, 1300];

let totalTonnage = 0;
for (let i = 0; i < weeklyTonnage.length; i++) {
  totalTonnage += weeklyTonnage[i];
}
const averageTonnage = totalTonnage / weeklyTonnage.length;

console.log(`Total weekly tonnage: ${totalTonnage} kg`);
console.log(`Average daily tonnage: ${averageTonnage.toFixed(2)} kg`);

// 8) Array of sales records with varying data
const salesRecords = [
  createSalesRecord("Beans", 800, "Alice", 3000000),
  createSalesRecord("Maize", 1500, "Bob", 7200000),
  createSalesRecord("G-nuts", 600, "Carol", 4300000),
  createSalesRecord("Soybeans", 2000, "David", 11600000),
  createSalesRecord("Cow peas", 1200, "Eve", 7200000),
];

// Marking some as credit to test counting
salesRecords[1].isCreditSale = true;
salesRecords[3].isCreditSale = true;

let creditCount = 0;
for (const record of salesRecords) {
  if (!record.isCreditSale) {
    continue; // skip non-credit sales
  }
  creditCount += 1;
}
console.log(`Total credit sales: ${creditCount}`);

// 9) Stock check with break
let inventory = [
  { name: "Beans", tonnage: 500 },
  { name: "Maize", tonnage: 0 },
  { name: "G-nuts", tonnage: 300 },
];

for (let i = 0; i < inventory.length; i++) {
  if (inventory[i].tonnage === 0) {
    console.log(`Manager Alert: ${inventory[i].name} is out of stock`);
    break; // exit the loop immediately
  }
}
