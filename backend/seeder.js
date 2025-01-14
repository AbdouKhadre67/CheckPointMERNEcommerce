const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const Product = require("./models/productModel");
const products = require("./data/products");

dotenv.config(); // Charger les variables d'environnement
connectDB(); // Connexion à la base de données

const importData = async () => {
  try {
    // Supprime les anciens produits dans la base de données
    await Product.deleteMany();

    // Ajoute les nouveaux produits
    await Product.insertMany(products);

    console.log("Data Imported!"); // Message de succès
    process.exit(); // Quitte le processus Node.js
  } catch (error) {
    console.error(`Error: ${error.message}`); // Affiche l'erreur
    process.exit(1); // Quitte avec un code d'échec
  }
};

// Exécuter l'importation des données
importData();
