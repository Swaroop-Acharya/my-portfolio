import React from "react";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import SendBtn from "../SendBtn";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import axios from "axios";
const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const { toast } = useToast();
  const [open, setOpen] = React.useState(false);

  const handleSubmit = async (e) => {
    wait().then(() => setOpen(false));
    e.preventDefault();
    const publicId = import.meta.env.VITE_PUBLIC_KEY;
    const templateId = import.meta.env.VITE_TEMPLATE_KEY;
    const serviceId = import.meta.env.VITE_SERVICE_KEY;

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicId,
      template_params: {
        from_name: email,
        to_name: name,
        message: message,
      },
    };

    try {
      const res = await axios.post(import.meta.env.VITE_EMAIL_API, data);
      toast({
        title: "Message sent",
        description: "Thank you for reaching me out",
      });
      console.log(res.data);
      setName("");
      setMessage("");
      setEmail("");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      console.log(error);
    }
  };

  return (
    <section className="flex flex-col justify-center items-center gap-1">
      <div className="flex flex-col justify-center items-center gap-1  w-4/5">
        <div className="flex justify-center items-center w-full gap-8">
          <div className="text-white text-3xl md:text-5xl font-bold">Contact</div>
          <div className="h-px w-full border  border-slate-400"></div>
        </div>
        <div className="text-white flex mt-5 justify-center flex-col items-center gap-4">
          <p className="max-w-[60ch] text-center font-light">
            Whether you are starting a project, have business inquiries or just
            want to say hi, my inbox is always open so feel free to reach out
            and I will get back to you as soon as possible.
          </p>
          <div className="flex justify-center items-center gap-4">
            <a
              href="https://github.com/Swaroop-Acharya"
              className="block"
              target="__blank"
            >
              <GitHub sx={{ fontSize: 35 }} />
            </a>
            <a
              href="https://www.linkedin.com/in/swaroop-acharya-55b8b5223/"
              target="__blank"
              className="block"
            >
              <LinkedIn sx={{ fontSize: 38 }} />
            </a>
            <a href="https://twitter.com/swaroopcodes" target="__blank">
              <img src="/X.png" alt="twitter" className="w-7  h-7" />
            </a>
            <a
              href="mailto:swaroopa802@gmail.com"
              className="block"
              target="__blank"
            >
              <Email sx={{ fontSize: 38 }} />
            </a>
          </div>
          <div>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="bg-white hover:bg-slate-300">
                  <svg
                    class="w-3 h-3 text-black me-2 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                  <span className="text-black w-full">

                  Send message
                  </span>
                </Button>
              </DialogTrigger>
              <DialogContent className="text-white sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle >Send a mesasge</DialogTitle>
                  <DialogDescription >
                    Hit me up for collaboration
                  </DialogDescription>
                </DialogHeader>
                <CardContent>
                  <form onSubmit={handleSubmit}>
                    <div className="grid w-full items-center gap-4">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Name</Label>
                        <Input
                      
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="John Wick"
                          required
                        />
                      </div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="johnwick@gmail.com"
                        required
                      />
                      <div className="grid w-full gap-2">
                        <Label htmlFor="name">Description</Label>
                        <Textarea
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Type your message here."
                          required
                        />
                        <Button className="text-black bg-white hover:bg-slate-200 ">Send message</Button>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
}
