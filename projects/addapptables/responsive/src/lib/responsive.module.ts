import { NgModule } from '@angular/core';
import { ReduxRegisterModule } from '@addapptables/ngrx-actions';
import { ResponsiveStore } from './stores/responsive.store';

@NgModule({
    imports: [
        ReduxRegisterModule.forFeature('responsive', { responsive: ResponsiveStore }),
    ]
})
export class ResponsiveModule { }
