/* General Styles */
body {
  font-family: "Poppins", sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 0;
  background-color: #e9f5fb; /* Light blue background */
}

header {
  background: linear-gradient(90deg, rgba(255, 99, 71, 1), rgba(255, 165, 0, 1));
  padding: 20px;
  color: white;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

nav {
  margin-top: 10px;
}

nav a {
  color: white;
  margin: 0 15px;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}

nav a:hover {
  color: #ffeb3b; /* Yellow hover effect */
}

main {
  padding: 20px;
  max-width: 1200px;
  margin: auto;
}

h2 {
  color: #2c3e50;
  margin-bottom: 20px;
  text-align: center;
}

section {
  background: white;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

section:hover {
  transform: translateY(-5px); /* Elevate on hover */
}

h3 {
  color: #34495e;
  margin-bottom: 10px;
  border-bottom: 2px solid #ff6347; /* Underline with color */
  padding-bottom: 5px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

table,
th,
td {
  border: 1px solid #ddd;
}

th,
td {
  padding: 15px;
  text-align: center;
}

th {
  background-color: #ffeb3b; /* Bright yellow for header */
  color: #2c3e50;
}

tr:nth-child(even) {
  background-color: #f2f2f2; /* Zebra striping for table */
}

tr:hover {
  background-color: #ffe5b4; /* Light orange on row hover */
}

button#feedback-button {
  background-color: #ff6347;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  display: block;
  margin: 20px auto; /* Center button */
}

button#feedback-button:hover {
  background-color: #ff4500; /* Darker red on hover */
}

.prediction-section {
  margin-bottom: 20px;
}

.prediction-card {
  background: #ffeb3b; /* Bright yellow background */
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.prediction-card h4 {
  color: #2c3e50;
}

.hidden {
  display: none; /* Hides the feedback section */
}

form {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  background: #fff8e1; /* Light orange background for form */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

label {
  margin-bottom: 5px;
  font-weight: bold;
  color: #34495e;
}

input[type="text"],
input[type="email"],
textarea {
  padding: 12px;
  border: 2px solid #ff6347; /* Red border */
  border-radius: 5px;
  margin-bottom: 15px;
}

button[type="submit"] {
  background-color: #ff6347;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

button[type="submit"]:hover {
  background-color: #ff4500;
  transform: scale(1.05); /* Scale up on hover */
}

footer {
  text-align: center;
  padding: 20px;
  background-color: #34495e; /* Dark background for footer */
  color: white;
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
}