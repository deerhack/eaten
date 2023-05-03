const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { generateJWTToken, validateJWTToken } = require("../utils/JWTUtil");

class AdminController {
  static async login(req, res) {
    const userData = res.locals.validated;
    const user = await prisma.admin.findFirst({
      where: {
        username: userData.username,
      },
    });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, data: "No such User exists" });
    }
    if (user.password == userData.password) {
      return res
        .status(200)
        .json({ success: true, token: generateJWTToken(user) });
    }
    return res
      .status(401)
      .json({ success: false, data: "No Such Credentials!" });
  }
}

module.exports = AdminController;
