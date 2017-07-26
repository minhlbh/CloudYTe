import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavigationComponent } from './components/layout/navigation/navigation.component';
import { LeftNavigationComponent } from './components/layout/left-nav/left-navigation.component';
import { TraCuuBenhComponent } from './components/tra-cuu-benh/tra-cuu-benh.component';
import { ThuocComponent } from './components/thuoc/thuoc.component';
import { ChiTietBenhComponent } from './components/chi-tiet-benh/chi-tiet-benh.component';
import { ChiTietThuocComponent } from './components/chi-tiet-thuoc/chi-tiet-thuoc.component';

//service
import { NavbarService } from './services/top-nav/navbar.service';
import { LeftNavbarService } from './services/left-nav/left-navbar.service';
import { SoYBaComponent } from './components/so-yba/so-yba.component';
import { AppAutoFocusDirective } from './directives/app-auto-focus.directive';
import { BenhService } from './services/benh.service'
import { MenuService } from './services/menu.service';
import { UserService } from './services/user.service';
import { ForumBarService } from './services/forum-bar.service';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { VerifyCodeComponent } from './components/verify-code/verify-code.component';
import { LoadDuLieuTextComponent } from './components/load-du-lieu-text/load-du-lieu-text.component';
import { LoadDuLieuImgComponent } from './components/load-du-lieu-img/load-du-lieu-img.component';
import { ChanDoanHinhAnhComponent } from './components/chan-doan-hinh-anh/chan-doan-hinh-anh.component';
import { LoadDuLieuYoutubeComponent } from './components/load-du-lieu-youtube/load-du-lieu-youtube.component';
import { LoadDuLieuLinkComponent } from './components/load-du-lieu-link/load-du-lieu-link.component';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { LogoutComponent } from './components/logout/logout.component';
import { QuenMatKhauComponent } from './components/quen-mat-khau/quen-mat-khau.component';
import { ForumBarComponent } from './components/forum-bar/forum-bar.component';

import { ThayDoiMatKhauComponent } from './components/thay-doi-mat-khau/thay-doi-mat-khau.component'
import {HoiChanTrucTuyenComponent} from './components/hoi-chan-truc-tuyen/hoi-chan-truc-tuyen.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'soyba', component: SoYBaComponent },
    { path: 'tracuubenh', component: TraCuuBenhComponent },
    { path: 'thuoc', component: ThuocComponent },
    { path: 'chitiet', component: ChiTietBenhComponent },
    { path: 'chitietthuoc', component: ChiTietThuocComponent },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'forgotPassword', component: QuenMatKhauComponent },
    { path: 'changePassword/:IdU/:phone', component: ThayDoiMatKhauComponent },
    { path: 'chandoanhinhanh', component: ChanDoanHinhAnhComponent },
     { path: 'hoichantructuyen', component: HoiChanTrucTuyenComponent },
    { path: 'verify/:IdU/:phone/:code', component: VerifyCodeComponent },
    // 
    { path: '**', component: PageNotFoundComponent }
];


@NgModule({
    declarations: [
        //component
        AppComponent,
        HomeComponent,
        PageNotFoundComponent,
        NavigationComponent,
        LeftNavigationComponent,
        SoYBaComponent,
        TraCuuBenhComponent,
        ThuocComponent,
        ChiTietBenhComponent,
        ChiTietThuocComponent,
        AppAutoFocusDirective,
        LoginComponent,
        RegisterComponent,
        VerifyCodeComponent,
        LoadDuLieuTextComponent,
        LoadDuLieuImgComponent,
        ChanDoanHinhAnhComponent,
        LoadDuLieuYoutubeComponent,
        LoadDuLieuLinkComponent,
        SafeUrlPipe,
        LogoutComponent,
        QuenMatKhauComponent,
        
        ThayDoiMatKhauComponent,
        HoiChanTrucTuyenComponent,
        ForumBarComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        InfiniteScrollModule ,
        BrowserAnimationsModule,
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true }
        )
    ],
    providers: [
        //services
        NavbarService,
        LeftNavbarService,
        BenhService,
        MenuService,
        UserService,
        ForumBarService

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);