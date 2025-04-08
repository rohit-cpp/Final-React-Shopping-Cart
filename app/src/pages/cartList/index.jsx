import React, { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import { Navigate, useNavigate } from "react-router-dom";
import CartTile from "../../components/cartTile";

const CartListPage = () => {
  const { cartItems } = useContext(ShoppingCartContext);
  const navigate = useNavigate();
  return (
    <section className="min-h-screen bg-[#EBE8DB] ">
      <div>
        <section className="py-8 antialiased md:py-8">
          <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <h2 className="text-xl font-semibold text-gray-900 text-center pb-4 dark:text-white sm:text-6xl p-4 border rounded-2xl bg-[#854836]">
              Shopping Cart
            </h2>
            <div className="flex justify-between">
              <div>
                {cartItems?.length ? (
                  cartItems.map((singleCartItem) => (
                    <CartTile singleCartItem={singleCartItem} />
                  ))
                ) : (
                  <h1 className="text-5xl text-center p-6">
                    No Items Present in Cart! Please add some items
                  </h1>
                )}
              </div>

              <div className="m-8 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                  <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                    <p className="text-xl font-semibold text-gray-900 dark:text-white">
                      Order summary
                    </p>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <dl className="flex items-center justify-between gap-4">
                          <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                            Original price
                          </dt>
                          <dd className="text-base font-medium text-gray-900 dark:text-white">
                            $7,592.00
                          </dd>
                        </dl>

                        <dl className="flex items-center justify-between gap-4">
                          <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                            Savings
                          </dt>
                          <dd className="text-base font-medium text-green-600">
                            -$299.00
                          </dd>
                        </dl>

                        <dl className="flex items-center justify-between gap-4">
                          <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                            Store Pickup
                          </dt>
                          <dd className="text-base font-medium text-gray-900 dark:text-white">
                            $99
                          </dd>
                        </dl>

                        <dl className="flex items-center justify-between gap-4">
                          <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                            Tax
                          </dt>
                          <dd className="text-base font-medium text-gray-900 dark:text-white">
                            $799
                          </dd>
                        </dl>
                      </div>

                      <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                        <dt className="text-base font-bold text-gray-900 dark:text-white">
                          Total
                        </dt>
                        <dd className="text-base font-bold text-gray-900 dark:text-white">
                          $8,191.00
                        </dd>
                      </dl>
                    </div>

                    <button
                      className="flex w-full text-white justify-center
                    bg-gradient-to-r cursor-pointer from-blue-500 via-blue-600
                    to-blue-700 hover:bg-gradient-to-br focus:ring-4
                    focus:outline-none focus:ring-blue-300
                    dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50
                    dark:shadow-lg dark:shadow-blue-800/80 font-medium
                    rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      Proceed to Checkout
                    </button>

                    <div className="flex items-center justify-center gap-2">
                      <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        {" "}
                        or{" "}
                      </span>
                      <a
                        onClick={() => {
                          navigate("/products");
                        }}
                        title=""
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500 cursor-pointer"
                      >
                        Continue Shopping
                        <svg
                          className="h-5 w-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 12H5m14 0-4 4m4-4-4-4"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>

                  <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                    <form className="space-y-4">
                      <div>
                        <label
                          for="voucher"
                          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                        >
                          {" "}
                          Do you have a voucher or gift card?{" "}
                        </label>
                        <input
                          type="text"
                          id="voucher"
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                          placeholder=""
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                        Apply Code
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default CartListPage;
