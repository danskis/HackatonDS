import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';


@NgModule({
    declarations: [
        AuthComponent
    ],
    imports: [
        SharedModule,
        AuthRoutingModule
    ],
    exports: [
        
    ]
})
export class AuthModule { }