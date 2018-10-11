using System;

using Xamarin.Forms;

namespace Talabrigae.Pages
{
    public class MenuPage : TabbedPage
    {
        public MenuPage()
        {
            Title = "Menu";

            Children.Add(new BasePage()
            {
                Title = "Início"
            });

            Children.Add(new Cenas()
            {
                Title = "Cenas"
            });

        }
    }
}
