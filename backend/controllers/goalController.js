const asyncHandler = require('express-async-handler')

// @desc Get Goals
// @route Get/api/goal
// @access Pritte
const getGoals = asyncHandler(async (req,res) =>{
    res.status(200).json({ message: "Get Goal"});
})

// @desc set Goals
// @route POst/api/goal/
// @access Pritte
const setGoal = asyncHandler(async (req,res) =>{
  if(!req.body.text){
    res.status(400)
    //return an html with err text
    throw new Error('Please add a text field')
  }
    res.status(200).json({ message: "Set Goal"});
})


// @desc Update Goals
// @route PUT/api/goal/:id
// @access Pritte
const updateGoal = asyncHandler(async (req,res) =>{
    res.status(200).json({ message: `Update goal ${req.params.id}`})
})

// @desc Delete Goal
// @route Delete/api/goal/:did
// @access Pritte
const deleteGoal = asyncHandler(async (req,res) =>{
    res.status(200).json({ message: `Delete goal ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}