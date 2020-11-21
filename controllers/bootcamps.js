const Bootcamp = require('../models/Bootcamp');

// @desc           Get All Bootcamps
// @routes         GET /api/v1/bootcamps
// @access         Public
exports.getBootcamps = async (req, res, next) => {
    try {
        const bootcamps = await Bootcamp.find();
        res.status(200).json({
            success: true,
            count: bootcamps.length,
            data: bootcamps
        })
    } catch (err) {
        res.status(400).json({
            success: false,
        })
    }
}

// @desc           Get Single Bootcamp
// @routes         GET /api/v1/bootcamps/:id
// @access         Public
exports.getBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id);
        if(!bootcamp) {
            return res.status(400).json({ success: false, message: 'Record doesn\'t exist' });
        }
        res.status(200).json({
            success: true,
            data: bootcamp
        });
    } catch (error) {
        res.status(400).json({
            success: false,
        })
    }
}

// @desc           Create New  Bootcamp
// @routes         POST /api/v1/bootcamps
// @access         Private
exports.createBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.create(req.body);
        res.status(201).json({
            success: true,
            data: bootcamp
        })
    } catch (err) {
        res.status(400).json({
            success: false,
        });
    }
}

// @desc           Update Bootcamp
// @routes         PUT /api/v1/bootcamps/:id
// @access         Private
exports.updateBootcamp = async (req, res, next) => {
    try {
        const updatedBootCamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new : true,
            runValidators: true
        })
        if(!updatedBootCamp) {
            return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: updatedBootCamp});
    } catch (error) {
        res.status(400).json({
            success: false,
        });
    }
}


// @desc           Delete Bootcamp
// @routes         DELETE /api/v1/bootcamps/:id
// @access         Private
exports.deleteBootcamp = async (req, res, next) => {
    try {
        const deletedBootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
        if(!deletedBootcamp) {
            return res.status(400).json({ success: false });
        }
        res.status(200).json({success: true, deletedBootcamp});
    } catch (error) {
        return res.status(400).json({ success: false });
    }
}