import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'login.html'),
        signup: resolve(__dirname, 'signup.html'),
        adminLogin: resolve(__dirname, 'admin-login.html'),
        userDashboard: resolve(__dirname, 'user/dashboard.html'),
        userApply: resolve(__dirname, 'user/apply.html'),
        userDocuments: resolve(__dirname, 'user/documents.html'),
        userTrack: resolve(__dirname, 'user/track.html'),
        userAppointment: resolve(__dirname, 'user/appointment.html'),
        userReceipt: resolve(__dirname, 'user/receipt.html'),
        adminDashboard: resolve(__dirname, 'admin/dashboard.html'),
        adminApplications: resolve(__dirname, 'admin/applications.html'),
        adminUsers: resolve(__dirname, 'admin/users.html')
      }
    }
  }
});
