import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './component/nav/nav.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './page/home/home.component';
import { AboutusComponent } from './page/aboutus/aboutus.component';
import { ContactComponent } from './page/contact/contact.component';
import { ServiceComponent } from './page/service/service.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './page/detail/detail.component';
import { NavcomponentComponent } from './component/navcomponent/navcomponent.component';
import { SwiperModule } from 'swiper/angular';
import { NgCircleProgressModule } from 'ng-circle-progress';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    ContactComponent,
    ServiceComponent,
    DetailComponent,
    NavcomponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    SwiperModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      animationDuration: 300,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}
