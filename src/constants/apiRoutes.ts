const { baseUrl } = require("./env.config");
// export const loginRoute = `/api/auth/admin/login`;
export const loginRoute = `${baseUrl}/api/v1/auth/admin/login`;
export const resturantsRoute = `${baseUrl}/api/v1/admin/restaurants`;
export const usersRoutes = `${baseUrl}/api/v1/admin/all_users`;
export const ordersRoute = `${baseUrl}/api/v1/admin/order`;
export const transactionsRoute = `${baseUrl}/api/v1/admin/transactions`;
export const locationsRoute = `${baseUrl}/api/v1/admin/locations`;

// routes on dashboarb
export const restaurantsCountRoute = `
${baseUrl}/api/v1/admin/get_restaurant_count_by_location`;

export const ordersCountRoute = `
${baseUrl}/api/v1/admin/get_order_count_by_location`;

export const usersCountRoute = `
${baseUrl}/api/v1/admin/get_users_count_by_location`;

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

export const blockRestaurantRoute = (restaurantId: string) =>
  `${baseUrl}/api/v1/admin/block_restaurant/${restaurantId}`;

export const unBlockRestaurantRoute = (restaurantId: string) =>
  `${baseUrl}/api/v1/admin/unblock_restaurant/${restaurantId}`;

export const blockUserRoute = (username: string) =>
  `${baseUrl}/api/v1/admin/block_user/${username}`;

export const unBlockUserRoute = (username: string) =>
  `${baseUrl}/api/v1/admin/unblock_user/${username}`;

export const removeOrderItem = (orderId: string, itemId: string) =>
  `${baseUrl}/api/v1/admin/remove_order_item/${orderId}/${itemId}`;

// food by restuarnt
export const foodByRestaurantRoute = `${baseUrl}/api/v1/public/food_by_restaurant`;
export const restaurantFoodsRoute = `${baseUrl}/api/v1/admin/food_by_restaurant`;

export const deactiavteFoodRoute = (foodId: string) =>
  `${baseUrl}/api/v1/admin/deactivate/${foodId}`;

export const actiavteFoodRoute = (foodId: string) =>
  `${baseUrl}/api/v1/admin/activate/${foodId}`;

export const updateFoodPriceRoute = (foodId: string, price: string) =>
  `${baseUrl}/api/v1/admin/update_price/${foodId}/${price}`;

export const updateFoodNameRoute = (food_id: string, name: string) =>
  `${baseUrl}/api/v1/admin/update_name/${food_id}/${name}`;
