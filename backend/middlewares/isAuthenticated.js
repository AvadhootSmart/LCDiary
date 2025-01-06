const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config(); // To load environment variables (e.g., JWT secret key)

const isAuthenticated = (req, res, next) => {
  // Get the token from the Authorization header
  const token = req.header('Authorization')?.replace('Bearer ', ''); // "Bearer <token>"

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    // Verify the token using your secret key (from your .env file)
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the user information (e.g., _id) to the request object for later use
    req.user = decoded; // `decoded` should contain the userId or other info in the token payload

    // Call the next middleware in the chain
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = isAuthenticated;
