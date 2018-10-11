using System;
using Talabrigae.Pages;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;
using MySql.Data.MySqlClient;

[assembly: XamlCompilation(XamlCompilationOptions.Compile)]
namespace Talabrigae
{
    public partial class App : Application
    {
   

        public App()
        {
            MainPage = new BasePage();
        }

        protected override void OnStart()
        {
        }

        protected override void OnSleep()
        {
            // Handle when your app sleeps
        }

        protected override void OnResume()
        {
            // Handle when your app resumes
        }
    }
}
