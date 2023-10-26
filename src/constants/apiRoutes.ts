const { baseUrl } = require("./env.config");
export const loginRoute = `${baseUrl}/api/v1/auth/admin/login`;
export const resturantsRoute = `${baseUrl}/api/v1/admin/restaurants_paged`;
export const usersRoutes = `${baseUrl}/api/v1/admin/users`;
export const ordersRoute = `${baseUrl}/api/v1/admin/order`;

// ORDER ACTION
export const approveOrderRoute = (orderId: string) =>
  `${baseUrl}/api/v1/admin/approve_order/${orderId}`;

export const sentForDeliveryRoute = (orderId: string) =>
  `${baseUrl}/api/v1/admin/order_sent_forDelivery/${orderId}`;

export const orderDeliveredRoute = (orderId: string) =>
  `${baseUrl}/api/v1/admin/order_delivered/${orderId}`;

export const rejetOrderRoute = (orderId: string) =>
  `${baseUrl}/api/v1/admin/reject_order/${orderId}`;

export const singleOrderRoute = (orderId: string) =>
  `${baseUrl}/api/v1/admin/order_by_id?order_id=${orderId}`;
