const techno_project_Service = require('../service/project_service');
const Joi = require('joi');
const ComporterModel = require('../model/comporterModel.js');


const postTechno_project = async (req, res) => {

 const { techno_uuid, proyect_uuid } = req.body;

 console.log ('entre la req', techno_uuid, proyect_uuid);


 try {

  const schema = Joi.object({
   techno_uuid: Joi.string().required(),
   proyect_uuid: Joi.string().required(),

  });

  await schema.validateAsync({ techno_uuid, proyect_uuid });

  const techno_project = new ComporterModel(techno_uuid, proyect_uuid);

  await techno_project_Service.addTechno_project(techno_project)

  res.status(201).json({ message: 'creacion de tegnologia a proyecto' });

 } catch (error) {
  console.log(error);
  res.status(500).json({ result: 'error post' });
 }

};

module.exports = {
 postTechno_project,
};