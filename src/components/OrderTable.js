import React, { useEffect } from 'react';
import MaterialTable from 'material-table';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchOrders,
  deleteOrders,
  } from '../redux/actions/actions';
import UpdateModal from './updateModal';

export default function OrderTable() {
  const dispatch = useDispatch();
  const orders = useSelector(state => state.orders.orders);
  useEffect(() => {
    dispatch(fetchOrders());
  },[dispatch])
  // eslint-disable-next-line no-unused-vars
  const [state, setState] = React.useState({
    columns: [
      { title: 'Customer Name', field: 'customerName' },
      { title: 'Flavour', field: 'flavour'},
      { title: 'Scoops', field: 'scoops', type: 'numeric' },
      { title: 'Price Per Scoop', field: 'pricePerScoop', type: 'currency' },
      { title: 'Total Price', field: 'totalPrice', type: 'currency'},
      { title: 'Created At', field: 'createdAt', type: 'datetime', editable: 'never'},
      { title: 'Updated At', field: 'updatedAt', type: 'datetime', editable: 'never'},
      { title: 'Updates', field: 'action', render: rowData => <UpdateModal rowData={rowData}/>},
    ],

  });

  return (
    <MaterialTable
      title="IceCream Orders"
      columns={state.columns}
      data={orders}
      options={{paging: false, search: false}}
      editable={{
        onRowDelete: async (oldData) => oldData ? await dispatch(deleteOrders(oldData._id)) : null,
      }}
    />
  );
}
