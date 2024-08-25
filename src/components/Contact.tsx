import { CiMail } from "react-icons/ci";

const Contact = () => {
  const contact_info = [
    { logo: <CiMail />, text: "borsedivyata1977@gmail.com" },
  ];
  return (
    <section id="contact" className="px-3 py-10 text-white">
      <div className="mt-8 text-center">
        <h3 className="text-4xl font-semibold">Contact</h3>

        <div className="flex flex-col max-w-5xl gap-6 p-2 mx-auto mt-16 bg-gray-800 rounded-lg md:flex-row md:p-6">
          <form className="flex flex-col flex-1 gap-5">
            <input type="text" placeholder="Your Name" />
            <input type="Email" placeholder="Your Email Address" />
            <textarea
              className="w-full h-32 border-none rounded-md shadow-md outline-none resize-none focus:ring-0 focus:outline-none"
              placeholder="Your Message"
              rows={10}
            ></textarea>
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
