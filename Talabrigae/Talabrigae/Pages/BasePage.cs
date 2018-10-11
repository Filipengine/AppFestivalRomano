using System;
using Xamarin.Forms;
using MySql;
using MySql.Data;
using MySql.Data.MySqlClient;
using System.Net;
using System.Collections.Specialized;
using System.Text;

namespace Talabrigae.Pages
{
    public class BasePage : ContentPage
    {


        public BasePage()
        {
         

            Title = "Início";

            var lista = new ListView();
            lista.ItemsSource = new[] {
                "Cenas",
                "Cenas 1",
                "Cenas 3"
            };

            lista.ItemTapped += (sender, e) =>
            {
                DisplayAlert("Sabores", "Eu sou lindo", "OK");
            };
                
            

            Content = lista;

           

        }
    }
    }
   




