import { AdminComponent } from "./admin.component";
import { OrderAdminComponent } from "./order/order.admin.component";
import { DetailOrderAdminComponent } from "./detail-order/detail.order.admin.component";
import { Route, Router,Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DetailProductAdminComponent } from "./detail-product/detail.product.admin.component";
import { ProductAdminComponent } from "./product/product.admin.component";
import { NewProductAdminComponent } from "./new-product/new.product.admin.component";
import { CategoryAdminComponent } from "./category/category.admin.component";
import { UserAdminComponent } from "./user/user.admin.component";
import { DetailUserAdminComponent } from "./details-user/detail.user.admin.component";

const routes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            {
                path: 'orders',
                component: OrderAdminComponent
            },
            {
                path: 'orders/:id',
                component: DetailOrderAdminComponent
            },
            {
                path: 'products',
                component: ProductAdminComponent
            },
            {

                path: 'products/new',
                component: NewProductAdminComponent
            },
            {
                path: 'products/:id',
                component: DetailProductAdminComponent
            },
            {
                path: 'categories',
                component: CategoryAdminComponent
            },
            {
                path: 'users',
                component: UserAdminComponent
            },
            {
                path: 'users/:id',
                component: DetailUserAdminComponent 
            },
        ]
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
