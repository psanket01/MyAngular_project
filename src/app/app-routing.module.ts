import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { SendmsgComponent } from './pages/contact-us/sendmsg/sendmsg.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"about", component:AboutComponent},
  {path:"contactUs", component:ContactUsComponent},
  {path:"sendmsg", component:SendmsgComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
