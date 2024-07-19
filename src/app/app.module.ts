// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component'; // Thêm đường dẫn đến component bạn tạo

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent, // Khai báo component mới
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
