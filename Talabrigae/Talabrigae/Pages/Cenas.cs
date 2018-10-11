using System;

using Xamarin.Forms;

namespace Talabrigae.Pages
{
    public class Cenas : ContentPage
    {
        public Cenas()
        {
            Content = new StackLayout
            {
                Children = {
                    new Label { Text = "Hello ContentPage" }
                }
            };
        }
    }
}

