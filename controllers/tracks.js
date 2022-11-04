const { tracksModel } = require("../models");
//obtener lista de la base de datos
/**
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
  const data = await tracksModel.find({});
  res.send({ data });
};

//obtener un detalle
/**
 *@param {*} req
 *@param {*} res
 */
const getItem = (req, res) => {};

//insertar un registro
/**
 * @param {*} req
 * @param {*} res
 */
const createItems = async (req, res) => {
  const { body } = req;
  console.log(body);
  const data = await tracksModel.create(body);
  res.send({ data });
};

//crear un registro
/**
 * @param {*} req
 * @param {*} res
 */
const updateItems = (req, res) => {};

//eliminar un registro
/**
 *@param {*} req
 *@param {*} res
 */
const deleteItems = (req, res) => {};

module.exports = { getItems, getItem, updateItems, createItems, deleteItems };

//hasta 1:35:00
