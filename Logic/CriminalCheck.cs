using CreditApp.Interfaces;
using CreditApp.Models;

namespace CreditApp.Logic;

public class CriminalCheck : ICriminalCheck
{
    public async Task<bool> IsCriminal(User user)
    {
        return user.Passport == "9214-835332" || user.InfoPassport == "УФМС 10.10.10";
    }
}