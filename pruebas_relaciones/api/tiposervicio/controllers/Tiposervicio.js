'use strict';

/**
 * Tiposervicio.js controller
 *
 * @description: A set of functions called "actions" for managing `Tiposervicio`.
 */

module.exports = {

  /**
   * Retrieve tiposervicio records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.tiposervicio.search(ctx.query);
    } else {
      return strapi.services.tiposervicio.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a tiposervicio record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.tiposervicio.fetch(ctx.params);
  },

  /**
   * Count tiposervicio records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.tiposervicio.count(ctx.query);
  },

  /**
   * Create a/an tiposervicio record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.tiposervicio.add(ctx.request.body);
  },

  /**
   * Update a/an tiposervicio record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.tiposervicio.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an tiposervicio record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.tiposervicio.remove(ctx.params);
  }
};
