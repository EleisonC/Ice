import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import { fetchProducts, updateOrders } from '../redux/actions/actions';


export default function UpdateModal(props) {
  const [name, setName] = useState(props.rowData.customerName)
  const [scoops, setScoop] = useState(props.rowData.scoops)
  const [flavour, setFlavour] = useState(props.rowData.flavour)
  const dispatch = useDispatch();
  const products = useSelector(state => state.orders.products);
  const { register, handleSubmit} = useForm();
  useEffect(() => {
    dispatch(fetchProducts());
  },[dispatch])
  const onSubmit = data => {
    dispatch(updateOrders(props.rowData._id, data))
  };
  console.log(props.rowData)
  return (
    <div>
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#updateModal">
        UPDATE ORDER
      </button>
      <div class="modal fade" id="updateModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Update Order</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form class="text-center border border-light p-5" onSubmit={handleSubmit(onSubmit)}>
                  <input name="customerName" type="text" id="defaultContactFormName" value={name} onChange={e => setName(e.target.value)} ref={register} class="form-control mb-4" placeholder="Name"/>
                  <select class="browser-default custom-select mb-4" name="flavour" ref={register}>
                    <option value={flavour}>{flavour}</option>
                      {
                        (products.length !== 0) ?
                          products.map((product) => <option value={product.name} key={product._id}>{`${product.name} - $${product.pricePerScoop} per scoop`}</option>) : <option value="1" selected>No Flavours</option>
                      }
                  </select>
                  <input type="text" id="defaultContactFormEmail" name="scoops" class="form-control mb-4" ref={register} onChange={e => setScoop(e.target.value)} placeholder="No Of Scoops" value={scoops}/>
                  <button class="btn btn-info btn-block" type="submit">Update Order</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
