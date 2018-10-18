import { NgModule } from '@angular/core';

import { JhipsterGatewaySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JhipsterGatewaySharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JhipsterGatewaySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipsterGatewaySharedCommonModule {}
