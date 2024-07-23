import asyncHandler from "../../../util/async.js";
import ErrorResponse from "../../../util/error_response.js";
import User from "../../../models/user-model/User.js";
import AthleteProfile from "../../../models/client-models/AthleteProfile.js";

const CreateAthlete = asyncHandler(async (req, res, next) => {
  // Determine User Type
  if (req.user.role === "Athelte") {
    // Athlete User
    // Add User to Body
    req.body.user = req.user._id;
    req.body.created_by = req.user._id;
    req.body.name = req.user.name;
    const athlete = await AthleteProfile.cretae(req.body);
    // Check For Athlete
    if (!athlete) {
      return next(
        new ErrorResponse(
          `There was an error creating the Athlete Profile`,
          500,
          "Create Profile Error"
        )
      );
    }

    res.status(201).json({
      success: true,
      data: athlete,
    });
  } else if (req.user.role === "Parent") {
    // Parent User
    // Add User to Associated Users
    req.body.associated_users = [
      {
        name: req.user.name,
        id: req.user._id,
      },
    ];
    req.body.created_by = req.user._id;
    const athlete = await AthleteProfile.create(req.body);
    // Check For Athlete
    if (!athlete) {
      return next(
        new ErrorResponse(
          `There was an error creating the Athlete Profile`,
          500,
          "Create Profile Error"
        )
      );
    }

    res.status(201).json({
      success: true,
      data: athlete,
    });
  } else if (req.user.admin) {
    // User is Admin, only create the Athlete Profile
    req.body.created_by = req.user._id;
    const athlete = await AthleteProfile.create(req.body);
    // Check For Athlete
    if (!athlete) {
      return next(
        new ErrorResponse(
          `There was an error creating the Athlete Profile`,
          500,
          "Create Profile Error"
        )
      );
    }

    res.status(201).json({
      success: true,
      data: athlete,
    });
  } else {
    return next(
      new ErrorResponse(`There was an Error Creating New Athlete`, 500, "Error")
    );
  }
});

export default CreateAthlete;
