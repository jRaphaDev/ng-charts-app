import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
{ path: '', redirectTo: '/home', pathMatch:'full'},
{ path: 'home', component: HomeComponent },
{ path: 'pie-chart', component: PieChartComponent},
];
export const routingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);