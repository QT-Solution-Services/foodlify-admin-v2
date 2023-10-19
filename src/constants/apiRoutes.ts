const { baseUrl } = require("./env.config");
export const loginRoute = `${baseUrl}/api/v1/auth/admin/login`;
export const resturantsRoute = `${baseUrl}/api/v1/admin/restaurants_paged`;
export const usersRoutes = `${baseUrl}/api/v1/admin/users`;
export const ordersRoute = `${baseUrl}/api/v1/admin/order`;
