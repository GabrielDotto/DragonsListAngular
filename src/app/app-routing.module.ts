import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { LoginComponent } from "./components/login/login.component";

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    }
    // {
    //     path: 'home',
    //     component
    // }
]

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(routes)
    ]
})

export class AppRoutingModule { }