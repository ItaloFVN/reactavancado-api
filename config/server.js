mmodule.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '4dc55a73-549c-4278-8ee8-f0ed484fbbb9'),
    },
  },
});
