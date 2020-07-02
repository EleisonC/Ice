import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import { fetchProducts, createOrder } from '../redux/actions/actions';


export default function SimpleModal(props) {
  const dispatch = useDispatch();
  const products = useSelector(state => state.orders.products);
  const { register, handleSubmit} = useForm();
  useEffect(() => {
    dispatch(fetchProducts());
  },[dispatch])
  const onSubmit = data => {
    dispatch(createOrder(data))
  };

  return (
    <div>
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#basicExampleModal">
        ADD NEW ORDER
      </button>
      <div class="modal fade" id="basicExampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Create Order</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form class="text-center border border-light p-5" onSubmit={handleSubmit(onSubmit)}>
                  <input name="customerName" type="text" id="defaultContactFormName"  ref={register} class="form-control mb-4" placeholder="Name"/>
                  <select class="browser-default custom-select mb-4" name="flavour" ref={register}>
                      {
                        (products.length !== 0) ?
                          products.map((product) => <option value={product.name} key={product._id}>{`${product.name} - $${product.pricePerScoop} per scoop`}</option>) : <option value="1" selected>No Flavours</option>
                      }
                  </select>
                  <input type="text" id="defaultContactFormEmail" name="scoops" class="form-control mb-4" ref={register} placeholder="No Of Scoops"/>
                  <button class="btn btn-info btn-block" type="submit">Create Order</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
