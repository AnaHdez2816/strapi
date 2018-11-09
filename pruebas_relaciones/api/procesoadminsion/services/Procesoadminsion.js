'use strict';

/**
 * Procesoadminsion.js service
 *
 * @description: A set of functions similar to controller's actions to avoid code duplication.
 */

// Public dependencies.
const _ = require('lodash');

module.exports = {

  /**
   * Promise to fetch all procesoadminsions.
   *
   * @return {Promise}
   */

  fetchAll: (params) => {
    // Convert `params` object to filters compatible with Mongo.
    const filters = strapi.utils.models.convertParams('procesoadminsion', params);
    // Select field to populate.
    const populate = Procesoadminsion.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias)
      .join(' ');

    return Procesoadminsion
      .find()
      .where(filters.where)
      .sort(filters.sort)
      .skip(filters.start)
      .limit(filters.limit)
      .populate(populate);
  },

  /**
   * Promise to fetch a/an procesoadminsion.
   *
   * @return {Promise}
   */

  fetch: (params) => {
    // Select field to populate.
    const populate = Procesoadminsion.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias)
      .join(' ');

    return Procesoadminsion
      .findOne(_.pick(params, _.keys(Procesoadminsion.schema.paths)))
      .populate(populate);
  },

  /**
   * Promise to count procesoadminsions.
   *
   * @return {Promise}
   */

  count: (params) => {
    // Convert `params` object to filters compatible with Mongo.
    const filters = strapi.utils.models.convertParams('procesoadminsion', params);

    return Procesoadminsion
      .count()
      .where(filters.where);
  },

  /**
   * Promise to add a/an procesoadminsion.
   *
   * @return {Promise}
   */

  add: async (values) => {
    // Extract values related to relational data.
    const relations = _.pick(values, Procesoadminsion.associations.map(ast => ast.alias));
    const data = _.omit(values, Procesoadminsion.associations.map(ast => ast.alias));

    // Create entry with no-relational data.
    const entry = await Procesoadminsion.create(data);

    // Create relational data and return the entry.
    return Procesoadminsion.updateRelations({ _id: entry.id, values: relations });
  },

  /**
   * Promise to edit a/an procesoadminsion.
   *
   * @return {Promise}
   */

  edit: async (params, values) => {
    // Extract values related to relational data.
    const relations = _.pick(values, Procesoadminsion.associations.map(a => a.alias));
    const data = _.omit(values, Procesoadminsion.associations.map(a => a.alias));

    // Update entry with no-relational data.
    const entry = await Procesoadminsion.update(params, data, { multi: true });

    // Update relational data and return the entry.
    return Procesoadminsion.updateRelations(Object.assign(params, { values: relations }));
  },

  /**
   * Promise to remove a/an procesoadminsion.
   *
   * @return {Promise}
   */

  remove: async params => {
    // Select field to populate.
    const populate = Procesoadminsion.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias)
      .join(' ');

    // Note: To get the full response of Mongo, use the `remove()` method
    // or add spent the parameter `{ passRawResult: true }` as second argument.
    const data = await Procesoadminsion
      .findOneAndRemove(params, {})
      .populate(populate);

    if (!data) {
      return data;
    }

    await Promise.all(
      Procesoadminsion.associations.map(async association => {
        if (!association.via || !data._id) {
          return true;
        }

        const search = _.endsWith(association.nature, 'One') || association.nature === 'oneToMany' ? { [association.via]: data._id } : { [association.via]: { $in: [data._id] } };
        const update = _.endsWith(association.nature, 'One') || association.nature === 'oneToMany' ? { [association.via]: null } : { $pull: { [association.via]: data._id } };

        // Retrieve model.
        const model = association.plugin ?
          strapi.plugins[association.plugin].models[association.model || association.collection] :
          strapi.models[association.model || association.collection];

        return model.update(search, update, { multi: true });
      })
    );

    return data;
  },

  /**
   * Promise to search a/an procesoadminsion.
   *
   * @return {Promise}
   */

  search: async (params) => {
    // Convert `params` object to filters compatible with Mongo.
    const filters = strapi.utils.models.convertParams('procesoadminsion', params);
    // Select field to populate.
    const populate = Procesoadminsion.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias)
      .join(' ');

    const $or = Object.keys(Procesoadminsion.attributes).reduce((acc, curr) => {
      switch (Procesoadminsion.attributes[curr].type) {
        case 'integer':
        case 'float':
        case 'decimal':
          if (!_.isNaN(_.toNumber(params._q))) {
            return acc.concat({ [curr]: params._q });
          }

          return acc;
        case 'string':
        case 'text':
        case 'password':
          return acc.concat({ [curr]: { $regex: params._q, $options: 'i' } });
        case 'boolean':
          if (params._q === 'true' || params._q === 'false') {
            return acc.concat({ [curr]: params._q === 'true' });
          }

          return acc;
        default:
          return acc;
      }
    }, []);

    return Procesoadminsion
      .find({ $or })
      .sort(filters.sort)
      .skip(filters.start)
      .limit(filters.limit)
      .populate(populate);
  }
};
