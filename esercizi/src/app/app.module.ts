import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//componenti
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { OtherComponent } from './other/other.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { DentroHomeComponent } from './home/dentro-home/dentro-home.component';
import { TabellaComponent } from './service/tabella/tabella.component';

//moduli material
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DialogComponent } from './other/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ServiceComponent,
    OtherComponent,
    AboutComponent,
    HomeComponent,
    DentroHomeComponent,
    DialogComponent,
    TabellaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    AppRoutingModule,
    MatGridListModule,
    MatChipsModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
