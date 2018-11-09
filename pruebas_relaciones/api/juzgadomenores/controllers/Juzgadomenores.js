'use strict';

/**
 * Juzgadomenores.js controller
 *
 * @description: A set of functions called "actions" for managing `Juzgadomenores`.
 */

module.exports = {

  /**
   * Retrieve juzgadomenores records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.juzgadomenores.search(ctx.query);
    } else {
      return strapi.services.juzgadomenores.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a juzgadomenores record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.juzgadomenores.fetch(ctx.params);
  },

  /**
   * Count juzgadomenores records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.juzgadomenores.count(ctx.query);
  },

  /**
   * Create a/an juzgadomenores record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.juzgadomenores.add(ctx.request.body);
  },

  /**
   * Update a/an juzgadomenores record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.juzgadomenores.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an juzgadomenores record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.juzgadomenores.remove(ctx.params);
  }
};
