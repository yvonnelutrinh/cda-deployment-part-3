import createKnex from 'knex';
import knexFile from '../knexfile.js';
const knex = createKnex(knexFile);

export const index = async (_req, res) => {
  try {
    const data = await knex("inventory");
    res.json(data);
  } catch (err) {
    res.status(400).send(`Error retrieving Inventories: ${err}`);
  }
};
