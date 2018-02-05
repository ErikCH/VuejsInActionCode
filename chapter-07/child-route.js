import EditProduct from '@/components/EditProduct'
import Product from '@/components/Product'
…
{
    path: '/product/:id',
    name: 'Id',
    component: Product,
    props: true,
    children: [				
      {
        path: 'edit',
        name: 'Edit',
        component: EditProduct,
        props: true
      }
    ]
},
…
