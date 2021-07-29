const express = require('express')
const router = express.Router()
const Article = require('../models/Article');
const Task = require('../models/Task');

/** ARTICLE */
/* GET articles */
router.get('/articles', (req, res) => {
  Article.find({}).then(data => {
    res.status(200).json(data)
  }).catch(err => {
    res.status(404).json(data)
  })
})

/* GET article with by id */
router.get('/articles/:id', (req, res) => {
  Article.findById(req.params.id)
  .then(data => {
    res.status(200).json(data)
  }).catch(err => {
    res.status(404).json(err)
  })
})

/* POST create new article */
router.post('/articles/new', (req, res) => {
  const {title, text} = req.body
  new Article({
    title,
    text
  }).save()
  .then(data => {
    res.status(201).json(data)
  }).catch(err => {
    res.status(404).json(err)
  })
})

/* PUT update article with by id */
router.put('/articles/update', (req, res) => {
  const {_id, title, text} = req.body
  Article.findByIdAndUpdate(_id, {title, text}, {new: true})
  .then(data => {
    res.status(200).json(data)
  }).catch(err => {
    res.status(404).json(err)
  })
})

/* DELETE delete article with by id */
router.delete('/articles/delete', (req, res) => {
  const {id} = req.body
  Article.findByIdAndDelete(id)
  .then(data => {
    res.status(200).json(data)
  }).catch(err => {
    res.status(404).json(err)
  })
})

/** TASK */
/* GET tasks */
router.get('/tasks', (req, res) => {
  Task.find({}).then(data => {
    res.status(200).json(data)
  }).catch(err => {
    res.status(404).json(data)
  })
})

/* GET task with by id */
router.get('/tasks/:id', (req, res) => {
  Task.findById(req.params.id)
  .then(data => {
    res.status(200).json(data)
  }).catch(err => {
    res.status(404).json(err)
  })
})

/* POST create new task */
router.post('/tasks/new', (req, res) => {
  const {title, description,priority,deadline} = req.body
  new Task({
    title,
    description,
    priority,
    deadline
  }).save()
  .then(data => {
    res.status(201).json(data)
  }).catch(err => {
    res.status(404).json(err)
  })
})

/* PUT update task with by id */
router.put('/tasks/update', (req, res) => {
  const {_id, title, description, priority, deadline} = req.body
  Task.findByIdAndUpdate(_id, {title, description, priority, deadline}, {new: true})
  .then(data => {
    res.status(200).json(data)
  }).catch(err => {
    res.status(404).json(err)
  })
})

/* DELETE delete task with by id */
router.delete('/tasks/delete', (req, res) => {
  const {id} = req.body
  Task.findByIdAndDelete(id)
  .then(data => {
    res.status(200).json(data)
  }).catch(err => {
    res.status(404).json(err)
  })
})


module.exports = router
