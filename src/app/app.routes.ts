import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { ContactForm } from './pages/contact-form/contact-form';

export const routes: Routes = [
    {
        path : '',
        component : Home
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'about',
        component: About
    },
    {
        path: 'contact',
        component: ContactForm
    }
];
