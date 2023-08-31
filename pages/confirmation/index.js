import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useRouter } from "next/router";
import BlueButton from "../../components/BlueButton";

const Confirmation = () => {
  const router = useRouter();

  return (
    <section className="px-4 py-7 md:px-28">
      <div className="flex flex-col min-h-[20rem] justify-center items-center">
        <CheckCircleIcon color="success" style={{ fontSize: "6rem" }} />
        <h1 className="text-xl sm:text-2xl font-semibold mt-2">
          Your order is confirmed!
        </h1>
        <p className="mt-2 mb-5 text-center">
          Thank you for shopping with us! Your order will be sent to you soon.
        </p>
        <BlueButton
          title={"Home"}
          addedClassName={"sm:w-1/5"}
          onClick={() => {
            router.push("/");
            window.dispatchEvent(new Event("cart"));
          }}
        />
      </div>
    </section>
  );
};

export default Confirmation;
