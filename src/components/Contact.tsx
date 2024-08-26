import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { CiMail } from "react-icons/ci";
import { toast } from "react-toastify";
import * as yup from "yup";

const resolver = yup.object({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email address is required"),
  name: yup.string().required("Name is required"),
  message: yup.string().required("Message is required"),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(resolver),
  });

  const onSubmit = async (data: any) => {
    const { name, email, message } = data;
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("access_key", "c94cbc31-50be-4087-9078-12c0cc74ea64");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    } else {
      toast.error("Error sending message please try again after some time", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
      console.log("Error", result);
    }
  };

  const contact_info = [
    { logo: <CiMail />, text: "borsedivyata1977@gmail.com" },
  ];
  return (
    <section id="contact" className="px-3 py-10 text-white">
      <div className="mt-8 text-center">
        <h3 className="text-4xl font-semibold">Contact</h3>

        <div className="flex flex-col max-w-5xl gap-6 p-2 mx-auto mt-16 bg-gray-800 rounded-lg md:flex-row md:p-6">
          <form
            className="flex flex-col flex-1 gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input type="text" placeholder="Your Name" {...register("name")} />

            {errors.name ? (
              <div className="font-medium text-red-600 text-start">
                {errors.name.message}{" "}
              </div>
            ) : null}

            <input
              type="Email"
              {...register("email")}
              placeholder="Your Email Address"
            />
            {errors.email ? (
              <div className="font-medium text-red-600 text-start">
                {errors.email.message}{" "}
              </div>
            ) : null}
            <textarea
              className="w-full h-32 border-none rounded-md shadow-md outline-none resize-none focus:ring-0 focus:outline-none"
              placeholder="Your Message"
              {...register("message")}
              rows={10}
            ></textarea>
            {errors.message ? (
              <div className="font-medium text-red-600 text-start">
                {errors.message.message}{" "}
              </div>
            ) : null}
            <button className="btn-primary w-fit">Send Message</button>
          </form>
          <div className="flex flex-col gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row flex-wrap items-center gap-4 text-left"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  {contact.logo}{" "}
                </div>
                <p className="text-sm break-words md:text-base">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
