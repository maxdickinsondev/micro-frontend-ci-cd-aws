// @ts-ignore
import { Button } from "@ecommerce/util-ui";

// @ts-ignore
import { useCartStore } from "@ecommerce/util-state";
import { useCallback } from "react";
import { navigateToUrl } from "single-spa";

export default function Root(props) {
  const products = useCartStore((state) => state.products);

  const navigateToHome = useCallback(() => navigateToUrl("/"), []);

  return (
    <div className="px-4 md:px-8 lg:px-10 xl:px-40">
      {products.length > 0 ? (
        <div className=" py-20 w-full flex items-center justify-center">
          <table className="w-full">
            <thead>
              <tr className="flex flex-row items-center justify-between shadow rounded px-10 py-6">
                <th>Product</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr
                  key={index}
                  className="flex flex-row items-center justify-between shadow rounded px-10 py-6"
                >
                  <td className="flex flex-row items-center gap-5">
                    <img src={product.image} className="w-10 h-8" />
                    <span className="text-sm max-w-max text-ellipsis overflow-hidden">
                      {product.title}
                    </span>
                  </td>
                  <td className="text-left">{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <>
          <div className="py-40 flex flex-col items-center text-center space-y-10">
            <h1 className="text-5xl text-black">Your cart is empty!</h1>
            <span>Please, back to home and add some products.</span>
            <Button onClick={navigateToHome}>Go to Home Page</Button>
          </div>
        </>
      )}
    </div>
  );
}
