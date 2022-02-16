module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '60f9bc98f2a25907bc2a0818cd805f76'),
  },
});
