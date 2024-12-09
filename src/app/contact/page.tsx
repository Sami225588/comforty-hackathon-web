import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-center text-2xl font-bold mb-4">Get In Touch With Us</h2>
      <p className="text-center text-gray-600 mb-8">
        For More Information About Our Product & Services, Please Feel Free To Drop Us An Email. 
        Our Staff Always Be There To Help You Out. Do Not Hesitate!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Address</h3>
            <p>236 5th SE Avenue, New York NY10000, United States</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Phone</h3>
            <p>Mobile: (+84) 546-6789</p>
            <p>Hotline: (+84) 456-6789</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Working Time</h3>
            <p>Monday-Friday: 9:00 - 22:00</p>
            <p>Saturday-Sunday: 9:00 - 21:00</p>
          </div>
        </div>
        <form className="space-y-4">
          <Input type="text" placeholder="Your name" className="w-full" />
          <Input type="email" placeholder="Email address" className="w-full" />
          <Input type="text" placeholder="Subject (This is optional)" className="w-full" />
          <textarea
            placeholder="Message"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">Submit</Button>
        </form>
      </div>
      <div className="flex justify-around mt-12">
        <div className="text-center">
          <span role="img" aria-label="quality" className="text-2xl">🏆</span>
          <p className="text-sm">High Quality</p>
          <p className="text-xs text-gray-600">crafted from top materials</p>
        </div>
        <div className="text-center">
          <span role="img" aria-label="warranty" className="text-2xl">🛡️</span>
          <p className="text-sm">Warranty Protection</p>
          <p className="text-xs text-gray-600">Over 2 years</p>
        </div>
        <div className="text-center">
          <span role="img" aria-label="support" className="text-2xl">⏰</span>
          <p className="text-sm">24/7 Support</p>
          <p className="text-xs text-gray-600">Dedicated support</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
