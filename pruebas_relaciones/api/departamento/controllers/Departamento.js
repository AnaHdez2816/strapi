'use strict';

/**
 * Departamento.js controller
 *
 * @description: A set of functions called "actions" for managing `Departamento`.
 */

module.exports = {

  /**
   * Retrieve departamento records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.departamento.search(ctx.query);
    } else {
      return strapi.services.departamento.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a departamento record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.departamento.fetch(ctx.params);
  },

  /**
   * Count departamento records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.departamento.count(ctx.query);
  },

  /**
   * Create a/an departamento record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.departamento.add(ctx.request.body);
  },

  /**
   * Update a/an departamento record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.departamento.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an departamento record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.departamento.remove(ctx.params);
  }
};
