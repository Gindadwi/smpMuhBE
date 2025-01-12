const { User } = require("../../../models");

module.exports = async (req, res) => {
  try {
    const userId = req.params.id;

    const sqlOptions = {
      attributes: ["id", "name", "email"],
    };

    const user = await User.findAll(sqlOptions);
    return res.json({
      status: "success",
      data: user,
    });
  } catch (error) {
    console.error("Error fetching users:", error);

    return res.status(500).json({
      status: "error",
      message: "An error occurred while fetching users.",
    });
  }
};
