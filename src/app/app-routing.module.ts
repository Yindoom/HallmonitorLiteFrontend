import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BarChartComponent } from './dashboard/bar-chart/bar-chart.component';
import { AuthGuard } from './guards/auth.guard';
import {TableComponent} from './table/table.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'table', component: TableComponent },
  { path: '', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
