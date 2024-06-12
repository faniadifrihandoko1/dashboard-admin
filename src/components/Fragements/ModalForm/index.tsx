import { useFormik } from "formik";
import { uid } from "uid";
import Button from "../../Elements/Button";
import InputForm from "../../Elements/Input";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ModalForm({ setOpen, open, data, setData }: any) {
  const formik = useFormik({
    initialValues: {
      name: "",
      quantity: "",
      progres: "",
      date: "",
    },

    onSubmit: (values) => {
      const datas = [...data];
      datas.push({ id: uid(), ...values });
      setData(datas);
      setOpen(false);
      formik.resetForm();
    },
  });
  return (
    <div
      className={`${
        open ? "visible" : "invisible"
      } fixed  z-50 p-4  inset-0 flex justify-center items-center w-full bg-opacity-30 backdrop-blur-sm  h-[calc(100%-1rem)] max-h-full  right-0 md:right-32 `}
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* <!-- Modal header --> */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Create New Product
            </h3>
            <Button
              onClick={() => setOpen(false)}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="crud-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </Button>
          </div>
          {/* <!-- Modal body --> */}
          <form onSubmit={formik.handleSubmit} className="p-4 md:p-5">
            <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2">
                <InputForm
                  classNameInput="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  name="name"
                  placeholder={"name product"}
                  onChange={formik.handleChange}
                  required
                  value={formik.values.name}
                  type="text"
                  label="name"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <InputForm
                  classNameInput="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder={"0"}
                  onChange={formik.handleChange}
                  required
                  value={formik.values.quantity}
                  type="number"
                  label="Quantity"
                  name="quantity"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <InputForm
                  classNameInput="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder={"1-100"}
                  onChange={formik.handleChange}
                  required
                  value={formik.values.progres}
                  type="number"
                  label="Progres"
                  name="progres"
                />
              </div>

              <div className="col-span-2">
                <InputForm
                  classNameInput="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder={"date"}
                  onChange={formik.handleChange}
                  required
                  value={formik.values.date}
                  type="date"
                  label="Date"
                  name="date"
                />
              </div>
            </div>
            <Button
              type="submit"
              className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="me-1 -ms-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"></path>
              </svg>
              Add new product
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
