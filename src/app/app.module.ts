import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { WatchesComponent } from './watches/watches.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { KComponent } from './watches/k/k.component';
import { TComponent } from './watches/t/t.component';
import { AComponent } from './watches/a/a.component';
import { StrapsComponent } from './accessories/straps/straps.component';
import { UmbrellasComponent } from './accessories/umbrellas/umbrellas.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'watches',
    component: WatchesComponent,
    children: [
      { path: 'a', component: AComponent },
      { path: 't', component: TComponent },
      { path: 'k', component: KComponent }
    ]
  },
  {
    path: 'accessories',
    component: AccessoriesComponent,
    children: [
      { path: 'straps', component: StrapsComponent },
      { path: 'umbrellas', component: UmbrellasComponent }
    ]
  },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    WatchesComponent,
    AccessoriesComponent,
    NotfoundComponent,
    KComponent,
    TComponent,
    AComponent,
    StrapsComponent,
    UmbrellasComponent
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
