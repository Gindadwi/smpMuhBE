const { User } = require("../../../models");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;

    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "User not found",
      });
    }

    await User.update(
      {
        name,
        email,
        password,
      },
      {
        where: { id },
      }
    );

    res.status(200).json({
      status: "success",
      message: "User updated successfully",
      data: {
        id: user.id,
        name,
        email,
        password,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: "Server Error",
    });
  }
};
