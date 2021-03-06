const asyncHandler = require('../middleware/async');
const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');

// @desc           Register User
// @routes         POST /api/v1/auth/register
// @access         Public
exports.register = asyncHandler(async (req, res, next) => {
    const {name, email, password, role} = req.body;

    const user = await User.create({
        name,
        email,
        password,
        role,
    });
    // Create token
    const token = user.getSignedJwtToken();
    return res.status(200).json({
        success: true,
        token,
    });
});

// @desc           LOGIN User
// @routes         POST /api/v1/auth/login
// @access         Public
exports.login = asyncHandler(async (req, res, next) => {
    const {email, password} = req.body;
    // Validate email and password
    if(!email || !password) {
        return next(new ErrorResponse('Please provide an email and a password', 400)); 
    }

    const user = await User.findOne({ email }).select('+password');
    if(!user) {
        return next(new ErrorResponse('Invalid Credentials', 401)); 
    }

    // Check if pass matches
    const isMatch = await user.matchPassword(password);

    if(!isMatch) {
        return next(new ErrorResponse('Invalid Credentials', 401)); 
    }

    // Create token
    const token = user.getSignedJwtToken();
    return res.status(200).json({
        success: true,
        token,
    });
});

