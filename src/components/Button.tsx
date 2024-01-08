import AppLayout from "./layouts/AppLayout";

export default function Button({
  children,
  className = "",
  disabled = false,
  type,
  loading = false,
  ...props
}: any) {
  const base =
    "min-h-8 rounded-lg  inline-block uppercase tracking-wide disabled:bg-grey disabled:text-black/70 ";
  const styles: any = {
    primary: base + " font-semibold hover:bg-primary/90",
    pMedium:
      base + " px-8 py-3 text-sm font-medium  bg-primary hover:bg-primary/90",
    small: base + " px-2.5 py-1  text-sm",
    secondaryGreen:
      "inline-block text-sm rounded-full border-2 border-green-300 font-semibold uppercase tracking-wide text-green-400 transition-colors duration-300 hover:bg-green-300 hover:text-green-800 focus:bg-green-300 focus:text-green-800 focus:outline-none focus:ring focus:ring-green-200 focus:ring-offset-2 disabled:cursor-not-allowed px-2 py-1 ",
    secondaryRed:
      "inline-block text-sm rounded-full border-2 border-red-300 font-semibold uppercase tracking-wide text-red-400 transition-colors duration-300 hover:bg-red-300 hover:text-red-800 focus:bg-red-300 focus:text-red-800 focus:outline-none focus:ring focus:ring-red-200 focus:ring-offset-2 disabled:cursor-not-allowed px-2 py-1 ",
  };

  return (
    <button
      {...props}
      type={props.actionType}
      className={`${styles[type]} ${className}  ${
        loading ? "cursor-not-allowed opacity-50" : ""
      }  `}
    >
      {loading ? <SpinnerMini /> : <>{children}</>}
    </button>
  );
}

export function OutlineButton({
  children,
  className = "",
  loading = false,
  ...props
}: any) {
  return (
    <button {...props} className={`${className} h-10  border px-5 `}>
      {loading ? <SpinnerMini /> : <>{children}</>}
    </button>
  );
}

export function Spinner({ borderColor = "border-white" }) {
  return (
    <AppLayout>
      <div className="mx-auto h-6 w-6 animate-spin rounded-full border-2 border-t-0 border-primary p-8"></div>
    </AppLayout>
  );
}

export function SpinnerMini({ borderColor = "border-white" }) {
  return (
    <div
      className={`mx-auto h-4 w-4 animate-spin rounded-full border-2 border-t-0 ${borderColor} p-3`}
    ></div>
  );
}
