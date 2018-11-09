'use strict';

/**
 * Juzgadoejecucion.js controller
 *
 * @description: A set of functions called "actions" for managing `Juzgadoejecucion`.
 */

module.exports = {

  /**
   * Retrieve juzgadoejecucion records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.juzgadoejecucion.search(ctx.query);
    } else {
      return strapi.services.juzgadoejecucion.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a juzgadoejecucion record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.juzgadoejecucion.fetch(ctx.params);
  },

  /**
   * Count juzgadoejecucion records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.juzgadoejecucion.count(ctx.query);
  },

  /**
   * Create a/an juzgadoejecucion record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.juzgadoejecucion.add(ctx.request.body);
  },

  /**
   * Update a/an juzgadoejecucion record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.juzgadoejecucion.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an juzgadoejecucion record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.juzgadoejecucion.remove(ctx.params);
  }
};
