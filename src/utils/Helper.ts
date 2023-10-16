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
