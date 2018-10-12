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
                "Cenas 2"
            };

            lista.ItemTapped += (sender, e) =>
            {
                string URL = "https://filipengine.pt/teste/login.php";//fazer upload do ficheiro php para um servidor ftp e colocar o url aqui
                WebClient webClient = new WebClient();
                NameValueCollection formData = new NameValueCollection();
                formData["nome"] = "Igori";
                formData["password"] = "123";
                byte[] responseBytes = webClient.UploadValues(URL, "POST", formData);
                string responsefromserver = Encoding.UTF8.GetString(responseBytes);
                Console.WriteLine(responsefromserver);

                int convresponse = Convert.ToInt32(responsefromserver);
                switch (convresponse){
                    case 1:
                        DisplayAlert("Resposta do servidor", "Password incorreta", "OK");
                        break;
                    case 2:
                        DisplayAlert("Resposta do servidor","Login efetuado com sucesso!", "OK");
                        break;
                    case 0:
                        DisplayAlert("Resposta do servidor", "Conta inexistente", "OK");
                        break;
                    default:
                        DisplayAlert("Resposta do servidor", responsefromserver, "OK");
                        break;
                }





                webClient.Dispose();
            };
                //DisplayAlert("Sabores", "Eu sou lindo", "OK");
            

            Content = lista;

           

        }
    }
    }
   




