const express = require('express');
const Form = require('../models/Form')

exports.get_company_details = (req, res) => {
  res.render('dashboard/company_details')
}

exports.get_application_introduction = (req, res) => {
  res.render('dashboard/application_introduction')
}

exports.get_environment_energy = (req, res) => {
  res.render('dashboard/environment_energy')
}

exports.get_environment_natural_resource = (req, res) => {
  res.render('dashboard/environment_natural_resource')
}

exports.get_environment_travel = (req, res) => {
  res.render('dashboard/environment_travel')
}

exports.get_environment_supply_chain_management = (req, res) => {
  res.render('dashboard/environment_supply_chain_management')
}

exports.get_environment_waste = (req, res) => {
  res.render('dashboard/environment_waste')
}

exports.get_environment_supporting_documents = (req, res) => {
  res.render('dashboard/environment_supporting_documents')
}

exports.get_assessment_and_tips = (req, res) => {
  res.render('dashboard/assessment_and_tips')
}