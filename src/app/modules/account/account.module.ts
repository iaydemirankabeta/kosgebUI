import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { OverviewComponent } from './overview/overview.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileDetailsComponent } from './settings/forms/profile-details/profile-details.component';
import { ConnectedAccountsComponent } from './settings/forms/connected-accounts/connected-accounts.component';
import { DeactivateAccountComponent } from './settings/forms/deactivate-account/deactivate-account.component';
import { EmailPreferencesComponent } from './settings/forms/email-preferences/email-preferences.component';
import { NotificationsComponent } from './settings/forms/notifications/notifications.component';
import { SignInMethodComponent } from './settings/forms/sign-in-method/sign-in-method.component';
import { DropdownMenusModule, WidgetsModule } from '../../_metronic/partials';
import {SharedModule} from "../../_metronic/shared/shared.module";
import { ProfileComponent } from './profile/profile.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ModalsModule } from "../../_metronic/partials/layout/modals/modals.module";
import { CompanyAdressesComponent } from './company-adresses/company-adresses.component';

@NgModule({
    declarations: [
        AccountComponent,
        OverviewComponent,
        SettingsComponent,
        ProfileDetailsComponent,
        ConnectedAccountsComponent,
        DeactivateAccountComponent,
        EmailPreferencesComponent,
        NotificationsComponent,
        SignInMethodComponent,
        ProfileComponent,
        UserManagementComponent,
        CompanyAdressesComponent,
    ],
    imports: [
        CommonModule,
        AccountRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatTabsModule,
        MatTableModule,
        ReactiveFormsModule,
        DropdownMenusModule,
        WidgetsModule,
        SharedModule,
        ModalsModule
    ]
})
export class AccountModule {}
