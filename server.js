const express = require("express");
const sequelize = require("./config/database");
const userRoutes = require("./routes/userRoutes");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); 
app.use("/users", userRoutes); 

sequelize.sync({ force: false }) 
    .then(() => {
        console.log("Database synced");
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => console.error("Error syncing database:", err));
