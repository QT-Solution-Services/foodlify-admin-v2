// export const formatCurrency = (value: any) =>
//   new Intl.NumberFormat("en", {
//     style: "currency",
//     currency: "NGN",
//   }).format(value);
export const formatCurrency = (value: any) => {
  return `₦${new Intl.NumberFormat("en-NG").format(value)}`;
};
export function formatResturantData(data: any) {
  const {
    name,
    address,
    logo,
    website,
    status,
    location,
    restaurant_id: id,
    open_time,
    close_time,
    restaurant_person,
  } = data;
  const { first_name, phone_number: number } = restaurant_person?.[0] ?? {
    first_name: "",
    phone_number: "",
  };

  const resturantdata = {
    name,
    address,
    location,
    logo,
    website,
    status,
    id,
    open_time,
    close_time,
    first_name,
    number,
  };
  return resturantdata;
}

export function formatOrdersData(order: any) {
  const {
    status,
    items: itemsCount,
    order_at: orderTime,
    order_id: orderId,
    restaurants,
  } = order;

  const formatedOrder = {
    restaurants,
    itemsCount,
    status,
    orderId,
    orderTime,
  };
  return formatedOrder;
}

export function formatDate(inputDate: any) {
  const dateObj = new Date(inputDate);
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
  };
  const formattedTime = dateObj.toLocaleTimeString("en-US", timeOptions);

  const dateOptions: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const formattedDate = dateObj.toLocaleDateString("en-US", dateOptions);

  const formattedDateTime = `${formattedTime} | ${formattedDate}`;
  return formattedDateTime;
}
