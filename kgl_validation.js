
// Part A

// I used const because the company name won't change throughout the program
const companyName = "Karibu Groceries LTD";

// I used const because the minimum tonnage is a rule or constant value in the business
const minimumTonnage = 1000;

// I used let because operational status might change later
let isOperational = true;

// I used let so I can assign the manager name later after input or through a lookup.
let managerName; // currently undefined because not set yet

// I used const for closedBranches because null here represents a known empty value.
// If later we store an array or number, we would reassign—then let would be better.
// For now, I keep const to emphasize "intentionally empty".
const closedBranches = null;

// Check and log types
console.log("Type of companyName:", typeof companyName);
console.log("Type of minimumTonnage:", typeof minimumTonnage);
console.log("Type of isOperational:", typeof isOperational);
console.log("Type of managerName:", typeof managerName);
console.log("Type of closedBranches:", typeof closedBranches);

// Part B

// Input has extra spaces and mixed capitalization
let dealerNameInput = " james BOND ";

// 1) Trim spaces
const trimmedName = dealerNameInput.trim();

/*2) Convert to proper title case, first letter of each word capitalized
Creating a function toTitleCase
*/
function toTitleCase(name) {
  // split on spaces, filter out empties
  return name
    .split(" ")
    .filter(part => part.length > 0)
    .map(part => part[0].toUpperCase() + part.slice(1).toLowerCase())
    .join(" ");
}

const cleanDealerName = toTitleCase(trimmedName);

// Log result using a template literal
console.log(`Cleaned Dealer Name: ${cleanDealerName}`);

// Validation: length not less than 2 and not empty
const isLengthOK = cleanDealerName.length >= 2;
const isNotEmpty = cleanDealerName !== "";

if (isLengthOK && isNotEmpty) {
  console.log("Valid dealer name");
} else {
  console.log("Invalid dealer name");
}

// Part C

let userRole = "Sales Agent";
let procurementTonnage = 1500;

// produceType is not used in rules, but declared as required
let produceType = "Beans";

// cost is a string initially; per instructions we'll convert it before checking
let costInUgx = "50000";

if (userRole === "Sales Agent") {
  // Rule 1: block sales agents
  console.error("Error: Sales Agent is not allowed to record produce entries.");
} else {
  // Proceed only if not Sales Agent

  // Rule 2: Tonnage must be not less than 1000kg
  const tonnageValid = procurementTonnage >= 1000;
  console.log("Tonnage meets minimum requirement:", tonnageValid);

  // Rule 3: Cost must be not less than 5 digits (>= 10000)
  const costNumber = Number(costInUgx);
  const costValid = !Number.isNaN(costNumber) && costNumber >= 10000;
  console.log("Cost meets minimum requirement:", costValid);

  // Logical AND check for both conditions
  if (tonnageValid && costValid) {
    console.log("Procurement record valid");
  } else {
    console.log("Procurement record invalid");
  }
}

// Part 

// Initial array
let kglProduce = ["Beans", "Grain Maize", "Cow peas", "G-nuts", "Soybeans"];

// Add "Green Peas" to the end
kglProduce.push("Green Peas");

// Remove the first item (oldest stock sold)
const removedItem = kglProduce.shift();
console.log("Removed oldest stock:", removedItem);

// Check if "G-nuts" exists
const hasGnuts = kglProduce.includes("G-nuts");
console.log("Does array contain 'G-nuts'?", hasGnuts);

// Log final array and its length
console.log("Final kglProduce array:", kglProduce);
console.log("Final kglProduce length:", kglProduce.length);

// Merge with branch2Produce using concat
const branch2Produce = ["Maize", "Beans"];
const allProduce = kglProduce.concat(branch2Produce);
console.log("All merged produce:", allProduce);
