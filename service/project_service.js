const pool = require('../poolDB');


const addTechno_project = async (techno_project) => {
  
  const query = `
    INSERT INTO public.comporte (techno_uuid, proyect_uuid)
    VALUES ($1, $2)
  `;
  const values = [techno_project.gettechno_uuid(), techno_project.getproyect_uuid()];
  await pool.query(query, values);
};

module.exports = {
  addTechno_project,
};