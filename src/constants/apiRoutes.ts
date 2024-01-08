const { baseUrl } = require("./env.config");
export const loginRoute = `/api/auth/admin/login`;
export const resturantsRoute = `/api/admin/restaurants`;
export const usersRoutes = `/api/admin/all_users`;
export const ordersRoute = `/api/admin/order`;
export const transactionsRoute = `/api/admin/transactions`;
export const locationsRoute = `/api/admin/locations`;

// routes on dashboarc
export const restaurantsCountRoute = `
/api/admin/get_restaurant_count_by_location`;

export const ordersCountRoute = `
/api/admin/get_order_count_by_location`;

export const usersCountRoute = `
/api/admin/get_users_count_by_location`;

// ORDER ACTION
export const approveOrderRoute = (orderId: string) =>
  `/api/admin/approve_order/${orderId}`;

export const sentForDeliveryRoute = (orderId: string) =>
  `/api/admin/order_sent_forDelivery/${orderId}`;

export const orderDeliveredRoute = (orderId: string) =>
  `/api/admin/order_delivered/${orderId}`;

export const rejetOrderRoute = (orderId: string) =>
  `/api/admin/reject_order/${orderId}`;

export const singleOrderRoute = (orderId: string) =>
  `/api/admin/order_by_id?order_id=${orderId}`;

export const blockRestaurantRoute = (restaurantId: string) =>
  `/api/admin/block_restaurant/${restaurantId}`;

export const unBlockRestaurantRoute = (restaurantId: string) =>
  `/api/admin/unblock_restaurant/${restaurantId}`;

export const blockUserRoute = (username: string) =>
  `/api/admin/block_user/${username}`;

export const unBlockUserRoute = (username: string) =>
  `/api/admin/unblock_user/${username}`;

export const removeOrderItem = (orderId: string, itemId: string) =>
  `/api/admin/remove_order_item/${orderId}/${itemId}`;

// food by restuarnt

export const foodByRestaurantRoute = `/api/v1/public/food_by_restaurant`;
