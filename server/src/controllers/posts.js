const express = require('express')
const model = require('../models/posts')

const getAll = (req, res) => {
  const data = model.getAll()
  res.status(200).json({ data })
}

const getOne = (req, res) => {
  const data = model.getOne(req.params)
  res.status(200).json({ data })
}

const create = (req, res) => {
  const data = model.create(req.body)
  res.status(201).json({ data })
}

const update = (req, res) => {
  const data = model.update(req.params, req.body)
  res.status(200).json({ data })
}

const del = (req, res, next) => {
  const data = model.del(req.params)
  if(data.errors) {
    return next({ status: 400, message: 'Cannot delete account', errors: data.errors })
  }
  res.status(204).json({ data })
}
module.exports = { getAll, getOne, create, update, del }