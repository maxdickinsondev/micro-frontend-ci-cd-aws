// @ts-ignore
import { Box, TextField, Button, Textarea } from "@ecommerce/util-ui";

export default function Root(props) {
  return (
    <div className="px-4 md:px-8 lg:px-10 xl:px-40 my-10">
      <Box>
        <div className="space-y-8">
          <div className="flex space-y-4 w-full flex-col items-center">
            <TextField label="Name" placeholder="Your name" />
            <TextField label="E-mail" placeholder="Your email" />
            <TextField label="Phone" placeholder="Your phone" />
          </div>
          <Textarea label="Message" placeholder="Your message" />
          <div className="flex justify-end">
            <Button>Send Message</Button>
          </div>
        </div>
      </Box>
    </div>
  );
}
