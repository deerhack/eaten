const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");

const prisma = new PrismaClient();

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send({ message: "Authorization header missing" });
  }

  // Parse the token from the Authorization header
  const token = authHeader.split(" ")[1];

  // Verify the token using the secret key
  jwt.verify(token, process.env.SECRET_KEY, async (err, decoded) => {
    console.log(err)
    if (err) {
      return res.status(403).send({ message: "Invalid or expired token" });
    }
    const data = await prisma.admin.findFirst({
      where: {
        username: decoded.username,
      },
    });
    if (!data) {
      res.status(403).send({ message: "Invalid or expired token" });
    }
    req.user = data;

    // Store the decoded payload in the request object for later use

    next();
  });
};
