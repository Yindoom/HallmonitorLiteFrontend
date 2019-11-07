import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { SidenavService } from './services/sidenav.service';
import { HttpClientModule } from '@angular/common/http';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ChartsModule } from 'ng2-charts';
import { DashboardViewComponent } from './dashboard/dashboard-view.component';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    NavbarComponent,
    DashboardComponent,
    BarChartComponent,
    DashboardViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatListModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    HttpClientModule,
    ChartsModule,
    PDFExportModule
  ],
  providers: [SidenavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
