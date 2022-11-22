const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel');


const User = require('../models/userModel')
// @desc Get Goals
// @route Get/api/goal
// @access Pritte
const getGoals = asyncHandler(async (req,res) =>{
    const goals = await Goal.find({ user: req.user.id })
    res.status(200).json(goals);
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
  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id
  })

    res.status(200).json(goal);
})


// @desc Update Goals
// @route PUT/api/goal/:id
// @access Pritte
const updateGoal = asyncHandler(async (req,res) =>{
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    const user = await User.findById(req.user.id)
    //Check for user
    if(!user){
        res.status(401)
        throw new Error('User not found')
    }
//make sure the logged in user match the goal user
if(goal.user.toString() !== user.id){
  res.status(401)
  throw new Error('User not authorized')
}

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new : true,}) //created if it doesnt exist

    res.status(200).json(updatedGoal)
})

// @desc Delete Goal
// @route Delete/api/goal/:did
// @access Pritte
const deleteGoal = asyncHandler(async (req,res) =>{
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }
   
    const user = await User.findById(req.user.id)
    //Check for user
    if(!user){
        res.status(401)
        throw new Error('User not found')
    }
//make sure the logged in user match the goal user
if(goal.user.toString() !== user.id){
  res.status(401)
  throw new Error('User not authorized')
}
    

    await goal.remove()
    res.status(200).json({ id:req.params.id})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}