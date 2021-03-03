import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

// Angular Material
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';

import { TranslateModule } from '@ngx-translate/core';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { LogisticTransportationComponent } from './main/logistic-transportation/logistic-transportation.component';


import { VehicleTrackingSystemComponent } from './main/vehicle-tracking-system/vehicle-tracking-system.component';
import { AppRoutingModule } from './main/app-routing.module';
import { AgmCoreModule } from '@agm/core';

import { SecurityAlarmsPanicButtonsComponent } from './main/security-alarms-panic-buttons/security-alarms-panic-buttons.component';
import { EmergencyEmployeeNumberComponent } from './main/emergency-employee-number/emergency-employee-number.component';
import { DialogVehicleTrackingDetailsComponent } from './main/vehicle-tracking-system/dialog-vehicle-tracking-details/dialog-vehicle-tracking-details.component';
import { DatePipe } from '@angular/common';
import { DialogVehicleTrackingAddGeofencingComponent } from './main/vehicle-tracking-system/dialog-vehicle-tracking-add-geofencing/dialog-vehicle-tracking-add-geofencing.component';
import { DialogVehicleTrackingAddGeoConfirmComponent } from './main/vehicle-tracking-system/dialog-vehicle-tracking-add-geo-confirm/dialog-vehicle-tracking-add-geo-confirm.component';
import { GeofilterPipe } from './main/vehicle-tracking-system/dialog-vehicle-tracking-add-geofencing/geofilter.pipe';
import { IncidentsManagementAlertsComponent } from './main/incidents-management-alerts/incidents-management-alerts.component';
import { MatProgressBar, MatProgressBarModule } from '@angular/material/progress-bar';
import { DialogReportsComponent } from './main/incidents-management-alerts/dialog-reports/dialog-reports.component';


//Gráficos

import { ChartsModule } from 'ng2-charts';
import { DialogMessageComponent } from './main/incidents-management-alerts/dialog-message/dialog-message.component';


const appRoutes: Routes = [
    {
        path      : '**',
        redirectTo: 'logistic-transportation'
    }
];

@NgModule({

    providers: [
        DatePipe
    ],

    declarations: [
        AppComponent,
        LogisticTransportationComponent,
        VehicleTrackingSystemComponent,
        SecurityAlarmsPanicButtonsComponent,
        EmergencyEmployeeNumberComponent,
        DialogVehicleTrackingDetailsComponent,
        DialogVehicleTrackingAddGeofencingComponent,
        DialogVehicleTrackingAddGeoConfirmComponent,
        GeofilterPipe,
        IncidentsManagementAlertsComponent,
        DialogReportsComponent,
        DialogMessageComponent,
    ],

    entryComponents: [
        DialogReportsComponent,
        DialogMessageComponent,
      ],
    imports     : [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBt8_sZvU3q9XW_kM6dfTq8fGaERwByfH0',
            libraries: ['drawing']
          }),
        RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),

        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,
        MatTableModule,
        MatPaginatorModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatTabsModule,
        MatCardModule,
        MatDialogModule,
        MatGridListModule,
        MatListModule,
        MatInputModule,
        MatInputModule,
        MatProgressBarModule,
        
        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,

        //Gráficos
        ChartsModule
       
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
