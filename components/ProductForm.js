import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';

export default function ProductForm({
  name = '',
  category = '',
  price = 0,
  desc = '',
  image = undefined,
}) {
  const formik = useFormik({
    initialValues: {
      name,
      category,
      price,
      desc,
      image,
    },

    onSubmit: (values) => {
      axios
        .post('http://localhost:8000/products', values)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    },
  });

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
        <form onSubmit={formik.handleSubmit} className="mt-6">
          <div className="mb-2">
            <label htmlFor="email">Name </label>
            <input
              id="name"
              name="name"
              type="name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Category </label>
            <input
              id="category"
              name="category"
              type="category"
              onChange={formik.handleChange}
              value={formik.values.category}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Price </label>
            <input
              id="price"
              name="price"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.price}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="desc">Desc </label>
            <input
              id="desc"
              name="desc"
              onChange={formik.handleChange}
              value={formik.values.desc}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="image">Image </label>
            <input
              id="image"
              name="image"
              type="file"
              onChange={(e) => e.currentTarget.files[0]}
              value={formik.values.image}
            />
          </div>
          <button type="submit" className="primary-button w-full" >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
