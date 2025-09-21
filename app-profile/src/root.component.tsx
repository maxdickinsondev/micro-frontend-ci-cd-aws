// @ts-ignore
import { Box, TextField, Button } from "@ecommerce/util-ui";

export default function Root(props) {
  return (
    <div className="px-4 md:px-8 lg:px-10 xl:px-40 my-10">
      <Box>
        <div className="space-y-8">
          <div className="flex flex-col space-y-4 w-full items-center">
            <TextField label="First name" placeholder="John" />
            <TextField label="Last name" placeholder="Doe" />
            <TextField label="E-mail" placeholder="johndoe@gmail.com" />
            <TextField label="Phone" placeholder="(xx) x xxxx-xxxx" />
          </div>
          <div className="flex justify-end">
            <Button>Save changes</Button>
          </div>
        </div>
      </Box>
    </div>
  );
}
