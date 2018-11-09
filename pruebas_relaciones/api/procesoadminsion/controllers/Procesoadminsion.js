'use strict';

/**
 * Procesoadminsion.js controller
 *
 * @description: A set of functions called "actions" for managing `Procesoadminsion`.
 */

module.exports = {

  /**
   * Retrieve procesoadminsion records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.procesoadminsion.search(ctx.query);
    } else {
      return strapi.services.procesoadminsion.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a procesoadminsion record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.procesoadminsion.fetch(ctx.params);
  },

  /**
   * Count procesoadminsion records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.procesoadminsion.count(ctx.query);
  },

  /**
   * Create a/an procesoadminsion record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.procesoadminsion.add(ctx.request.body);
  },

  /**
   * Update a/an procesoadminsion record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.procesoadminsion.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an procesoadminsion record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.procesoadminsion.remove(ctx.params);
  }
};
