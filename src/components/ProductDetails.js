import { XMarkIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/20/solid";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ProductDetails({ product, onClose }) {
  const { addToCart } = useContext(CartContext);

  const formsumbit = (e) => {
    e.preventDefault();
  };

  const { id, image, title, price, description, rating } = product;

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
        <div className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
          <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
            <button
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
              <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                <img
                  src={image}
                  alt={""}
                  className="object-cover object-center"
                />
              </div>
              <div className="sm:col-span-8 lg:col-span-7">
                <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                  {title}
                </h2>

                <section className="mt-2">
                  <p className="text-2xl text-gray-900 mb-6">$ {price}</p>
                  <p className="text-x text-gray-500">{description}</p>

                  {/* Reviews */}
                  <div className="mt-6">
                    <h4 className="sr-only">Reviews</h4>
                    <div className="flex items-center">
                      <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            className={classNames(
                              Math.round(product.rating.rate) > rating
                                ? "text-gray-900"
                                : "text-gray-200",
                              "h-5 w-5 flex-shrink-0"
                            )}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <a
                        href="/#"
                        className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        {rating.rate} reviews
                      </a>
                    </div>
                  </div>
                  {/* Reviews */}
                </section>

                {/* Add to bag */}
                <section className="mt-10">
                  <form onSubmit={formsumbit}>
                    <button
                      onClick={() => addToCart(product, id)}
                      type=""
                      className="
                      lg:absolute mb-8 mr-8 w-[-webkit-fill-available] bottom-0
                      mt-6 flex  items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 "
                    >
                      Add to bag
                    </button>
                  </form>
                </section>
                {/* Add to bag */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
