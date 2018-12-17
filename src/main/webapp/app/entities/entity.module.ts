import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MyBlogBlogModule } from './blog/blog.module';
import { MyBlogEntryModule } from './entry/entry.module';
import { MyBlogTagModule } from './tag/tag.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        MyBlogBlogModule,
        MyBlogEntryModule,
        MyBlogTagModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyBlogEntityModule {}
