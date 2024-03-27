const jwt = require('jsonwebtoken');
const User = require('../models/User');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
exports.authenticateToken = async (req, res, next) => {
  const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1];
  //const token = req.header('Authorization');
  // console.log(token);
  // console.log(process.env.ACCESS_TOKEN_SECRET);
  if (!token) {
    return res.status(401).json({ message: 'Access token is missing' });
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = { userId: decoded.userId, role: decoded.role };
    next();
  } catch (error) {
    
    console.error(error);
    return res.status(403).json({ message: 'Invalid token' });
  }
};

exports.authenticateAdmin = async (req, res, next) => {
  const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1];
    
  if (!token) {
    return res.status(401).json({ message: 'Access token is missing' });
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decoded.userId);

    if (!user || user.role !== 'admin') {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    req.user = { userId: decoded.userId, role: decoded.role };
    next();
  } catch (error) {
    console.error(error);
    return res.status(403).json({ message: 'Invalid token' });
  }
};