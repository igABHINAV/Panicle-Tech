const User = require("../Models/User");

exports.updateUser = async (req, res) => {
  try {
    
    const {id, name, department, position, salary } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, department, position, salary },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User updated!",
      user: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
