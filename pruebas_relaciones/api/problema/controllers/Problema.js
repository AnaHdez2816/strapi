'use strict';

/**
 * Problema.js controller
 *
 * @description: A set of functions called "actions" for managing `Problema`.
 */

module.exports = {

  /**
   * Retrieve problema records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.problema.search(ctx.query);
    } else {
      return strapi.services.problema.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a problema record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.problema.fetch(ctx.params);
  },

  /**
   * Count problema records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.problema.count(ctx.query);
  },

  /**
   * Create a/an problema record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.problema.add(ctx.request.body);
  },

  /**
   * Update a/an problema record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.problema.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an problema record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.problema.remove(ctx.params);
  }
};
