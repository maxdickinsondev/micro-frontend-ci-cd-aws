function Footer() {
  return (
    <div className="px-4 md:px-8 lg:px-10 xl:px-40 flex flex-col items-center justify-center bg-black">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-20 py-20 flex items-center flex-row">
        <div className="w-full space-y-4 flex flex-col text-[#FAFAFA]">
          <h1 className="font-medium text-md">Address</h1>
          <span className="font-regular text-xs">Somewhere on earth</span>
          <span className="font-regular text-xs">ecommerce@test.com</span>
          <span className="font-regular text-xs">+xxx xxxx-xxxx</span>
        </div>

        <div className="w-full space-y-4 flex flex-col text-[#FAFAFA]">
          <h1 className="font-medium text-md">Support</h1>
          <span className="font-regular text-xs">@ecommerce</span>
          <span className="font-regular text-xs">ecommerce@test.com</span>
          <span className="font-regular text-xs">+xxx xxxx-xxxx</span>
        </div>

        <div className="w-full space-y-4 flex flex-col text-[#FAFAFA]">
          <h1 className="font-medium text-md">Account</h1>
          <span className="font-regular text-xs">My Account</span>
          <span className="font-regular text-xs">Cart</span>
          <span className="font-regular text-xs">Wishlist</span>
        </div>

        <div className="w-full space-y-4 flex flex-col text-[#FAFAFA]">
          <h1 className="font-medium text-md">Quick Link</h1>
          <span className="font-regular text-xs">Privacy Policy</span>
          <span className="font-regular text-xs">Terms of Use</span>
          <span className="font-regular text-xs">FAQ</span>
        </div>
      </div>
    </div>
  );
}

export { Footer };
