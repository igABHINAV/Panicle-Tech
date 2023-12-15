const User = require("../Models/User");

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.FilterDepartment = async (req, res) => {
  try {
    const { dept } = req.body;
    const users = await User.find({
      department: dept,
    });
    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.FilterPosition = async (req, res) => {
  try {
    const { pos } = req.body;
    const users = await User.find({
      position: pos,
    });
    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.FilterSalaryRange = async (req, res) => {
  try {
    const { minsalary, maxsalary } = req.body;

    if (!minsalary || !maxsalary) {
      return res
        .status(400)
        .json({ error: "minSalary and maxSalary are required parameters" });
    }

    const users = await User.find({
      salary: {
        $gte: parseInt(minsalary),
        $lte: parseInt(maxsalary),
      },
    });

    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
