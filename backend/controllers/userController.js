const bcrypt = require("bcryptjs");
const User = require("../models/userModel");


const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  // Vérification des champs requis
  if (!name || !email || !password) {
    res.status(400);
    return res.json({ message: "Please provide all fields" });
  }

  // Vérification si l'utilisateur existe déjà
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    return res.json({ message: "User already exists" });
  }

  // Hashage du mot de passe
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    // Création du nouvel utilisateur
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Réponse de succès
    res.status(201).json({
      id: user._id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    res.status(500);
    return res.json({ message: "Error creating user", error: error.message });
  }
};

module.exports = { registerUser };
