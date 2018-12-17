import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MyBlogProductModule } from './product/product.module';
import { MyBlogProductCategoryModule } from './product-category/product-category.module';
import { MyBlogCustomerModule } from './customer/customer.module';
import { MyBlogProductOrderModule } from './product-order/product-order.module';
import { MyBlogOrderItemModule } from './order-item/order-item.module';
import { MyBlogInvoiceModule } from './invoice/invoice.module';
import { MyBlogShipmentModule } from './shipment/shipment.module';
import { MyBlogNotificationModule } from './notification/notification.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        MyBlogProductModule,
        MyBlogProductCategoryModule,
        MyBlogCustomerModule,
        MyBlogProductOrderModule,
        MyBlogOrderItemModule,
        MyBlogInvoiceModule,
        MyBlogShipmentModule,
        MyBlogNotificationModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyBlogEntityModule {}
