import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './shared/services/auth.guard';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { HomeComponent } from './view/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { ChangePasswordComponent } from './view/dashboard/change-password/change-password.component';
import { DeviceManagementComponent } from './view/dashboard/device-management/device-management.component';
import { AddEditDeviceManagementComponent } from './view/dashboard/device-management/add-edit-device-management/add-edit-device-management.component';
import { RoomComponent } from './view/dashboard/room/room.component';
import { AddEditAutomationComponent } from './view/dashboard/automation/add-edit-automation/add-edit-automation.component';
import { AddEditRoomComponent } from './view/dashboard/room/add-edit-room/add-edit-room.component';
import { AutomationComponent } from './view/dashboard/automation/automation.component';
import { EnergyComponent } from './view/dashboard/energy/energy.component';
import { AddEditEnergyComponent } from './view/dashboard/energy/add-edit-energy/add-edit-energy.component';
import { AddEditDeviceMaintainanceComponent } from './view/dashboard/device-maintenance/add-edit-device-maintainance/add-edit-device-maintainance.component';
import { DeviceMaintenanceComponent } from './view/dashboard/device-maintenance/device-maintenance.component';
import { SecuritySurveillanceComponent } from './view/dashboard/security-surveillance/security-surveillance.component';
import { VoiceMobileComponent } from './view/dashboard/voice-mobile/voice-mobile.component';
import { UserPreferrenceComponent } from './view/dashboard/user-preferrence/user-preferrence.component';
import { NotificationsComponent } from './view/dashboard/notifications/notifications.component';
import { ReportingsComponent } from './view/dashboard/reportings/reportings.component';
import { AccessibilityComponent } from './view/dashboard/accessibility/accessibility.component';

export const routes: Routes = [
    { path: 'auth/login', component: LoginComponent, canActivate:[AuthGuard] },
    { path: 'auth/register', component: RegisterComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
        children: [
            { path: '', component: HomeComponent },  // Default dashboard home
            { path: 'device-management', component: DeviceManagementComponent },
            { path: 'add-edit-device', component: AddEditDeviceManagementComponent },
            { path: 'room-management', component: RoomComponent },
            { path: 'add-edit-room', component: AddEditRoomComponent },
            { path: 'automation-management', component: AutomationComponent },
            { path: 'add-edit-automation', component: AddEditAutomationComponent },
            { path: 'energy-management', component: EnergyComponent },
            { path: 'add-edit-energy', component: AddEditEnergyComponent },
            { path: 'device-maintainance', component:  DeviceMaintenanceComponent},
            { path: 'add-edit-device-maintainance', component: AddEditDeviceMaintainanceComponent },
            { path: 'security', component: SecuritySurveillanceComponent},
            { path: 'voice-mobile', component: VoiceMobileComponent},
            { path: 'user-preferences', component: UserPreferrenceComponent},
            { path: 'notification', component: NotificationsComponent},
            { path: 'reports', component: ReportingsComponent},
            { path: 'accessibility', component: AccessibilityComponent},
            { path: 'change-password', component: ChangePasswordComponent },
          ]
     },
    { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  ];
  
