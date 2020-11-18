// @desc           Get All Bootcamps
// @routes         GET /api/v1/bootcamps
// @access         Public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({success: true, msg: 'Show All Bootcamps'});
}

// @desc           Get Single Bootcamp
// @routes         GET /api/v1/bootcamps/:id
// @access         Public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `Display Bootcamp ${req.params.id} `});
}

// @desc           Create New  Bootcamp
// @routes         POST /api/v1/bootcamps
// @access         Private
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: 'Create new Bootcamp'});
}

// @desc           Update Bootcamp
// @routes         PUT /api/v1/bootcamps/:id
// @access         Private
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `UPDATE Bootcamp ${req.params.id} `});
}


// @desc           Delete Bootcamp
// @routes         DELETE /api/v1/bootcamps/:id
// @access         Private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `DELETE Bootcamp ${req.params.id} `});
}