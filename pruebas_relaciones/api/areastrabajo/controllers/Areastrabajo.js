'use strict';

/**
 * Areastrabajo.js controller
 *
 * @description: A set of functions called "actions" for managing `Areastrabajo`.
 */

module.exports = {

  /**
   * Retrieve areastrabajo records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.areastrabajo.search(ctx.query);
    } else {
      return strapi.services.areastrabajo.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a areastrabajo record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.areastrabajo.fetch(ctx.params);
  },

  /**
   * Count areastrabajo records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.areastrabajo.count(ctx.query);
  },

  /**
   * Create a/an areastrabajo record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.areastrabajo.add(ctx.request.body);
  },

  /**
   * Update a/an areastrabajo record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.areastrabajo.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an areastrabajo record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.areastrabajo.remove(ctx.params);
  }
};
