import { Mails, MapPinned, Smartphone } from "lucide-react";

const Contact = () => {
  return (
    <section className="wrapper border-t border-general bg-star">
      <div className="container">
        <div className="mb-6">
          <h2 className="text-4xl font-bold text-sky-400">Contact</h2>
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex flex-1 items-center gap-5">
            <div className="bg-white p-2 rounded-full">
              {/* <Camera color="red" size={48} /> */}
              <MapPinned className="text-black" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Location</h3>
              <span className="text-lg">Bangladesh</span>
            </div>
          </div>
          <div className="flex flex-1 items-center gap-5">
            <div className="bg-white p-2 rounded-full">
              <Mails className="text-black" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Mail</h3>
              <span className="text-lg">sufian4se@gmail.com</span>
            </div>
          </div>
          <div className="flex flex-1 items-center gap-5">
            <div className="bg-white p-2 rounded-full">
              <Smartphone className="text-black" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Whatsapp</h3>
              <span className="text-lg">+880 1717601006</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
