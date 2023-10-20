// import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Button, Table } from "reactstrap";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RiEdit2Line } from "react-icons/ri";
import { deleteProduct } from "../../../../Redux/Features/ProductSlice/ProductSlice";

function ProductTable({ setProductData }) {
  const { product, err } = useSelector((state) => {
    return state?.productReducer;
  });
  const dispatch = useDispatch();

  const deleteHandler = (data, index) => {
    dispatch(deleteProduct({ id: data?._id, index }));
  };

  const updateHandler = (id, index) => {
    dispatch();
  };
  if (err.lenght > 0) {
    toast.error(err);
  }

  return (
    <>
      <div>
        <Table bordered>
          <thead>
            <tr>
              <th>Sr</th>
              <th>Image</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {product?.map?.((e, i) => {
              return (
                <tr key={e?.id}>
                  <th scope="row">{i + 1}</th>
                  <td>
                    <div className="grid place-content-center">
                      <img
                        src={e?.thumbnail}
                        alt=""
                        className="max-w-xs max-h-52"
                      />
                    </div>
                  </td>
                  <td>{e?.title}</td>
                  <td className="truncate max-w-lg">{e?.description}</td>
                  <td>{e?.price}</td>
                  <td>
                    <div className="flex gap-2 items-center">
                      <Button
                        color="danger"
                        onClick={() => deleteHandler(e, i)}
                      >
                        <RiDeleteBin6Line className="text-xl" />
                      </Button>
                      <Button color="info" onClick={() => updateHandler(e, i)}>
                        <RiEdit2Line className="text-xl" />
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default ProductTable;
